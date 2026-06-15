import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { getAppointments } from "../api/appointmentApi";
const location = useLocation();


const DashboardPage = () => {
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getAppointments();
      setAppointments(data);
    };

    load();
  }, [location]);


  const stats = [
    { title: "Total Appointments", value: appointments.length },
    { title: "Today", value: appointments.length },
    { title: "Upcoming", value: appointments.length },
    { title: "Completed", value: 0 },
  ];

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  {stat.title}
                </Typography>
                <Typography variant="h4">
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ mt: 4 }}>
        Appointments
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {appointments.map((a) => (
              <TableRow key={a.id}>
                <TableCell>{a.title}</TableCell>
                <TableCell>{a.description}</TableCell>
                <TableCell>{a.appointmentDate}</TableCell>
                <TableCell>{a.appointmentTime}</TableCell>
                <TableCell>{a.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DashboardPage;