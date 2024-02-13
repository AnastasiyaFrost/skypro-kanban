//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import PopExit from "/src/components/popups/PopExit/PopExit.jsx";
import PopNewCard from "/src/components/popups/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import "./App.css";
import Column from "./components/Column/Column";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header />

        <MainContent>
          <Column title={"Без статуса"} />
          <Column title={"Нужно сделать"} />
          <Column title={"В работе"} />
          <Column title={"Тестирование"} />
          <Column title={"Готово"} />
        </MainContent>
      </div>
    </>
  );
}
