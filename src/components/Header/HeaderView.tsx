import React from 'react';
import { userLoggedIn, removeUserToken } from 'utils/index';

import {
  Header as HeaderElement, Section, Title, Logo, LogoutButton,
} from './HeaderStyle';

const Header: React.FC = () => {
  const logoutAndReload = (): void => {
    removeUserToken();
    window.location.reload();
  };

  return (
    <HeaderElement>
      <Section>
        <Title to="/">
          <span><Logo /></span>
          <span>Files</span>
        </Title>
        {userLoggedIn && (
          <LogoutButton onClick={logoutAndReload}>
            LOGOUT
          </LogoutButton>
        )}
      </Section>
    </HeaderElement>
  );
};

export default Header;
