import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { useAuth } from '../../providers/Auth/Auth.provider';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const MainMenu = () => {
  const { logout, authenticated, user } = useAuth();
  const avatarStyle = {
    width: '22px',
    marginRight: '5px',
  };
  return (
    // <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Nav>
    //       <Nav.Link href="#deets">More deets</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <Menu>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      {authenticated && (
        <Menu.Item>
          <Link to="/favorites">Favorites</Link>
        </Menu.Item>
      )}
      <Menu.Menu position="right">
        {authenticated && user ? (
          <Menu.Item>
            <img src={user.avatarUrl} alt="avatar" style={avatarStyle} /> {user.name}
          </Menu.Item>
        ) : null}
        {authenticated ? (
          <Menu.Item onClick={logout}>Log out</Menu.Item>
        ) : (
          <Menu.Item>
            <Link to="/login">Log in</Link>
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default MainMenu;
