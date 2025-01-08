import { styled } from "styled-components";
import { AlignItems, Display, FontSize, FontWeight, JustifyContent } from "../../types/styles/Property";
import { ClassName, Id } from "../../types/ComponentType";
import cn from "classnames";

interface ContentProps {
  children: string;
  id?: Id;
  className?: ClassName;
  fontSize?: FontSize;
  weight?: FontWeight;
  display?: Display;
  justify?: JustifyContent;
  align?: AlignItems;
}

interface StyledContentProps {
  id?: Id;
  className: ClassName;
  $fontSize: FontSize;
  $weight?: FontWeight;
  $display?: Display;
  $justify?: JustifyContent;
  $align?: AlignItems;
}

const FontSizes = {
  "verysmall": "--font-size-content-verysmall",
  "small": "--font-size-content-small",
  "medium": "--font-size-content-medium",
  "large": "--font-size-content-large",
  "huge": "--font-size-content-huge",
} as const;


const StyledContent = styled.p<StyledContentProps>`
  font-family: 'Cookie';
  font-size: ${({ $fontSize }) => `var(${FontSizes[$fontSize]})`};
  font-weight: ${({ $weight }) => $weight};
  display: ${({ $display }) => $display};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
`;

const Content: React.FC<ContentProps> = ({
  children,
  id,
  className,
  fontSize = "medium",
  weight,
  display,
  justify,
  align,
}) => {
  return (
    <StyledContent
      id={id}
      className={cn("content", className)}
      $fontSize={fontSize}
      $weight={weight}
      $display={display}
      $justify={justify}
      $align={align}
    >
      {children}
    </StyledContent>
  )
}

export default Content;