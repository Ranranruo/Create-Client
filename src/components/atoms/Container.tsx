import styled from "styled-components";
import { Display, AlignItems, FlexDirection, JustifyContent, FlexWrap, Gap } from "../../types/Style";
import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode,
    display?: Display;
    direction?: FlexDirection;
    align?: AlignItems;
    justify?: JustifyContent;
    wrap?: FlexWrap;
    gap?: Gap;
};

interface StyledContainerProps {
    $display: Display;
    $direction?: FlexDirection;
    $align?: AlignItems;
    $justify?: JustifyContent;
    $wrap?: FlexWrap;
    $gap?: Gap;
};

const GapSizes = {
    "verysmall": "5px",
    "small": "10px",
    "medium": "20px",
    "large": "30px",
    "huge": "40px"
} as const;

const StyledContainer = styled.div<StyledContainerProps>`
    display: ${({ $display }) => $display};
    flex-direction: ${({ $direction }) => $direction};
    justify-content: ${({ $justify }) => $justify};
    align-items: ${({ $align }) => $align};
    flex-wrap: ${({ $wrap }) => $wrap};
    gap: ${({ $gap }) => $gap ? GapSizes[$gap]: ""};
`;

const Container: React.FC<ContainerProps> = ({
    children,
    display = "flex",
    direction,
    align,
    justify,
    wrap,
    gap,
}) => {
    return (
        <StyledContainer
            $display={display}
            $direction={direction}
            $align={align}
            $justify={justify}
            $wrap={wrap}
            $gap={gap}
        >
            {children}
        </StyledContainer>
    );
};

export default Container;