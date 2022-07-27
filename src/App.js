import { useState, useEffect } from 'react';
import './App.scss';

import { athlete, players } from './data';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Athlete from './comps/Athlete';
import Players from './comps/Players';
import AthleteMobile from './comps/AthleteMobile';
import PlayersMobile from './comps/PlayersMobile';

function App() {

  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [width]);

  console.log('data', athlete)
  return (
    <Box>
      {width > 600 &&
        <>
          <Athlete athlete={athlete} />
          <Players players={players} />
        </>
      }
      {width < 600 &&
        <>
          <AthleteMobile athlete={athlete} />
          <PlayersMobile players={players} />
        </>
      }

    </Box>
  );
}

export default App;
