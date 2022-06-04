import React from "react";
import Grid from "@mui/material/Grid";
import chair from "./../../../images/chair.png";
import bg from "./../../../images/bg.png";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const bannerBg = {
  background: `url(${bg})`,
};

const veritcalCenter = {
  display: "flex",
  alignItems: "center",
  height: "400px",
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ ...veritcalCenter, textAlign: "left" }}
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Start Here
            </Typography>
            <Typography
              variant="h6"
              sx={{
                my: 3,
                fontSize: 16,
                fontWeight: 300,
                color: "gray",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium eum deserunt minima at, saepe alias.
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#789BB8",
                padding: "10px 30px",
                fontSize: "15px",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              {/* Get Appointment */}
              <Link to="/appointment">
                <Button style={{ color: "white" }}>Appointment</Button>
              </Link>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={veritcalCenter}>
          <img style={{ width: "400px" }} src={chair} alt="chair" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
