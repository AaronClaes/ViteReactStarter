import { createGlobalStyle } from "styled-components";

const Global = () => {
  return <GlobalStyleComponent />;
};

const GlobalStyleComponent = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    }

    h1,h2,h3,h4,h5,h6,p {
      color: ${({ theme }) => theme.text}
    }
 `;

export default Global;
