from sqlalchemy.orm import Session

from app.dto import request, response
from app.model.schema import Cake, CakeDesign

class CRUDCake:
    def __init__(self, db: Session):
        self.db = db

    def get_cake(self, request_params: request.CakeParam) -> response.CakeResponse:
        return self.db.query(Cake).filter(Cake.id == request_params.cake_id).one()

    def create_cake(self, request_body: request.CreateCakeBody) -> response.CakeResponse:
        return 

    def update_cake(self, request_body: request.UpdateCakeBody) -> response.CakeResponse:
        cake: Cake = self.db.query(Cake).filter(Cake.id == request_body.cake_id).one()
        return 

    def get_cake_designs(self) -> list[response.CakeDesignResponse]:
        return self.db.query(CakeDesign).all()