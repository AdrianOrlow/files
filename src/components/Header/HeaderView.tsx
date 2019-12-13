import React from 'react';
import { Header as HeaderElement, Section, Title } from './HeaderStyle';

const Header: React.FC = () => (
  <HeaderElement>
    <Section>
      <Title to="/">Files</Title>
    </Section>
  </HeaderElement>
);

export default Header;
