import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import { useAuth } from '../../providers/Auth/Auth.provider';

const MainMenu = () => {
  const { logout, authenticated, user } = useAuth();
  return (
    <Menu>
      <Menu.Item>
        <Link to="/">
          <Icon name="home" />
        </Link>
      </Menu.Item>
      {/* <Menu.Item>
        <Link to="/characters">
          <FormattedMessage id="sections.characters" />
        </Link>
      </Menu.Item> */}
      <Menu.Menu position="right">
        {authenticated && user ? <Menu.Item>Usuario: {user.name}</Menu.Item> : null}
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
