import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to={'/'}>
          <Navbar.Brand>StreamBoard</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}

export default Nav;
