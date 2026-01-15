//Home-page.tsx
import { Col, Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton"; 
import NavBar from "./NavBar";
const HomePage: React.FC = () => {
  return (
    <Container>
      <Col>
      <NavBar />
        <h1>Hello Auth0 World</h1>
        <LoginButton />
        <LogoutButton />
        
      </Col>
    </Container>
  );
};

export default HomePage;