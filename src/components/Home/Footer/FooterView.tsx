import React from 'react';

import { Link } from 'react-router-dom';
import { getPath } from 'utils/index';
import { RouteTitle } from 'constants/index';

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
        <Button
          as={Link}
          to={getPath({ id: 'public' }, RouteTitle.Folder)}
        >
          Public files
        </Button>
        <Button
          as="a"
          href="https://github.com/AdrianOrlow/files"
          target="_blank"
        >
          Source code
        </Button>
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
