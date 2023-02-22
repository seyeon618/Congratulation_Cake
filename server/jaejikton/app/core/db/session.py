
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.config.setting import settings

# engine = create_engine(settings.SQLALCHEMY_DATABASE_URI,
#                        connect_args={'options': f'-csearch_path={settings.POSTGRES_SCHEMA}'}, pool_pre_ping=True, echo=False)

engine = create_engine("postgresql://scott:tiger@localhost/mydatabase",
                       connect_args={'options': f'-csearch_path={settings.POSTGRES_SCHEMA}'}, pool_pre_ping=True, echo=False)



SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


