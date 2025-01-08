/** all */
export type Unit = Pixel | ViewportWidth | ViewportHeight | Percentage | Em | RootEm | Calculator;

/** px */
export type Pixel = `${number}px`;

/** vw */
export type ViewportWidth = `${number}vw`;

/** vh */
export type ViewportHeight = `${number}vh`;

/** % */
export type Percentage = `${number}%`;

/** em */
export type Em = `${number}em`;

/** rem */
export type RootEm = `${number}rem`;

/** calc */
export type Calculator = `calc(${string})`;