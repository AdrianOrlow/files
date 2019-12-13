import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors, Breakpoints } from 'constants/index';

export const Header = styled.header`
  display: flex;
  background: ${Colors.Fog};
  padding: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1rem 1.5rem;
  }
`;

export const Section = styled.div`
  max-width: ${Breakpoints.Desktop};
  width: 100%;
  margin: auto;
`;

export const Title = styled(Link)`
  display: block;
  font-weight: bold;
  color: ${Colors.GrayishBlue};
  font-size: 1rem;
  padding: .5rem 0;
  text-decoration: none;

  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
  }
`;
