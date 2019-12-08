import React from 'react';

import {
  Section,
  ButtonsContainer,
  Button,
  Divider,
  Copyright,
  Author,
} from './FooterStyle';

const Footer: React.FC = () => (
  <Section>
    <ButtonsContainer>
      <Button>Public files</Button>
      <Button>GitHub</Button>
    </ButtonsContainer>
    <Divider />
    <Copyright>
      Made by&nbsp;
      <Author>Adrian Orłów</Author>
    </Copyright>
  </Section>
);

export default Footer;
