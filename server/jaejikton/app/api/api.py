from fastapi import APIRouter

from app.api.cake import cake_endpoint
from app.api.message import message_endpoint

api_router = APIRouter()
api_router.include_router(cake_endpoint.router, prefix="/cake", tags=["cakes"])
api_router.include_router(message_endpoint.router, prefix="/message", tags=["messages"])