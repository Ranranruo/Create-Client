import { createGlobalStyle } from "styled-components";

const Variable = createGlobalStyle`
  :root {
    /* color */
    --color-primary01: rgba(30, 215, 96);

    --color-black01: rgba(18, 18, 18);

    --color-white01: rgba(255, 255, 255);
    --color-white02: rgba(233, 231, 231);

    /* gap */
    --gap-spacing-verysmall: 5px;
    --gap-spacing-small: 10px;
    --gap-spacing-medium: 20px;
    --gap-spacing-large: 30px;
    --gap-spacing-huge: 40px;

    /* font-weight */
    --font-weight-thin: 100;
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;
    --font-weight-black: 900;

    /* font-size-title */
    --font-size-title-verysmall: 1.25em;
    --font-size-title-small: 1.50em;
    --font-size-title-medium: 1.875em;
    --font-size-title-large: 2.25em;
    --font-size-title-huge: 2.625em;

    /* font-size-content */
    --font-size-content-verysmall: 0.75em;
    --font-size-content-small: 0.88em;
    --font-size-content-medium: 1em;
    --font-size-content-large: 1.13em;
    --font-size-content-huge: 1.50em;
  }
`;

export default Variable;
