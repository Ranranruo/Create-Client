import { Link } from "react-router-dom";
import Container from "../components/atoms/Container";
import Text from "../components/atoms/Content";
import MainLayout from "../layouts/MainLayout";
import Title from "../components/atoms/Title";

const MainPage: React.FC = () => {
  return (
    <MainLayout>
      <Title>제목</Title>
      <Text>안녕</Text>
      <Container>
        <Text>a</Text>
      </Container>
    </MainLayout>
  );
}

export default MainPage;