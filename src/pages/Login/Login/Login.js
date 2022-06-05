import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import loginImg from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { user, signIn, isLoading, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLogInSubmit = (e) => {
    signIn(loginData.email, loginData.password, location, navigate);
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
            {!isLoading && (
              <form onSubmit={handleLogInSubmit}>
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
                  sx={{ width: "75%", mt: 3, mb: 3 }}
                  id="standard-basic"
                  label="Password"
                  type="password"
                  variant="standard"
                  name="password"
                  onChange={handleOnChange}
                />
                <Button
                  sx={{ width: "75%", mt: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </form>
            )}
            <br></br>
            {isLoading && <CircularProgress color="secondary" />}
            {user?.email && (
              <Alert severity="success">Account Login SuccessFull!!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
            <br></br>
            <br></br>
            <p>
              Don't have any account?{" "}
              <Link
                to="/register"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Button
                  style={{ color: "black", textTransform: "capitalize" }}
                  variant="text"
                >
                  Register
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

export default Login;
