import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../../images/login.png";

const Register = () => {
  const [regData, setRegData] = useState({});
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegData = { ...regData };
    newRegData[field] = value;
    setRegData(newRegData);
  };
  const handleSubmit = (e) => {
    if (regData.password !== regData.passwordTwo) {
      window.alert("Not Matched Password!");
      return;
    }
    e.preventDefault();
  };

  return (
    <div>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={6}>
            <Typography variant="h2" gutterBottom component="div">
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ width: "75%", mt: 3 }}
                id="standard-basic"
                label="Email"
                variant="standard"
                name="email"
                type="email"
                onChange={handleOnChange}
              />
              <TextField
                sx={{ width: "75%", mt: 3 }}
                id="standard-basic"
                label="Password"
                type="password"
                variant="standard"
                name="password"
                onChange={handleOnChange}
              />
              <TextField
                sx={{ width: "75%", mt: 3, mb: 3 }}
                id="standard-basic"
                label="Confirm Password"
                type="password"
                variant="standard"
                name="passwordTwo"
                onChange={handleOnChange}
              />

              <br></br>
              <Button sx={{ width: "75%", mt: 1 }} variant="contained">
                Register
              </Button>
            </form>
            <br></br>
            <p>
              Have any account?{" "}
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Button
                  style={{ color: "black", textTransform: "capitalize" }}
                  variant="text"
                >
                  Login
                </Button>
              </Link>
            </p>
            <p>
              Wanna Go <Link to="/">Homepage?</Link>
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "auto", height: "100vh" }}
              src={loginImg}
              alt="login Img"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
