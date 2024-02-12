//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import PopExit from '/src/components/popups/PopExit/PopExit.jsx'
import PopNewCard from '/src/components/popups/PopNewCard/PopNewCard.jsx'
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css'


export default function App() {
 
  return (
    <>
      
      <div className="wrapper">
        <PopExit/>

        <PopNewCard/>

        <PopBrowse/>

        <Header/>

        <Main/>
      </div>
    </>
  );
}
