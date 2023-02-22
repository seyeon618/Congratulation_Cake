from http import HTTPStatus
from fastapi import HTTPException

from sqlalchemy.orm import Session
from sqlalchemy.orm.exc import NoResultFound

from app.dto import request, response
from app.model.schema import Message

class CRUDMessage:
    def __init__(self, db: Session):
        self.db = db

    def get_messages(self, request_params: request.MessageListParam) -> list[response.MessageResponse]:
        return self.db.query(Message).filter(Message.cake_id == request_params.cake_id).all()

    def get_message(self, request_params: request.EachMessageParam) -> response.MessageResponse:
        try:
            return self.db.query(Message).filter(Message.id == request_params.message_id).one()
        except NoResultFound:
            raise HTTPException(status_code=HTTPStatus.BAD_REQUEST, detail="Message not exist")

    def create_message(self, request_body: request.CreateMessageBody) -> response.MessageResponse:
        return None