import styled from 'styled-components';
import Breakpoints from 'constants/Breakpoints';
import Colors from 'constants/Colors';

export const Header = styled.header`
  display: flex;
  background: ${Colors.Fog};
  padding: 1rem;
`;

export const Section = styled.div`
  max-width: ${Breakpoints.Desktop};
  width: 100%;
  margin: auto;
`;

export const Title = styled.h1`
  font-weight: bold;
  color: ${Colors.GrayishBlue};
  font-size: 1rem;

  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.5rem;
  }
`;
