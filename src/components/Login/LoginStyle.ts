import styled from 'styled-components';
import { Breakpoints } from 'constants/index';

export const Container = styled.div`
  max-width: ${Breakpoints.Desktop};
  padding: 1rem;
  margin: auto;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.5rem;
  }
`;
