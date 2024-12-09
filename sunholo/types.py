from typing import Any, Dict, Optional, TYPE_CHECKING, Union
from dataclasses import dataclass, asdict
import json

if TYPE_CHECKING:
    from langchain.schema import Document as LangchainDocument


@dataclass
class Document:
    """A simple document class with content and metadata.
    
    Used for storing text content and associated metadata when not using LangChain.
    Maintains the same basic interface (page_content and metadata) for compatibility.
    
    Using @dataclass makes it automatically serializable and provides nice defaults.
    """
    page_content: str
    metadata: Dict[str, Any] = None

    def __post_init__(self) -> None:
        """Initialize metadata if None."""
        if self.metadata is None:
            self.metadata = {}

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary."""
        return asdict(self)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "Document":
        """Create from dictionary."""
        return cls(**data)

    def json(self) -> str:
        """Convert to JSON string - for compatibility with LangChain's Document."""
        return json.dumps(self.to_dict())

def convert_to_langchain_doc(doc: Document) -> Union[Any, "LangchainDocument"]:
    """Convert our Document to a LangChain Document.
    
    Returns Any when LangChain isn't available to avoid type errors.
    Only imports LangChain when the function is actually called.
    """
    try:
        from langchain.schema import Document as LangchainDocument
        return LangchainDocument(
            page_content=doc.page_content,
            metadata=doc.metadata
        )
    except ImportError:
        raise ImportError("LangChain is required for this conversion. Please install langchain.")