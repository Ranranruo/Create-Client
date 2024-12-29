import { ReactNode } from "react";
import styled from "styled-components";
import { Height, MaxWidth, Width } from "../../types/Style";

interface InnerProps {
    children: ReactNode;
    width?: Width;
    height?: Height;
    maxWidth?: MaxWidth;
};

interface StyledInnerProps {
    width: Width;
    height?: Height;
    maxWidth: MaxWidth;
}

const StyledInner = styled.div<StyledInnerProps>`
    width: ${({ width }) => width};
`;

const Inner: React.FC<InnerProps> = ({
    children,
    width = "calc(100% - 10px)",
    maxWidth = "1400px"
}) => {
    return (
        <StyledInner
            width={width}
            maxWidth={maxWidth}
        >
            {children}
        </StyledInner>
    );
};

export default Inner;