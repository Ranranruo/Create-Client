import { createGlobalStyle } from "styled-components";

const Font = createGlobalStyle`
  @font-face {
    font-family: 'Cookie';
    font-weight: 400;
    src: url("/fonts/CookieRun Regular.ttf");
  }
  @font-face {
    font-family: 'Cookie';
    font-weight: 700;
    src: url("/fonts/CookieRun Bold.ttf");
  }
  @font-face {
    font-family: 'Cookie';
    font-weight: 900;
    src: url("/fonts/CookieRun Black.ttf");
  }
`;

export default Font;