import styled from 'styled-components';
import Colors from 'constants/Colors';

export const Section = styled.section`
  padding: 1rem;
  background: ${Colors.White};
  display: grid;
  grid-gap: 1rem;
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
  color: ${Colors.GrayishBlue};
`;
