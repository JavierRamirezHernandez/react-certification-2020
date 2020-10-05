import React from 'react';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { useHistory } from 'react-router';

const MainMenu = () => {
  const history = useHistory();
  const { logout, authenticated, user } = useAuth();
  const avatarStyle = {
    width: '22px',
    marginRight: '5px',
  };

  let authNavItem = <Nav.Link onClick={() => handleGoTo('/login')}>Login</Nav.Link>;
  if (authenticated && user) {
    const userNavItem = (
      <>
        <Image src={user.avatarUrl} style={avatarStyle} />
        {user.name}
      </>
    );
    authNavItem = (
      <NavDropdown title={userNavItem} id="collasible-nav-dropdown">
        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
      </NavDropdown>
    );
  }

  const handleGoTo = (path = '/') => {
    history.push(path);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand onClick={() => handleGoTo('/')} data-testid="brandLogo">
        YouTube React Client
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => handleGoTo('/')} data-testid="homeItem">
            Home
          </Nav.Link>
          {authenticated && (
            <Nav.Link
              onClick={() => handleGoTo('/favorites')}
              data-testid="favoritesItem"
            >
              Favorites
            </Nav.Link>
          )}
        </Nav>
        <Nav>{authNavItem}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainMenu;
