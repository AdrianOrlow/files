import React from 'react';
import { Section, Paragraph } from './InfoStyle';

const Info: React.FC = () => (
  <Section>
    <Paragraph>
      For your and my convenience, I created this website. It allows me
      to easily and quickly share files and even secure them with a password.
    </Paragraph>
    <Paragraph>
      The whole site is open source, so you can contribute
      to its development or run such an application for yourself.
    </Paragraph>
  </Section>
);

export default Info;
