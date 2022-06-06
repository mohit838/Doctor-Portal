import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "./../../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const Bookingmodal = ({
  open,
  handleClose,
  booking,
  date,
  setBookingSuccessful,
}) => {
  const { name, time } = booking;

  const { user } = useAuth();

  const initialInfo = {
    patientName: user.displayName,
    patientEmail: user.email,
    phone: " ",
  };

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    //Collect Data
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      // toLocalDateString() leading to an error "Not a funciton"
      date: date.toDateString(),
    };

    //Send to the server
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccessful(true);
          handleClose();
        }
      });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>

            <form onSubmit={handleBookingSubmit} sx={{ mt: 2 }}>
              <TextField
                sx={{ width: "90%", m: 3 }}
                disabled
                id="standard-size-small"
                defaultValue={time}
                size="small"
                variant="standard"
              />
              <TextField
                sx={{ width: "90%", m: 3 }}
                id="standard-size-small"
                name="patientName"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                size="small"
                variant="standard"
              />
              <TextField
                sx={{ width: "90%", m: 3 }}
                id="standard-size-small"
                name="patientEmail"
                onBlur={handleOnBlur}
                defaultValue={user.email}
                size="small"
                variant="standard"
              />
              <TextField
                sx={{ width: "90%", m: 3 }}
                id="standard-size-small"
                name="phone"
                onBlur={handleOnBlur}
                defaultValue="Your Phone"
                size="small"
                variant="standard"
              />
              <TextField
                disabled
                sx={{ width: "90%", m: 3 }}
                id="standard-size-small"
                defaultValue={date.toDateString()}
                size="small"
                variant="standard"
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Bookingmodal;
