import styled from "styled-components";
import { Display, AlignItems, FlexDirection, JustifyContent, FlexWrap, Gap } from "../../types/styles/Property";
import { ReactElement } from "react";
import { ClassName, Id } from "../../types/ComponentType";
import cn from "classnames";


interface ContainerProps {
    children: ReactElement | ReactElement[];
    id?: Id;
    className?: ClassName;
    display?: Display;
    direction?: FlexDirection;
    alignItems?: AlignItems;
    justifyContent?: JustifyContent;
    wrap?: FlexWrap;
    gap?: Gap;
};

interface StyledContainerProps {
    id?: Id;
    className: ClassName;
    $display: Display;
    $direction?: FlexDirection;
    $alignItems?: AlignItems;
    $justifyContent?: JustifyContent;
    $wrap?: FlexWrap;
    $gap?: Gap;
};

const GapSizes = {
    "verysmall": "--gap-spacing-verysmall",
    "small": "--gap-spacing-small",
    "medium": "--gap-spacing-medium",
    "large": "--gap-spacing-large",
    "huge": "--gap-spacing-huge"
} as const;

const StyledContainer = styled.div<StyledContainerProps>`
    display: ${({ $display }) => $display};
    flex-direction: ${({ $direction }) => $direction};
    justify-content: ${({ $justifyContent }) => $justifyContent};
    align-items: ${({ $alignItems }) => $alignItems};
    flex-wrap: ${({ $wrap }) => $wrap};
    gap: ${({ $gap }) => $gap ? `var(${GapSizes[$gap]})` : ""};
`;

const Container: React.FC<ContainerProps> = ({
    children,
    id,
    className,
    display = "flex",
    direction,
    alignItems,
    justifyContent,
    wrap,
    gap,
}) => {
    return (
        <StyledContainer
            id={id}
            className={cn("container", className)}
            $display={display}
            $direction={direction}
            $alignItems={alignItems}
            $justifyContent={justifyContent}
            $wrap={wrap}
            $gap={gap}
        >
            {children}
        </StyledContainer>
    );
};

export default Container;