from fastapi import Depends

from sqlalchemy.orm import Session

from app.dto import request, response
from app.core.dependencies import get_db
from app.crud.crud_message import CRUDMessage

class MessageService:
    def __init__(self, db: Session = Depends(get_db)):
        self.db = db
        self.crud_message = CRUDMessage(db)

    def get_message(self, request_params: request.EachMessageParam) -> response.MessageResponse:
        return self.get_message(request_params)

    def get_message_list(self, request_params: request.MessageListParam) -> list[response.MessageResponse]:
        return self.get_message_list(request_params)

    def create_message(self, request_body: request.CreateMessageBody) -> response.MessageResponse:
        return self.create_message(request_body)
