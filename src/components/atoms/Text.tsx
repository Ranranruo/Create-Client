import { styled } from "styled-components";
import { AlignItems, Display, FontSize, FontWeight, JustifyContent } from "../../types/StyleType";

interface TextProps {
  children: string;
  size?: FontSize;
  weight?: FontWeight;
  display?: Display;
  justify?: JustifyContent;
  align?: AlignItems;
}

interface StyledTextProps {
  $size : FontSize;
  $weight: FontWeight;
  $display: Display;
  $justify: JustifyContent;
  $align: AlignItems;
}



const StyledText = styled.p<StyledTextProps>`
  /* 14
  16 
  18
  20
  22
  24 */
`;

const Text: React.FC<TextProps> = ({
  children,
  size = 'medium',
  weight = 'regular',
  display = 'block',
  justify = 'normal',
  align = 'stretch'
}) => {
  return (
    <StyledText
      $size={size}
      $weight={weight}
      $display={display}
      $justify={justify}
      $align={align}
    >
      {children}
    </StyledText>
  )
}

export default Text;