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
import { cardList } from "./data";
import { useEffect, useState } from "react";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []);

  function onCardAdd() {
    const newCard = {
      id: cards.length + 1,

      theme: "Web Design",

      title: "Название задачи",

      date: "30.10.23",

      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }
  return (
    <>
      <div className="wrapper">
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header onCardAdd={onCardAdd} />

        {isLoading ? (
          "Данные загружаются..."
        ) : (
          <MainContent>
            {statusList.map((status) => (
              <Column
                title={status}
                key={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        )}
      </div>
    </>
  );
}
