import Footer from "../footer/Footer";
import Container from "../global/Container";
import Header from "../header/Header";
import Wrapper from "../global/Wrapper";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper className="shadow-lg">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
};
export default MainLayout;
