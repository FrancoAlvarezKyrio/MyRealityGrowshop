import React from 'react';
import { Nav , Navbar , NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useAuth0 } from '@auth0/auth0-react';
import { LogInButton } from '../components/LogIn';
import { LogOutButton } from '../components/LogOut';
import { Profile } from '../components/Profile';

const NavBar = () => {
  const { isAuthenticated } = useAuth0()
  return (
  <Navbar id='navBarDiv' expand="lg">
    <Container>
    <Link to='/'><img className='imagenLogo' src="images/growLogo.png"/></Link>
      <Navbar.Brand as="span"><Link id='navTitle' to="/">My Reality Grow</Link> </Navbar.Brand>
      <Navbar.Toggle id='navToggle' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id='navCats' id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="span"><Link id='navHome' to="/">Home</Link> </Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item id='navCats' as="span"><Link id='navCats' to="/cat/vegetation">Vegetation</Link></NavDropdown.Item>
                  <NavDropdown.Item id='navCats' as="span"><Link id='navCats' to="/cat/flowering">Flowering</Link></NavDropdown.Item>
                  </NavDropdown>
                <Nav.Link as="span"><Link id='navContact' to="contact">Contact</Link></Nav.Link>
                <Link to="/cart"><CartWidget/></Link>
              </Nav>
            </Navbar.Collapse>

            <div className='profileDiv'>
              {isAuthenticated ? (<><Profile/><LogOutButton/></>)
                               : (<LogInButton/>)}
            </div>
              
    </Container>
  </Navbar>
  )
};

export default NavBar;
