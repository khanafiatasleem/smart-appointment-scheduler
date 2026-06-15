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

import { useAppointmentStore } from "../store/appointmentStore";

const DashboardPage = () => {
  const appointments = useAppointmentStore(
    (state) => state.appointments
  );

  const stats = [
    {
      title: "Total Appointments",
      value: appointments.length,
    },
    {
      title: "Today's Appointments",
      value: appointments.length,
    },
    {
      title: "Upcoming",
      value: appointments.length,
    },
    {
      title: "Completed",
      value: 0,
    },
  ];

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid
            key={stat.title}
            size={{ xs: 12, sm: 6, md: 3 }}
          >
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

      <Typography
        variant="h5"
        sx={{ mt: 4, mb: 2 }}
      >
        Appointments
      </Typography>

      <TableContainer component={Paper}>
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
            {appointments.length > 0 ? (
              appointments.map(
                (appointment) => (
                  <TableRow
                    key={appointment.id}
                  >
                    <TableCell>
                      {appointment.title}
                    </TableCell>

                    <TableCell>
                      {
                        appointment.description
                      }
                    </TableCell>

                    <TableCell>
                      {
                        appointment.appointmentDate
                      }
                    </TableCell>

                    <TableCell>
                      {
                        appointment.appointmentTime
                      }
                    </TableCell>

                    <TableCell>
                      {
                        appointment.location
                      }
                    </TableCell>
                  </TableRow>
                )
              )
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  align="center"
                >
                  No appointments found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DashboardPage;