import { styled } from "styled-components";
import { ClassName, Id, Size } from "../../types/ComponentType";
import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Container from "../atoms/Container";
import cn from "classnames";

export type LogoType = "primary" | "white";

interface LogoProps {
  id?: Id;
  className?: ClassName;
  size?: Size;
  logoType?: LogoType;
}

interface StyledLogoProps {
  id?: Id;
  className: ClassName;
}

const LogoSrc = {
  "primary": "/images/logo/logo-primary.svg",
  "white": "/images/logo/logo-white.svg",
} as const;

// const LogoSize = {
//   "verysmall": "10px",
//   "small": "20px",
//   "medium": "30px",
//   "large": "40px",
//   "huge": "50px"
// } as const;

const StyledLogo = styled(Container)<StyledLogoProps>`
  
`;

const Logo: React.FC<LogoProps> = ({
  id,
  className,
  logoType = "primary",
}) => {
  return (
    <StyledLogo
      id={ id }
      className={ cn("logo", className) }
      gap="verysmall"
    >
      <Image
        src={LogoSrc[logoType]}
        // width={LogoSize[size]}
      />
      <Title
        color="primary01"
        // fontSize={LogoSize[size]}
      >
        Portfolio
      </Title>
    </StyledLogo>
  );
};

export default Logo;
