import { createGlobalStyle } from "styled-components";

const Font = createGlobalStyle`
  @font-face {
    font-family: "main regular";
    src: url("./font/main/CookieRegular.ttf");
  }

  @font-face {
    font-family: "main bold";
    src: url("./font/main/CookieBold.ttf");
  }

  @font-face {
    font-family: "main black";
    src: url("./font/main/CookieBlack.ttf");
  }
`;

export default Font;