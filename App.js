import React from 'react'
import { useState } from 'react'
import { CssBaseline,Box,Switch,FormGroup,FormControlLabel,} from '@mui/material'
import {ThemeProvider } from '@mui/material/styles'
import Holder from './components/holder'
import {light,dark} from "./Theme"



function App() {
  //mode variables AND functions
  const [DarkMode, setDarkMode] = useState(false)
  const changeTheme = () => { setDarkMode(!DarkMode) };  
  const theme = DarkMode ? dark :light

  //rendering container.js file along with theme toggle 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={DarkMode} onChange={changeTheme} />
              }
            />
          </FormGroup>
        </Box>
        <Holder/>
    </ThemeProvider>   
  );
}

export default App;
