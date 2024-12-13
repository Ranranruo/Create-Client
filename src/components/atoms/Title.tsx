import { styled } from "styled-components";
import { AlignItems, Display, FontSize, FontWeight, JustifyContent } from "../../types/Style";

interface TitleProps {
  children: string;
  size?: FontSize;
  weight?: FontWeight;
  display?: Display;
  justify?: JustifyContent;
  align?: AlignItems;
}

interface StyledTitleProps {
  $size: FontSize;
  $weight?: FontWeight;
  $display?: Display;
  $justify?: JustifyContent;
  $align?: AlignItems;
}

const FontSizes = {
  "verysmall": "1.25em",
  "small": "1.50em",
  "medium": "1.875em",
  "large": "2.215em",
  "huge": "2.625"
} as const;


const StyledTitle = styled.p<StyledTitleProps>`
  font-family: 'Cookie';
  font-size: ${({ $size }) => FontSizes[$size]};
  font-weight: ${({ $weight }) => $weight};
  display: ${({ $display }) => $display};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
`;

const Title: React.FC<TitleProps> = ({
  children,
  size = "medium",
  weight,
  display,
  justify,
  align,
}) => {
  return (
    <StyledTitle
      $size={size}
      $weight={weight}
      $display={display}
      $justify={justify}
      $align={align}
    >
      {children}
    </StyledTitle>
  )
}

export default Title;