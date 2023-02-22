from http import HTTPStatus
from fastapi import APIRouter, Depends, UploadFile, File
from fastapi.encoders import jsonable_encoder
from starlette.responses import JSONResponse

from app.dto import request, response
from app.api.message.message_service import MessageService

router = APIRouter()

@router.post("", response_model=response.MessageResponse)
def create_message(
    request_body: request.CreateMessageBody,
    image_file: UploadFile = File(...),
    message_service: MessageService = Depends()
    ) -> JSONResponse:
    '''
    메세지 생성 api
    '''
    result = message_service.create_message(request_body, image_file)
    return JSONResponse(
        status_code=HTTPStatus.CREATED,
        content=jsonable_encoder(result)
        )

@router.get("", response_model=list[response.MessageResponse])
def get_messages(
    request_params: request.MessageListParam = Depends(),
    message_service: MessageService = Depends()
    ) -> JSONResponse:
    '''
    메세지 리스트 조회 api
    '''
    result = message_service.get_message_list(request_params)
    return JSONResponse(
        status_code=HTTPStatus.OK,
        content=jsonable_encoder(result)
        )

@router.get("/{message_id}", response_model=response.MessageResponse)
def get_message(
    request_params: request.EachMessageParam = Depends(),
    message_service: MessageService = Depends()
    ) -> JSONResponse:
    '''
    메세지 조회 api 
    '''
    result = message_service.get_message(request_params)
    return JSONResponse(
        status_code=HTTPStatus.OK,
        content=jsonable_encoder(result)
        )
