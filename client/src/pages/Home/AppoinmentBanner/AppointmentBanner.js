import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Doctor from '../../../images/doctor.png';
import BgImg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
  marginTop: '160px',
  background: `url(${BgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '140% auto',
  backgroundPosition: 'center',
  backgroundColor: 'rgb(45, 58, 74, 0.85)',
  backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <>
            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <img 
                  style={{
                  width:'70%',
                  marginTop: '-130px'
                  }}
                  src={Doctor} alt="Doctor" />
                </Grid>
                <Grid item xs={12} md={6} 
                sx={{
                display:'flex', 
                justifyContent: 'flex-start',
                textAlign: 'left',
                alignItems: 'center'
                }}>
                  <Box>
                    <Typography 
                    variant='h6' 
                    style={{
                    color: '#789BB8',
                    marginTop: '50px'
                    }}>
                      Appointment
                    </Typography>
                    <Typography variant='h3' 
                    style={{
                    color: 'white',
                    marginTop: '20px',
                    marginBottom: '30px',
                    fontWeight: '400'
                    }}>
                      Make an Appointment Today
                    </Typography>
                    <Typography 
                    body1='p' 
                    style={{
                    color: 'white', 
                    fontSize: '18px', 
                    fontWeight:'300',
                    marginTop: '20px',
                    marginBottom: '50px'
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro temporibus et voluptate quae ad.
                    </Typography>
                    <Button 
                    variant="contained"
                    style={{
                      backgroundColor: '#789BB8',
                      padding: '10px 30px',
                      fontSize: '15px',
                      fontWeight: '500',
                      textTransform: 'capitalize'
                    }}
                    >Learn More</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            
        </>
    );
};

export default AppointmentBanner;