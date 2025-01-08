import { styled } from "styled-components";
import { Src, Width, Height } from "../../types/styles/Property";
import { ClassName, Id } from "../../types/ComponentType";
import cn from "classnames";

interface ImageProps {
  id?: Id;
  className?: ClassName;
  src: Src;
  width?: Width;
  height?: Height;
}

interface StyledImageProps {
  id?: Id;
  className: ClassName;
  src: Src;
  $width?: Width;
  $height?: Height;
}

const StyledImage = styled.img<StyledImageProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

const Image: React.FC<ImageProps> = ({
  id,
  className,
  src,
  width,
  height
}) => {
  return (
    <StyledImage
      id={ id }
      className={ cn("image", className) }
      src={ src }
      $width={ width }
      $height={ height }
    />
  );
}

export default Image;