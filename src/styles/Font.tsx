import { createGlobalStyle } from "styled-components";

const Font = createGlobalStyle`
  @font-face {
  font-family: "main";         // 이름 선언
  src: url("./font/cookie.ttf"); // 내가 저장한 경로!
  }
`;

export default Font;