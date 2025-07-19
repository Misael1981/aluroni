import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --font-principal: "Italiana", sans-serif;
  --font-secundaria: "Josefin Sans", sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #ccc;
  font-family: var(--font-principal);
  color: #111;
  width: 100%;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyles;
