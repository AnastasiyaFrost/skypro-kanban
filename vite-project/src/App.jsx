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
// import { GlobalStyle, darkTheme, lightTheme } from "./styled/common/GlobalStyle.styled";
// import { ThemeProvider } from "styled-components";




export default function App() {
// const [theme, setTheme] = useState("light");
// const toggleTheme = () => {
//   if (theme === "light") {
//     setTheme("dark");
//   } else {
//     setTheme("light");
//   }
// };

  return (
    <>
      {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle /> */}
      <Wrapper>
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
      </Wrapper>
      {/* </ThemeProvider> */}
    </>
  );
}
