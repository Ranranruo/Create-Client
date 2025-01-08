import styled from "styled-components";
import Inner from "../../components/atoms/Inner";
import Container from "../../components/atoms/Container";
import Logo from "../../components/molecules/Logo";
import GlobalNav from "../../components/molecules/GlobalNav";


const StyledHeader = styled.header`
    align-items: center;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
    height: 80px;
`;

const MainHeader: React.FC = () => {
    return (
        <StyledHeader>
            <Inner
                display="flex"
                alignItems="center"
            >
                <Container
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Container>
                        <Logo />
                    </Container>
                    <Container>
                        <GlobalNav />
                    </Container>
                    <Container></Container>
                </Container>
            </Inner>
        </StyledHeader>
    );
};

export default MainHeader;