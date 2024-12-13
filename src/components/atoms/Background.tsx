import styled from "styled-components";
import { Bottom, Height, Left, MaxHeight, MaxWidth, MinHeight, MinWidth, Position, Right, Top, Width } from "../../types/Style";
import { ReactNode } from "react";

interface BackgroundProps {
    children: ReactNode | string;
    position: Position;
    top: Top;
    right: Right;
    bottom: Bottom;
    left: Left;
    width: Width;
    height: Height;
    maxWidth: MaxWidth;
    maxHeight: MaxHeight;
    minWidth: MinWidth;
    minHeight: MinHeight;
}

interface StyledBackgroundProps {
    width?: Width;
    height?: Height;
    maxWidth?: MaxWidth;
    maxHeight?: MaxHeight;
    minWidth?: MinWidth;
    minHeight?: MinHeight;
}

const StyledBackground = styled.div<StyledBackgroundProps>`
    
`;

const Background: React.FC = () => {
    return (
        <StyledBackground />
    );
}