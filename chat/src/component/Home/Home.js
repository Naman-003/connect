import React from 'react';
import "../Home/Home.css";
import { Link } from 'react-router-dom';
import Chats from '../Chats/chats';
import Events from '../Events/events';
import Discussion from '../Discussions/discussions';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <div className='HomePage' sx={{height:'100vh'}}>
      <Grid container spacing={1} sx={{marginLeft:'1rem'}}>
        {/* Chats section on the left */}
        <Grid item xs={3.5} style={{ height: '100vh' }}>
          <div className="discussion" style={{ width: '100%', height: '100%', backgroundColor: '#F5E8C7' }}>
            <Chats />
          </div>
        </Grid>
        {/* Events and Discussions on the right */}
        <Grid item xs={8} container direction="column">
          <Grid item style={{display: 'flex', flexDirection: 'column', width: '100%' }}>
            {/* Events */}
            <div className="discussion" style={{ display:'flex',color: 'black', justifyContent: 'space-between', height:'28em', width:'100%' }}>
              <Events />
            </div>
            {/* Discussions */}
            <div className="discussion" style={{ color: 'black', width: '100%' }}> 
              <Discussion />
             </div>
          </Grid>
          {/* Additional content below Discussions and Events */}
          <Grid item>
            {/* Additional content component */}
            {/* Replace this with your additional content component */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
