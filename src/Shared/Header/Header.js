
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const Header = () => {
    const { User, LogOut } = useContext(AuthContext)
   const HandleLogout = () => {
        LogOut()
            .then(() => {
                alert("Sign-out successful");
            })
            .catch((error) => {
                console.error(error);
            });

    };
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
             <Nav.Link >{User ? <div className='d-flex'><Nav.Link >{User.displayName}</Nav.Link>
              <Nav.Link  ><img src={User.photoURL} alt="" title={User.displayName} className='rounded-circle  naving' /></Nav.Link></div> : ""}</Nav.Link>
          
            <Nav.Link >{User ? <Link onClick={HandleLogout} style={{ textDecoration: 'none' }}>Log Out</Link> : <Nav.Link ><Link to={'/getstarted'} style={{ textDecoration: 'none' }}>Get Started</Link></Nav.Link>}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;