import { ReactElement } from "react";
import styled from "styled-components";
import { AlignItems, Display, FlexDirection, Height, JustifyContent, MaxWidth, Width } from "../../types/styles/Property";
import { ClassName, Id } from "../../types/ComponentType";
import cn from "classnames";

interface InnerProps {
    children: ReactElement | ReactElement[];
    id?: Id;
    className?: ClassName;
    width?: Width;
    height?: Height;
    maxWidth?: MaxWidth;
    display?: Display;
    direction?: FlexDirection;
    alignItems?: AlignItems;
    justifyContent?: JustifyContent;
};

interface StyledInnerProps {
    id?: Id;
    className: ClassName;
    $width: Width;
    $height: Height;
    $maxWidth: MaxWidth;
    $display?: Display;
    $direction?: FlexDirection;
    $alignItems?: AlignItems;
    $justifyContent?: JustifyContent;
}

const StyledInner = styled.div<StyledInnerProps>`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    max-width: ${({ $maxWidth }) => $maxWidth};
    margin: 0 auto;
    display: ${({$display}) => $display};
    direction: ${({$direction}) => $direction};
    align-items: ${({$alignItems}) => $alignItems};
    justify-content: ${({$justifyContent}) => $justifyContent};
`;

const Inner: React.FC<InnerProps> = ({
    children,
    className,
    width = "calc(100% - 10px)",
    height = "100%",
    maxWidth = "1400px",
    display,
    direction,
    alignItems,
    justifyContent
}) => {
    return (
        <StyledInner
            className={cn("inner", className)}
            $width={ width }
            $height={ height }
            $maxWidth={ maxWidth }
            $display={ display }
            $direction={ direction }
            $alignItems={ alignItems }
            $justifyContent={ justifyContent }
        >
            { children }
        </StyledInner>
    );
};

export default Inner;