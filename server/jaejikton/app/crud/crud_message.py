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
        messages = self.db.query(Message).filter(Message.cake_id == request_params.cake_id).all()
        return [response.MessageResponse(id=message.id, image_url=message.image_url, message=message.message) for message in messages]

    def get_message(self, request_params: request.EachMessageParam) -> response.MessageResponse:
        try:
            message = self.db.query(Message).filter(Message.id == request_params.message_id).one()
            return response.MessageResponse(id=message.id, image_url=message.image_url, message=message.message)
        except NoResultFound:
            raise HTTPException(status_code=HTTPStatus.BAD_REQUEST, detail="Message not exist")

    def create_message(self, request_body: request.CreateMessageBody) -> response.MessageResponse:
        new_message = Message(**request_body.dict())
        self.db.add(new_message)
        self.db.commit()
        self.db.refresh(new_message)
        return response.MessageResponse(id=new_message.id, image_url=new_message.image_url, message=new_message.message)