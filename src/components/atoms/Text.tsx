import { styled } from "styled-components";

interface TextProps {
  children: string;
}

const StyledText = styled.p`
  
`;

const Text: React.FC<TextProps> = ({children}) => {
  return (
    <StyledText>
      {children}
    </StyledText>
  )
}

export default Text;