import React, { useState } from 'react'
import ProjectsDisplay from './components/ProjectsDisplay';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const screenMode = {
  height: 45, width: 45, mx:1, cursor:'pointer', float:'right', marginRight: 5, marginTop: 2
};

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    },text: {
      primary: "#000",
      secondary: "#000"
    },
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222"
    },
    text: {
      primary: "#fff",
      secondary: "#fff"
    }
  }
});

function App() {

  const [light, setLight] = useState(true);

  return (
    <div className="App">
      {light ? <DarkModeIcon onClick={() => setLight(prev => !prev)} sx={screenMode}/> :
        <LightModeIcon onClick={() => setLight(prev => !prev)} sx={screenMode}/>}
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <Header />
        <ProjectsDisplay />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
