// attribute
export type Src = `http${string}` | `/${string}`;

// space
export type Margin = `${string}` | `${string} ${string}` | `${string} ${string} ${string}` | `${string} ${string} ${string} ${string}`

// position
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type Top = `${number}px` | `${number}%` | `${number}em` | `${number}rem`;
export type Right = `${number}px` | `${number}%` | `${number}em` | `${number}rem`;
export type Bottom = `${number}px` | `${number}%` | `${number}em` | `${number}rem`;
export type Left = `${number}px` | `${number}%` | `${number}em` | `${number}rem`;

// scale
export type Width = `${number}px` | `${number}%` | `${number}vw` | `${number}em` | `${number}rem` | `calc(${string})`;
export type Height = `${number}px` | `${number}%` | `${number}vh` | `${number}em` | `${number}rem` | `calc(${string})`;
export type MaxWidth = `${number}px` | `${number}%` | `${number}vw` | `${number}em` | `${number}rem` | `calc(${string})`;
export type MaxHeight = `${number}px` | `${number}%` | `${number}vh` | `${number}em` | `${number}rem` | `calc(${string})`;
export type MinWidth = `${number}px` | `${number}%` | `${number}vw` | `${number}em` | `${number}rem` | `calc(${string})`;
export type MinHeight = `${number}px` | `${number}%` | `${number}vh` | `${number}em` | `${number}rem` | `calc(${string})`;

// flex
export type Display = "flex" | "block" | "inline-block" | "inline";
export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
export type AlignItems = "stretch" | "start" | "end" | "center";
export type JustifyContent = "normal" | "start" | "end" | "center" | "space-between";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type Gap = "verysmall" | "small" | "medium" | "large" | "huge";

// font
export type FontSize = "verysmall" | "small" | "medium" | "large" | "huge";
export type FontWeight = 400 | 700 | 900

// color
export type Color = `primary${number}` | `black${number}` | `white${number}`;