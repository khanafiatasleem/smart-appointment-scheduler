from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Appointment
from ..schemas import AppointmentCreate, AppointmentResponse

router = APIRouter(prefix="/appointments", tags=["Appointments"])
@router.post("/")
def create_appointment(request: AppointmentCreate, db: Session = Depends(get_db)):
    new_appointment = Appointment(**request.dict())
    db.add(new_appointment)
    db.commit()
    db.refresh(new_appointment)
    return new_appointment