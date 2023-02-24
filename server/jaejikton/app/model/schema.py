from dataclasses import dataclass

from datetime import date, datetime

from sqlalchemy import Column, String, ForeignKey, Identity, Integer, ForeignKeyConstraint, UniqueConstraint, Date, \
    Float, DateTime, Boolean, text, ARRAY, Text, Time
from sqlalchemy.orm import relationship

from app.model.base_class import Base

@dataclass
class Cake(Base):
    __tablename__ = "cake"
    id: int = Column(Integer, Identity(start=1, cycle=True), primary_key=True)
    receiver: str = Column(String)
    password: str = Column(String)
    date_of_birth: date = Column(Date)
    cake_design_id: int = Column(Integer, ForeignKey("cake_design.id"))
    created_time: datetime = Column(DateTime(timezone=True), server_default=text('NOW()'))
    updated_time: datetime = Column(DateTime(timezone=True), server_default=text('NOW()'), onupdate=text('NOW()'))

    cake_design = relationship("CakeDesign", back_populates="cake")
    messages = relationship("Message", back_populates="cake")

@dataclass
class CakeDesign(Base):
    __tablename__ = "cake_design"
    id: int = Column(Integer, Identity(start=1, cycle=True), primary_key=True)
    image_url: str = Column(String)

    cake = relationship("Cake", back_populates="cake_design")

@dataclass
class Message(Base):
    __tablename__ = "message"
    id: int = Column(Integer, Identity(start=1, cycle=True), primary_key=True)
    cake_id: int = Column(Integer, ForeignKey("cake.id"))
    image_url = Column(String)
    message: str = Column(String)
    created_at: date = Column(Date)

    cake = relationship("Cake", back_populates="messages")

