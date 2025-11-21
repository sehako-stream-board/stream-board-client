import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="">StreamBoard</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
