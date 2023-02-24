from http import HTTPStatus
from fastapi import Depends, HTTPException

from sqlalchemy.orm import Session

from app.dto import request, response
from app.core.dependencies import get_db
from app.crud.crud_cake import CRUDCake

Base_domain_url = "http://congratulation.today"

class CakeService:
    def __init__(self, db: Session=Depends(get_db)):
        self.db = db
        self.crud_cake = CRUDCake(db)

    def get_cake(self, request_params: request.CakeParam) -> response.CakeResponse:
        return self.crud_cake.get_cake(request_params)

    def create_cake(self, request_body: request.CreateCakeBody) -> response.CakeResponse:
        cake = self.crud_cake.create_cake(request_body)
        cake.link = f"{Base_domain_url}/cake/{cake.id}"
        return cake

    def update_cake(self, request_body: request.UpdateCakeBody) -> response.CakeResponse:
        check_cake_admin = self.crud_cake.check_cake_admin(request_body.cake_id, request_body.password)
        if check_cake_admin:
            return self.crud_cake.update_cake(request_body)
        else:
            raise HTTPException(status_code=HTTPStatus.BAD_REQUEST, detail="권한 없습니다.")

    def get_cake_designs(self) -> list[response.CakeDesignResponse]:
        return self.crud_cake.get_cake_designs()