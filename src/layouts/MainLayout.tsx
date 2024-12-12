import Logo from "../components/atoms/Logo";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>

      {children}
      <Logo />
    </>
  );
};

export default MainLayout;
