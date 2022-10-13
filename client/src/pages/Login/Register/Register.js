import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import loginImg from "../../../images/login.png";
import CircularProgress from "@mui/material/CircularProgress";

const Register = () => {
  const [regData, setRegData] = useState({});
  const navigate = useNavigate();

  const { user, createNewUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegData = { ...regData };
    newRegData[field] = value;
    setRegData(newRegData);
  };
  const handleRegSubmit = (e) => {
    if (regData.password !== regData.passwordTwo) {
      window.alert("Not Matched Password!");
      return;
    }

    createNewUser(regData.email, regData.password, regData.name, navigate);

    e.preventDefault();
  };

  return (
    <div>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{ width: 1, mt: 10 }} item xs={12} md={6}>
            <Typography variant="h2" gutterBottom component="div">
              Registration
            </Typography>
            {!isLoading && (
              <form onSubmit={handleRegSubmit}>
                <TextField
                  sx={{ width: "75%", mt: 3 }}
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "75%", mt: 3 }}
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "75%", mt: 3 }}
                  id="standard-basic"
                  label="Password"
                  type="password"
                  variant="standard"
                  name="password"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "75%", mt: 3, mb: 3 }}
                  id="standard-basic"
                  label="Confirm Password"
                  type="password"
                  variant="standard"
                  name="passwordTwo"
                  onBlur={handleOnBlur}
                />

                <br></br>
                <Button
                  sx={{ width: "75%", mt: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
              </form>
            )}
            <br></br>
            {isLoading && <CircularProgress color="secondary" />}
            {user?.email && (
              <Alert severity="success">Account Created SuccessFully!!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
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
              style={{ width: "auto", height: "85vh" }}
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
