import styled from "styled-components";
import { Display, AlignItems, FlexDirection, JustifyContent, FlexWrap, Gap } from "../../types/StyleType";
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
    $direction: FlexDirection;
    $align: AlignItems;
    $justify: JustifyContent;
    $wrap: FlexWrap;
    $gap: Gap;
};

const StyledContainer = styled.div<StyledContainerProps>`
    display: ${(props) => props.$display};
    flex-direction: ${(props) => props.$direction};
    justify-content: ${(props) => props.$justify};
    align-items: ${(props) => props.$align};
    flex-wrap: ${(props) => props.$wrap};
    gap: ${(props) => props.$gap};
`;

const Container: React.FC<ContainerProps> = ({
    children,
    display = "flex",
    direction = "row",
    align = "stretch",
    justify = "normal",
    wrap = "nowrap",
    gap = 0
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