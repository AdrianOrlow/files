import React from 'react';
import { Section, Container, Title, Button } from './HeroStyle';

const Hero: React.FC = () => (
  <Section>
    <Container>
      <Title>
        Here I store files
        <br />
        for You.
      </Title>
      <Button>Learn more</Button>
    </Container>
  </Section>
);

export default Hero;
