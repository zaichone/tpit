import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import football from '../assets/football.png';

import AthleteImg from './AthleteImg';

export default function Athlete({ athlete }) {
    console.log("🚀 ~ file: Athlete.js ~ line 7 ~ Athlete ~ athlete", athlete)
    return (
        <Box sx={{position:'relative'}}>
            { /* <img src={football} alt="football" style={{position:'absolute', top:20, left:'10%', width:'35%', height:'auto'}}/> */ }
            <AthleteImg />
            <Box sx={{ minHeight: 100, background: 'white', display: 'flex', justifyContent: 'flex-end', py:7 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={4} md={6}></Grid>
                    <Grid item xs={12} sm={8} md={6}>
                    <Box sx={{width:{sm:'80%', md:'70%'}, pl:{sm:5}}}>     
                        <Typography variant="h1" sx={{ fontSize: '90px', color: '#E7E7E7' }}>ATHLETS</Typography>
                        <Box sx={{display: 'flex', alignItems:'center'}}>
                            <Typography variant="caption" sx={{ fontSize: '40px',lineHeight:'60px',borderBottom:'5px solid #603EBE',mr:1 }}>01</Typography>
                            <Typography variant="h3" sx={{ fontSize: '36px', color: '#C2C2C2' }}>{athlete.subsection[0].title}</Typography>
                        </Box>
                        
                        <Typography variant="body1" sx={{ fontSize: {xs:'15px', sm:'18px',md:'20px'},mt:3 }}>{athlete.subsection[0].description}</Typography>
                    </Box>
                    </Grid>

                </Grid>

            </Box>
            <Box sx={{ minHeight: 100, background: '#F5F4F9', display: 'flex', justifyContent: 'flex-end', py:7 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={4} md={6}></Grid>
                    <Grid item xs={12} sm={8} md={6}>
                    <Box sx={{width:{sm:'80%', md:'70%'}, pl:{sm:5}}}>     
                        <Box sx={{display: 'flex', alignItems:'center'}}>
                            <Typography variant="caption" sx={{ fontSize: '40px',lineHeight:'60px',borderBottom:'5px solid #603EBE', mr:1 }}>02</Typography>
                            <Typography variant="h3" sx={{ fontSize: '36px', color: '#C2C2C2' }}>{athlete.subsection[1].title}</Typography>
                        </Box>
                        
                        <Typography variant="body1" sx={{ fontSize: {xs:'15px', sm:'18px',md:'20px'},mt:3 }}>{athlete.subsection[1].description}</Typography>
                    </Box>
                    </Grid>

                </Grid>

            </Box>
            <Box sx={{ minHeight: 100, background: '#5E3DB3', display: 'flex', justifyContent: 'flex-end', py:7 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={4} md={6}></Grid>
                    <Grid item xs={12} sm={8} md={6}>    
                    <Box sx={{width:{sm:'80%',md:'70%'}, pl:{sm:5}}}>            
                        <Box sx={{display: 'flex', alignItems:'center'}}>
                            <Typography variant="caption" sx={{ fontSize: '40px',lineHeight:'60px', borderBottom:'5px solid white',mr:1 }}>03</Typography>
                            <Typography variant="h3" sx={{ fontSize: '36px', color: '#C2C2C2' }}>{athlete.subsection[2].title}</Typography>
                        </Box>
                        
                        <Typography variant="body1" sx={{ fontSize: {xs:'15px', sm:'18px',md:'20px'},mt:3, color:'white' }}>{athlete.subsection[2].description}</Typography>
                        </Box>        
                    </Grid>

                </Grid>

            </Box>
            

        </Box>
    )
}
