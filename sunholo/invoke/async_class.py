import asyncio
import logging
import traceback
from typing import Callable, List, Any, AsyncGenerator, Dict
from tenacity import AsyncRetrying, retry_if_exception_type, wait_random_exponential, stop_after_attempt

logger = logging.getLogger(__name__)

class AsyncTaskRunner:
    def __init__(self, retry_enabled=False, retry_kwargs=None):
        self.tasks = []
        self.retry_enabled = retry_enabled
        self.retry_kwargs = retry_kwargs or {}
    
    def add_task(self, func: Callable[..., Any], *args: Any):
        """Adds a task to the list of tasks to be executed."""
        logger.info(f"Adding task: {func.__name__} with args: {args}")
        self.tasks.append((func.__name__, func, args))
    
    async def run_async_as_completed(self) -> AsyncGenerator[Dict[str, Any], None]:
        """Runs all tasks concurrently and yields results as they complete."""
        logger.info("Running tasks asynchronously and yielding results as they complete")
        tasks = {}
        for name, func, args in self.tasks:
            coro = self._task_wrapper(name, func, args)
            task = asyncio.create_task(coro)
            tasks[task] = name
        
        while tasks:
            done, _ = await asyncio.wait(tasks.keys(), return_when=asyncio.FIRST_COMPLETED)
            for task in done:
                name = tasks.pop(task)
                try:
                    result = await task
                    yield {name: result}
                except Exception as e:
                    logger.error(f"Task {name} resulted in an error: {e}\n{traceback.format_exc()}")
                    yield {name: e}
    
    async def _task_wrapper(self, name: str, func: Callable[..., Any], args: Any) -> Any:
        """Wraps the task function to process its output and handle retries."""
        async def run_func():
            gen = func(*args)
            if hasattr(gen, '__aiter__'):
                # If it's an async generator, consume it completely
                output = ''
                async for chunk in gen:
                    output += chunk
                return output
            else:
                # If it's a coroutine, await the result
                return await gen

        if self.retry_enabled:
            retry_kwargs = {
                'wait': wait_random_exponential(multiplier=1, max=60),
                'stop': stop_after_attempt(5),
                'retry': retry_if_exception_type(Exception),
                **self.retry_kwargs
            }
            async for attempt in AsyncRetrying(**retry_kwargs):
                with attempt:
                    return await run_func()
        else:
            try:
                return await run_func()
            except Exception as e:
                logger.error(f"Error in task {name}: {e}\n{traceback.format_exc()}")
                raise

    def _log_results(self, results: List[Any]):
        """Logs the results of the task executions."""
        for result in results:
            if isinstance(result, Exception):
                logger.error(f"Task resulted in an error: {result}")
            else:
                logger.info(f"Task completed successfully: {result}")