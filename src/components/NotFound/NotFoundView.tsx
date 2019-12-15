import React from 'react';
import { Link } from 'react-router-dom';

import {
  Section,
  Container,
  Button,
  Title,
} from './NotFoundStyle';

const NotFound: React.FC = () => (
  <Section>
    <Container>
      <Title>404.</Title>
      <Button as={Link} to="/">Home page</Button>
    </Container>
  </Section>
);


export default NotFound;
