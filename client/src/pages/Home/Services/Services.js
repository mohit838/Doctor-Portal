import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Service from '../Service/Service';
import ImgOne from '../../../images/fluoride.png';
import ImgTwo from '../../../images/whitening.png';
import ImgThree from '../../../images/cavity.png';
import Typography from '@mui/material/Typography';

const services = [
{ Name: 'Treatment One',
  Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam praesentium nesciunt fuga reprehenderit ex fugiat in, nam saepe inventore, laborum minima quis quos nobis, iusto necessitatibus optio corrupti autem totam.',
  Img: ImgOne
},
{ Name: 'Treatment Two',
  Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam praesentium nesciunt fuga reprehenderit ex fugiat in, nam saepe inventore, laborum minima quis quos nobis, iusto necessitatibus optio corrupti autem totam.',
  Img: ImgTwo
},
{ Name: 'Treatment Three',
  Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam praesentium nesciunt fuga reprehenderit ex fugiat in, nam saepe inventore, laborum minima quis quos nobis, iusto necessitatibus optio corrupti autem totam.',
  Img: ImgThree
},
]; 

const Services = () => {
    return (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: 500, m: 2 }} variant="h6" component="div" color='text.secondary'>
                    Our Services
            </Typography>
            <Typography sx={{ fontWeight: 500, m: 5 }} variant="h4" component="div">
                    Services We Provides
            </Typography>
            <Container>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                  services.map(serv => <Service
                    key={serv.Name}
                    service={serv}
                  ></Service>)
                }
              </Grid>
            </Container>
          </Box>
        </>
    );
};

export default Services;