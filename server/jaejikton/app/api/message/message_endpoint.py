import aiofiles
import io
from PIL import Image
from rembg import remove

from http import HTTPStatus
from typing import Optional
from fastapi import APIRouter, Depends, UploadFile, File, Form
from fastapi.encoders import jsonable_encoder
from starlette.responses import JSONResponse, StreamingResponse

from app.dto import request, response
from app.api.message.message_service import MessageService

router = APIRouter()

@router.post("", response_model=response.MessageResponse)
async def create_message(
    # request_body: request.CreateMessageBody,
    cake_id: int = Form(...),
    message: str = Form(...),
    image_file: UploadFile = File(...),
    message_service: MessageService = Depends()
    ) -> JSONResponse:
    '''
    메세지 생성 api
    '''
    f = await image_file.read()
    image = io.BytesIO(f)
    result = message_service.create_message(cake_id, message, image)
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

@router.post("/remove-background/")
async def remove_background(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))
    output = remove(image.convert("RGBA"), alpha_matting=True)
    buffered = io.BytesIO()
    output.save(buffered, format="PNG")
    buffered.seek(0)
    return StreamingResponse(content=buffered, media_type="image/png")