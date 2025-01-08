import { styled } from "styled-components";
import { AlignItems, Color, Display, FontSize, FontWeight, JustifyContent } from "../../types/styles/Property";
import { ClassName, Id } from "../../types/ComponentType";
import cn from "classnames";
import { To } from "react-router-dom";

interface TitleProps {
  children: string;
  href?: To;
  id?: Id;
  className?: ClassName;
  fontSize?: FontSize;
  weight?: FontWeight;
  color?: Color;
  display?: Display;
  justify?: JustifyContent;
  align?: AlignItems;
}

interface StyledTitleProps {
  href?: To;
  id?: Id;
  className: ClassName;
  $fontSize: FontSize;
  $weight?: FontWeight;
  $color?: Color;
  $display?: Display;
  $justify?: JustifyContent;
  $align?: AlignItems;
}

const FontSizes = {
  "verysmall": "--font-size-title-verysmall", // 1.25em -> 20px
  "small": "--font-size-title-small", // 1.50em -> 24px
  "medium": "--font-size-title-medium", // 1.875em -> 30px
  "large": "--font-size-title-large", // 2.25em -> 36px
  "huge": "--font-size-title-huge" // 2.625em -> 42px
} as const;


const StyledTitle = styled.p<StyledTitleProps>`
  font-family: 'Cookie';
  font-size: ${({ $fontSize }) => `var(${FontSizes[$fontSize]})`};
  font-weight: ${({ $weight }) => $weight};
  color: ${({$color}) => `var(--color-${$color})`};
  display: ${({ $display }) => $display};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
`;

const Title: React.FC<TitleProps> = ({
  children,
  href,
  className,
  fontSize = "medium",
  weight,
  color,
  display,
  justify,
  align,
}) => {
  return (
    <StyledTitle
      className={cn("title", className)}
      $color={ color }
      $fontSize={ fontSize }
      $weight={ weight }
      $display={ display }
      $justify={ justify }
      $align={ align }
    >
      { children }
    </StyledTitle>
  )
}

export default Title;