import uvicorn

from fastapi import FastAPI, Request

from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware

from app.core import dependencies
from app.core.config.setting import settings
from app.api.api import api_router

def create_app() -> FastAPI:
# openapi_url=f"/jaejik-3team/openapi.json"
    app = FastAPI(
        title='jaejikton'
    )

    # Set all CORS enabled origins
    # app.add_middleware(
    #         CORSMiddleware,
    #         allow_origins=["*"],
    #         allow_credentials=True,
    #         allow_methods=["*"],
    #         allow_headers=["*"],
    #     )

    # app.add_middleware(BaseHTTPMiddleware, _db_generator=dependencies.get_db)
    # app.add_middleware(FileSizeCheckMiddleware, _path_checker=PathChecker())

    app.include_router(api_router, prefix="/api/v1")

    return app

app = create_app()

if __name__ == '__main__':
    # create_declared_tables()  # Optional
    uvicorn.run(app, host="0.0.0.0", port=80)