import { styled } from "styled-components";
import { AlignItems, Display, FontSize, FontWeight, JustifyContent } from "../../types/Style";

interface ContentProps {
  children: string;
  size?: FontSize;
  weight?: FontWeight;
  display?: Display;
  justify?: JustifyContent;
  align?: AlignItems;
}

interface StyledContentProps {
  $size: FontSize;
  $weight?: FontWeight;
  $display?: Display;
  $justify?: JustifyContent;
  $align?: AlignItems;
}

const FontSizes = {
  "verysmall": "0.75em",
  "small": "0.88em",
  "medium": "1em",
  "large": "1.13em",
  "huge": "1.50em"
} as const;


const StyledContent = styled.p<StyledContentProps>`
  font-family: 'Cookie';
  font-size: ${({ $size }) => FontSizes[$size]};
  font-weight: ${({ $weight }) => $weight};
  display: ${({ $display }) => $display};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
`;

const Content: React.FC<ContentProps> = ({
  children,
  size = "medium",
  weight,
  display,
  justify,
  align,
}) => {
  return (
    <StyledContent
      $size={size}
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