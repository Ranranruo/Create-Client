import Container from "../atoms/Container";
import Image from "../atoms/Image";
import Title from "../atoms/Title";

interface LogoProps {

}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Container>
      <Image src={"/images/logo/logo.svg"} />
      <Title>degether</Title>
    </Container>
  );
};
