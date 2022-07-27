import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import footballxs from '../assets/footballxs.png';

import AthleteImg from './AthleteImg';

export default function AthleteMobile({ athlete }) {
    const athleteMapped = athlete?.subsection?.map((sub, index) =>
        <Box key={index} sx={{background:`${sub.bg}`,p:3, pb:10}}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h2" sx={{ fontSize: '40px', lineHeight: '60px', borderBottom: '5px solid #603EBE', mr: 1 }}>0{ index+1 }</Typography>
                <Typography variant="h3" sx={{ fontSize: '36px', color: '#C2C2C2' }}>{sub.title}</Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: 15, mt: 3,color:`${sub.color}` }}>{sub.description}</Typography>
        </Box>
    );
    
    return (
        <Box sx={{position:'relative'}}>
            <img src={footballxs} alt="football" style={{position:'absolute', top:50, left:'15%', width:'70%', height:'auto'}}/>
            
            <Box sx={{ minHeight: 300, background: 'white', pl:2,pt:2,pb:7 }}>
               <Typography variant="h1" sx={{ fontSize: 50, color: '#E7E7E7' }}>ATHLETS</Typography>                                      
            </Box>
            <Box>
                
                <AliceCarousel mouseTracking items={athleteMapped} />
            </Box>
            

        </Box>
    )
}
