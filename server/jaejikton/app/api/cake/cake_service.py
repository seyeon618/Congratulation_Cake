from fastapi import Depends

from sqlalchemy.orm import Session

from app.dto import request, response
from app.core.dependencies import get_db
from app.crud.crud_cake import CRUDCake

class CakeService:
    def __init__(self, db: Session=Depends(get_db)):
        self.db = db
        self.crud_cake = CRUDCake(db)

    def get_cake(self, request_params: request.CakeParam) -> response.CakeResponse:
        return self.crud_cake.get_cake(request_params.cake_id)

    def create_cake(self, request_body: request.CreateCakeBody) -> response.CakeResponse:
        return self.crud_cake.create_cake(request_body)

    def update_cake(self, request_body: request.UpdateCakeBody) -> response.CakeResponse:
        return self.crud_cake.update_cake(request_body)

    def get_cake_designs(self) -> list[response.CakeDesignResponse]:
        return self.crud_cake.get_cake_designs()