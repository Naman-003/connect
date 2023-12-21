import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Navbar from '../Chats/Navbar';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Chats = () => {
  const theme = useTheme();

  return (
    <div>
      <Navbar />
      <div>
        <div sx={{margin:'-1em'}}>
          <Card sx={{ display: 'flex', marginLeft: '5%'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Classroom
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  chats
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <Link to="/chat">
                  <Button variant="contained" style={{ marginRight: '0.5em' }}>
                    Classroom Chats
                  </Button>
                </Link>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 150 }}
              image="https://w0.peakpx.com/wallpaper/400/660/HD-wallpaper-ronin-forest-hat-illustrations-japan-katana-man-mist-samurai.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </div>
        <div>
          <Card sx={{ display: 'flex', marginLeft: '5%', marginTop:'2rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  General
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  chats
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <Link to="/chat">
                  <Button variant="contained" style={{ marginRight: '0.5em' }}>
                    General Chats
                  </Button>
                </Link>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 150 }}
              image="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTgxNTU2MzIyMjc2MjIyOTAy/eastern-shades-a-look-at-the-wests-obsession-with-the-samurai.jpg" 
              alt="General Chats"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chats;
