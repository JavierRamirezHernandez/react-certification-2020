import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { useAuth } from '../../providers/Auth/Auth.provider';

const MainMenu = () => {
  const { logout, authenticated, user } = useAuth();
  const avatarStyle = {
    width: '22px',
    marginRight: '5px',
  };
  return (
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
