import React,{useState} from 'react';
import Home from './pages/Home';
import styled, { ThemeProvider } from 'styled-components';
import { DarkMode, LightMode, GlobalStyles } from './pages/Thems'
import { MdLightMode, MdDarkMode } from 'react-icons/md';
const App = () => {
  const [mode, setMode] = useState('dark');
  const toggler = () => {
    mode === 'dark' ? setMode('light') : setMode('dark');
  }
  const changeDark = () => {
    const Light = document.querySelector(".light");
    const Dark = document.querySelector(".dark");
    Dark.style.display="none"
    Light.style.display="block"
  }
  const changeLight = () => {
    const Light = document.querySelector(".light");
    const Dark = document.querySelector(".dark");
    Dark.style.display="block"
    Light.style.display="none"
  }
  return (
    <ThemeProvider className='App' theme={mode === "light" ? DarkMode : LightMode} >
        <GlobalStyles/>
      <Home />
      <div className='iconMode'>
      <MdLightMode className='mode light' onClick={()=>toggler()} onClickCapture={()=>changeLight()}/>
      <MdDarkMode className='mode dark' onClick={() => toggler()} onClickCapture={()=>changeDark()} />
      </div>
    </ThemeProvider>
  );
}

export default App;
