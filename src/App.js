import logo from './logo.svg';
import './App.scss';

import { athlete, players } from './data';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Athlete from './comps/Athlete';
import Players from './comps/Players';

function App() {

  console.log('data', athlete)
  return (
    <Box>
      <Athlete athlete={athlete}/>
      <Players players={players}/>

    </Box>
  );
}

export default App;
