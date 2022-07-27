import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import playerxs from '../assets/playerxs.png';

export default function PlayersMobile({ players }) {
    console.log("🚀 ~ file: Athlete.js ~ line 7 ~ Athlete ~ athlete", players)
    const playersMapped = players?.subsection?.map((sub, index) =>
        <Box key={index} sx={{background:`${sub.bg}`, p:3,pb:10}}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h2" sx={{ fontSize: '30px', lineHeight: '60px', borderBottom: `5px solid ${sub.color}`, mr: 1 }}>0{ index+1 }</Typography>
                <Typography variant="h3" sx={{ fontSize: '28px', color: '#C2C2C2' }}>{sub.title}</Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: 15, mt: 3, color:`${sub.color}` }}>{sub.description}</Typography>
        </Box>
    );
    return (
        <Box sx={{ position: 'relative' }}>
            <img src={playerxs} alt="player" style={{ position: 'absolute', top: 60, right: '15%', width: '70%', height: 'auto' }} />
            <Box sx={{ minHeight: 250, background: 'white', pl: 2, pt: 2, pb: 7 }}>
                <Typography variant="h1" sx={{ fontSize: 50, color: '#E7E7E7' }}>PLAYERS</Typography>
            </Box>
            <Box>
                
                <AliceCarousel mouseTracking items={playersMapped} />
            </Box>


        </Box>
    )
}
