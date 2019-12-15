import React from 'react';

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
      <Button as="a" href="/">Home page</Button>
    </Container>
  </Section>
);


export default NotFound;
