import inspect
import sunholo
import os

def list_functions(module):
    functions = inspect.getmembers(module, inspect.isfunction)
    return [(func_name, func, inspect.signature(func), inspect.getfile(func)) for func_name, func in functions if func.__module__.startswith("sunholo")]

def list_classes(module):
    classes = inspect.getmembers(module, inspect.isclass)
    return [(cls_name, cls, inspect.getfile(cls)) for cls_name, cls in classes if cls.__module__.startswith("sunholo")]

def list_all_functions_and_classes_in_package(package):
    functions = []
    classes = []
    for _, module in inspect.getmembers(package, inspect.ismodule):
        functions.extend(list_functions(module))
        classes.extend(list_classes(module))
        # Recursively find submodules
        submodules = inspect.getmembers(module, inspect.ismodule)
        for _, submodule in submodules:
            functions.extend(list_functions(submodule))
            classes.extend(list_classes(submodule))
    return functions, classes

def append_docstrings_to_md(package, output_file='docs/docs/functions.md'):
    functions, classes = list_all_functions_and_classes_in_package(package)

    if not functions and not classes:
        print("No functions or classes found in module.")
    else:
        print(f"Found functions: {[name for name, _, _, _ in functions]}")
        print(f"Found classes: {[cls_name for cls_name, _, _ in classes]}")

    with open(output_file, 'a') as f:
        f.write("# Functions\n\n")
        for func_name, func, signature, source_file in functions:
            relative_file_path = os.path.relpath(source_file)
            docstring = inspect.getdoc(func)
            f.write(f"## {func_name}{signature}\n")
            f.write(f"*Source*: [{relative_file_path}]({relative_file_path})\n")
            f.write(f"{docstring or 'No docstring available.'}\n\n")

        f.write("# Classes\n\n")
        for cls_name, cls, source_file in classes:
            relative_file_path = os.path.relpath(source_file)
            cls_docstring = inspect.getdoc(cls)
            f.write(f"## {cls_name}\n")
            f.write(f"*Source*: [{relative_file_path}]({relative_file_path})\n")
            f.write(f"{cls_docstring or 'No docstring available.'}\n\n")
            for method_name, method in inspect.getmembers(cls, inspect.isfunction):
                signature = inspect.signature(method)
                method_docstring = inspect.getdoc(method)
                f.write(f"* {method_name}{signature}\n")
                f.write(f"   - {method_docstring or 'No docstring available.'}\n\n")

if __name__ == "__main__":
    append_docstrings_to_md(sunholo)
