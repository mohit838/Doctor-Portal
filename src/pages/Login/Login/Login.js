import { Container, Grid } from "@mui/material";
import React from "react";
import loginImg from "../../../images/login.png";

const Login = () => {
  return (
    <div>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}></Grid>
          <Grid item xs={12} md={6}></Grid>
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
