import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "./Booking";

const AvailableAppointment = ({ date }) => {
  const [bookingSuccessful, setBookingSuccessful] = useState(false);

  const bookings = [
    {
      id: 1,
      name: "Cavity Protection",
      time: "11.00 AM - 12.00 PM",
      space: 5,
    },
    {
      id: 2,
      name: "Cavity Protection 2",
      time: "11.00 AM - 12.00 PM",
      space: 5,
    },
    {
      id: 3,
      name: "Cavity Protection 3",
      time: "11.00 AM - 12.00 PM",
      space: 5,
    },
    {
      id: 4,
      name: "Cavity Protection 4",
      time: "11.00 AM - 12.00 PM",
      space: 5,
    },
    {
      id: 5,
      name: "Cavity Protection 5",
      time: "11.00 AM - 12.00 PM",
      space: 5,
    },
    {
      id: 6,
      name: "Cavity Protection 6",
      time: "11.00 AM - 12.00 PM",
      space: 5,
    },
  ];

  return (
    <div>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ color: "info.main" }}
        >
          Aviable Appointment on {date.toDateString()}
        </Typography>
        {bookingSuccessful && (
          <Alert severity="success">Booking SuccessFull!!</Alert>
        )}
        <Grid container spacing={2}>
          {bookings.map((booking) => (
            <Booking
              key={booking.id}
              booking={booking}
              date={date}
              setBookingSuccessful={setBookingSuccessful}
            ></Booking>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AvailableAppointment;
