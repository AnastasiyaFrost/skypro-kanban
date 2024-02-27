import { createGlobalStyle, ThemeProvider } from "styled-components";

export const light = {
  body: "#FFF",
  text: "#363537",
};

export const dark = {
  body: "#363537",
  text: "#FAFAFA",
};
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.25s linear; 
  }
`;
