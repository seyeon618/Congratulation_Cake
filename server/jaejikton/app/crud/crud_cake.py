from http import HTTPStatus
from fastapi import HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.orm.exc import NoResultFound

from app.dto import request, response
from app.model.schema import Cake, CakeDesign

class CRUDCake:
    def __init__(self, db: Session):
        self.db = db

    def get_cake(self, request_params: request.CakeParam) -> response.CakeResponse:
        try:
            cake: Cake = self.db.query(Cake).filter(Cake.id == request_params.cake_id).one()
            return response.CakeResponse(id=cake.id, receiver=cake.receiver, date_of_birth=cake.date_of_birth,
                                     cake_design_id=cake.cake_design_id)
        except NoResultFound:
            raise HTTPException(status_code=HTTPStatus.NOT_FOUND, detail="케이크가 존재하지 않습니다.")

    def create_cake(self, request_body: request.CreateCakeBody) -> response.CakeResponse:
        new_cake = Cake(**request_body.dict())
        self.db.add(new_cake)
        self.db.commit()
        self.db.refresh(new_cake)
        return response.CakeResponse(id=new_cake.id, receiver=new_cake.receiver, 
        date_of_birth=new_cake.date_of_birth, cake_design_id=new_cake.cake_design_id)

    def update_cake(self, request_body: request.UpdateCakeBody) -> response.CakeResponse:
        try:
            cake: Cake = self.db.query(Cake).filter(Cake.id == request_body.cake_id).one()
            cake_update_obj = request_body.dict(exclude_none=True)
            for field in cake_update_obj:
                setattr(cake, field, cake_update_obj[field])
            self.db.commit()
            self.db.refresh(cake)
            return response.CakeResponse(id=cake.id, receiver=cake.receiver, date_of_birth=cake.date_of_birth,
                                         cake_design_id=cake.cake_design_id)
        
        except NoResultFound:
            raise HTTPException(status_code=HTTPStatus.NOT_FOUND, detail="케이크가 존재하지 않습니다.")

    def get_cake_designs(self) -> list[response.CakeDesignResponse]:
        cake_designs = self.db.query(CakeDesign).all()
        return [response.CakeDesignResponse(id=cake_design.id, image_url=cake_design.image_url) for cake_design in cake_designs]

    def check_cake_admin(self, cake_id: int, password: str) -> bool:
        cake: Cake = self.db.query(Cake).filter(Cake.id == cake_id).one()
        return cake.password == password