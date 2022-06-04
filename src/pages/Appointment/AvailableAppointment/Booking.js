import { Button, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import Bookingmodal from "../BookingModal/Bookingmodal";

const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item xs={12} md={4} sm={6}>
        <Paper elevation={3} sx={{ py: 3 }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ color: "info.main", fontWeight: "600" }}
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {space} Space Available
          </Typography>
          <Button
            onClick={handleOpen}
            variant="contained"
            style={{
              backgroundColor: "deepPurple",
              padding: "10px 30px",
              fontSize: "15px",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
          >
            Booking Appointment
          </Button>
        </Paper>
      </Grid>
      <Bookingmodal
        open={open}
        handleClose={handleClose}
        booking={booking}
        date={date}
      ></Bookingmodal>
    </>
  );
};

export default Booking;
