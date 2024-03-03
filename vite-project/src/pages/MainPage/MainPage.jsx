//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import {format} from "date-fns";
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Column from "../../components/Column/Column";
import { Outlet } from "react-router-dom";
// import { GlobalStyle, darkTheme, lightTheme } from "./styled/common/GlobalStyle.styled";
// import { ThemeProvider } from "styled-components";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function MainPage() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const [cards, setCards] = useState(cards);
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
      date: format(new Date(), "dd.MM.yy"),
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }

  return (
    <>
      {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle /> */}
      <Wrapper>
        <Outlet/>

        <Header onCardAdd={onCardAdd} toggleTheme={toggleTheme} />
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
