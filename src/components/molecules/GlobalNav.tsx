import { styled } from "styled-components";
import { ClassName, Id } from "../../types/ComponentType";
import cn from "classnames";

interface GlobalNavProps {
  id?: Id;
  className?: ClassName;
}

interface StyledGlobalNavProps {
  id?: Id;
  className: ClassName;
}

const StyledGlobalNav = styled.nav<StyledGlobalNavProps>`
  display: flex;
  gap: 5px;
`;

const GlobalNav: React.FC<GlobalNavProps> = ({ id, className }) => {
  return (
    <StyledGlobalNav
      id={id}
      className={cn("global", "nav", className)}
    >
    </StyledGlobalNav>
  );
};

export default GlobalNav;
