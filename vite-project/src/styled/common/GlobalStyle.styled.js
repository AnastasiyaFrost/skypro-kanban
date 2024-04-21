import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }

  100% {
    height: auto;
    opacity: 1;
  }
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}

div,
button,
a {
  font-family: "Roboto", sans-serif;
}`;

// export const lightTheme = {
//   body: "#FFF",
//   text: "#363537",
// };

// export const darkTheme = {
//   body: "#363537",
//   text: "#FAFAFA",
// };
// export const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: ${(props) => props.theme.body};
//     color: ${(props) => props.theme.text};
//     transition: all 0.25s linear;
//   }
// `;
