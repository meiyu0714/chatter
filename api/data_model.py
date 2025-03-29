from pydantic import BaseModel
from openai import OpenAI

class Message(BaseModel):
    text: str
    source: str


class ChatInput(BaseModel):
    messages: list[Message]


###################################
# Below: RAG related data models.
class ReferenceData(BaseModel):
    url: str
    page_title: str
    text_summary: str


class RAGResponse(BaseModel):
    # Reference sources.
    references: list[ReferenceData]

    # Responded text from the model.
    content: str
