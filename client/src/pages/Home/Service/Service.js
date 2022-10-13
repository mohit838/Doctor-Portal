import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Service = (props) => {
    const {Name, Description, Img} = props.service;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
              <CardContent>
              
                <CardMedia
                    component="img"
                    style={{width:'auto', height: '80px', margin:'20px auto'}}
                    image={Img}
                    alt="Image"
                />
                
                <Typography sx={{ m: 2 }} variant="h5" component="div">
                    {Name}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" >
                    {Description}
                </Typography>
                
              </CardContent>
            </Card>      
        </Grid>
    );
};

export default Service;