import * as React from 'react';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';
import carasoll from '../Carasoll/carasoll'

const Events = () => {
  const theme = useTheme();

  return (
    <div>
      <Navbar />
      <div>
        <carasoll/>
        {/* <div>
        <Card sx={{ maxWidth: 345, margin:'0.5em' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fcontent%2Fa1f504bee74b4f19be305d409aa4fc16%2F090700ea-7133-4647-a5ed-f28c2d3845fe.png&w=1440&q=75"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Events;
