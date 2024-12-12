import styled from "styled-components";

interface LogoProps {
    isWhite?: boolean
    size?: number
}

interface StyledLogoProps {
    $size: number
}

const StyledLogo = styled.img<StyledLogoProps>`
    width: ${(props) => props.$size}px;
    aspect-ratio: 1 / 1;
`;

const Logo: React.FC<LogoProps> = ({
    isWhite = false,
    size = 100
}: LogoProps) => {
    return (
        <StyledLogo
            src={isWhite ? "/images/logo/LogoWhite.svg" : "/images/logo/LogoBlack.svg"}
            $size={size}
            className="logo"
        />
    );
}

export default Logo;