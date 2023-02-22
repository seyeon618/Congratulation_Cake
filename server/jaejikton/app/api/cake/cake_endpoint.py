from http import HTTPStatus
from fastapi import APIRouter, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from starlette.responses import JSONResponse

from app.dto import request, response
from app.api.cake.cake_service import CakeService

router = APIRouter()

@router.post("", response_model=response.CakeResponse)
def create_cake(
    request_params: request.CreateCakeBody,
    cake_service: CakeService = Depends()
    ) -> JSONResponse:
    '''
    케이크 생성 api
    '''
    result = cake_service.create_cake(request_params)
    return JSONResponse(
        status_code=HTTPStatus.CREATED,
        content=jsonable_encoder(result)
        )

@router.get("", response_model=response.CakeResponse)
def get_cake(
    request_body: request.CakeParam = Depends(),
    cake_service: CakeService = Depends()
    ) -> JSONResponse:
    '''
    케이크 조회 api
    '''
    result = cake_service.get_cake(request_body)
    return JSONResponse(
        status_code=HTTPStatus.OK,
        content=jsonable_encoder(result)
        )

@router.put("/{cake_id}", response_model=response.CakeResponse)
def update_cake(
    request_body: request.UpdateCakeBody,
    cake_service: CakeService = Depends()
    ) -> JSONResponse:
    '''
    케이크 수정 api
    '''
    result = cake_service.update_cake(request_body)
    return JSONResponse(
        status_code=HTTPStatus.OK,
        content=jsonable_encoder(result)
        )

@router.get("/designs", response_model=list[response.CakeDesignResponse])
def get_cake_designs(
    cake_service: CakeService = Depends()
) -> list[response.CakeDesignResponse]:
    '''
    케이크 디자인 조회 api
    '''
    results = cake_service.get_cake_designs()
    return JSONResponse(
        status_code=HTTPStatus.OK,
        content=jsonable_encoder(results)
        )

