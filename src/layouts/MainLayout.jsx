import Header from "../components/Header";
import { Container } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
