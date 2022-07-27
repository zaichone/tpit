import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import player from '../assets/player.png';

export default function Players({ players }) {
    console.log("🚀 ~ file: Athlete.js ~ line 7 ~ Athlete ~ athlete", players)
    return (
        <Box sx={{position:'relative'}}>
            <img src={player} alt="player" style={{position:'absolute', top:20, right:'10%', width:'35%', height:'auto'}}/>
            <Box sx={{ minHeight: 100, background: 'white', display: 'flex', justifyContent: 'flex-end', py:7 }}>
                <Grid container spacing={0}>
                    
                    <Grid item xs={12} md={6}>
                    <Box sx={{width:{md:'70%', float:'right'}}}>     
                        <Typography variant="h1" sx={{ fontSize: '90px', color: '#E7E7E7' }}>PLAYERS</Typography>
                        <Box sx={{display: 'flex', alignItems:'center'}}>
                            <Typography variant="caption" sx={{ fontSize: '40px',lineHeight:'60px',borderBottom:'5px solid #603EBE',mr:1 }}>01</Typography>
                            <Typography variant="h3" sx={{ fontSize: '36px', color: '#C2C2C2' }}>{players.subsection[0].title}</Typography>
                        </Box>
                        
                        <Typography variant="body1" sx={{ fontSize: {xs:'15px', sm:'18px',md:'20px'},mt:3 }}>{players.subsection[0].description}</Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={6}></Grid>
                </Grid>

            </Box>
            <Box sx={{ minHeight: 100, background: '#F5F4F9', display: 'flex', justifyContent: 'flex-end', py:7 }}>
                <Grid container spacing={0}>
                    
                    <Grid item xs={12} md={6}>
                    <Box sx={{width:{md:'70%', float:'right'}}}>     
                        <Box sx={{display: 'flex', alignItems:'center'}}>
                            <Typography variant="caption" sx={{ fontSize: '40px',lineHeight:'60px',borderBottom:'5px solid #603EBE', mr:1 }}>02</Typography>
                            <Typography variant="h3" sx={{ fontSize: '36px', color: '#C2C2C2' }}>{players.subsection[1].title}</Typography>
                        </Box>
                        
                        <Typography variant="body1" sx={{ fontSize: {xs:'15px', sm:'18px',md:'20px'},mt:3 }}>{players.subsection[1].description}</Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={6}></Grid>
                </Grid>

            </Box>
            <Box sx={{ minHeight: 100, background: '#090C35', display: 'flex', justifyContent: 'flex-end', py:7 }}>
                <Grid container spacing={0}>
                    
                    <Grid item xs={12} md={6}>    
                    <Box sx={{width:{md:'70%', float:'right'}}}>            
                        <Box sx={{display: 'flex', alignItems:'center'}}>
                            <Typography variant="caption" sx={{ fontSize: '40px',lineHeight:'60px', borderBottom:'5px solid white',mr:1, color:'#8F6BE8' }}>03</Typography>
                            <Typography variant="h3" sx={{ fontSize: '36px', color: '#C2C2C2' }}>{players.subsection[2].title}</Typography>
                        </Box>
                        
                        <Typography variant="body1" sx={{ fontSize: {xs:'15px', sm:'18px',md:'20px'},mt:3, color:'white' }}>{players.subsection[2].description}</Typography>
                        </Box>        
                    </Grid>
                    <Grid item xs={12} md={6}></Grid>
                </Grid>

            </Box>
            

        </Box>
    )
}
