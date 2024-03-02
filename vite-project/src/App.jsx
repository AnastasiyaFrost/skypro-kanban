// import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import PopExit from "/src/components/popups/PopExit/PopExit.jsx";
import PopNewCard from "/src/components/popups/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import "./App.css";
import Column from "./components/Column/Column";
import Wrapper from "./components/Wrapper/Wrapper";
import { cardList } from "./data";
import { useEffect, useState } from "react";
// import { GlobalStyle, darkTheme, lightTheme } from "./styled/common/GlobalStyle.styled";
// import { ThemeProvider } from "styled-components";


const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function App() {
// const [theme, setTheme] = useState("light");
// const toggleTheme = () => {
//   if (theme === "light") {
//     setTheme("dark");
//   } else {
//     setTheme("light");
//   }
// };

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
      {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle /> */}
      <Wrapper>
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
      </Wrapper>
      {/* </ThemeProvider> */}

    </>
  );
}
