import React from 'react';

import {
  Footer as FooterStyle,
  Container,
  ButtonsContainer,
  Button,
  Divider,
  Copyright,
  Author,
} from './FooterStyle';

const Footer: React.FC = () => (
  <FooterStyle>
    <Container>
      <ButtonsContainer>
        <Button>Public files</Button>
        <Button>GitHub</Button>
      </ButtonsContainer>
      <Divider />
      <Copyright>
        Made by&nbsp;
        <Author href="https://orlow.me" target="_blank">Adrian Orłów</Author>
      </Copyright>
    </Container>
  </FooterStyle>
);

export default Footer;
