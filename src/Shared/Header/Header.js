
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
   
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Laptop Resell World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link  style={{ textDecoration: 'none' }}  to={'/'}>Home</Link></Nav.Link>
            <Nav.Link><Link  style={{ textDecoration: 'none' }} to={'/blog'}>Blog</Link></Nav.Link>
            <Nav.Link><Link  style={{ textDecoration: 'none' }} to={'/dashboard'}>Dashboard</Link></Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">userpic</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              username
            </Nav.Link>
            <Nav.Link ><Link to={'/getstarted'} style={{ textDecoration: 'none' }}>Get Started</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;