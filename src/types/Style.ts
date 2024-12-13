// position
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type Top = `${string}px` | `${string}%` | `${string}em` | `${string}rem`;
export type Right = `${string}px` | `${string}%` | `${string}em` | `${string}rem`;
export type Bottom = `${string}px` | `${string}%` | `${string}em` | `${string}rem`;
export type Left = `${string}px` | `${string}%` | `${string}em` | `${string}rem`;

// scale
export type Width = `${string}px` | `${string}%` | `${string}vw` | `${string}em` | `${string}rem`;
export type Height = `${string}px` | `${string}%` | `${string}vh` | `${string}em` | `${string}rem`;
export type MaxWidth = `${string}px` | `${string}%` | `${string}vw` | `${string}em` | `${string}rem`;
export type MaxHeight = `${string}px` | `${string}%` | `${string}vh` | `${string}em` | `${string}rem`;
export type MinWidth = `${string}px` | `${string}%` | `${string}vw` | `${string}em` | `${string}rem`;
export type MinHeight = `${string}px` | `${string}%` | `${string}vh` | `${string}em` | `${string}rem`;

// flex
export type Display = "flex" | "block" | "inline-block" | "inline";
export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
export type AlignItems = "stretch" | "start" | "end" | "center";
export type JustifyContent = "normal" | "start" | "end" | "center";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type Gap = "verysmall" | "small" | "medium" | "large" | "huge";

// font
export type FontSize = "verysmall" | "small" | "medium" | "large" | "huge";
export type FontWeight = 400 | 700 | 900;
