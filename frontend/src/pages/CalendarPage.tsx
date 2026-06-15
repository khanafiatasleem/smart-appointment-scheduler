import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useLocation } from "react-router-dom";

import { getAppointments } from "../api/appointmentApi";

const CalendarPage = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
const location = useLocation();
  useEffect(() => {
    const load = async () => {
      const data = await getAppointments();
      setAppointments(data);
    };

    load();
  }, [location]);

  const events = appointments.map((a) => ({
    title: a.title,
    date: a.appointmentDate,
  }));

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