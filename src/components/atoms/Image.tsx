import { styled } from "styled-components";
import { Src, Width, Height } from "../../types/Style";

interface ImageProps {
  src: Src;
  width?: Width;
  height?: Height;
}

interface StyledImageProps {
  src: Src;
  width?: Width;
  height?: Height;
}

const StyledImage = styled.img<StyledImageProps>`
  width: ${({width}) => width};
  height: ${({height}) => height};
`;

const Image: React.FC<ImageProps> = ({
  src,
  width,
  height
}) => {
  return (
    <StyledImage
      src={src}
      width={width}
      height={height}
    />
  );
}

export default Image;