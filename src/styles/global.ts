import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Consolas, "Courier New";
  }
  body{
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.font};
  }
`;
