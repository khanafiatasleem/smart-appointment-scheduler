import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { useAppointmentStore } from "../store/appointmentStore";

const CalendarPage = () => {
  const appointments = useAppointmentStore(
    (state) => state.appointments
  );

  const events = appointments.map(
    (appointment) => ({
      title: appointment.title,
      date: appointment.appointmentDate,
    })
  );

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      height="80vh"
    />
  );
};

export default CalendarPage;