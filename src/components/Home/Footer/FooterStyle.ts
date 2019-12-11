import styled from 'styled-components';
import { Colors, Breakpoints } from 'constants/index';
import { Button as SharedButton } from 'shared/ButtonStyle';

export const Footer = styled.footer`
  padding: 1rem;
  background: ${Colors.Fog};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 2rem 1rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 3px 1rem;
  grid-gap: 1rem;
  max-width: ${Breakpoints.Desktop};
  margin: auto;

  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 3px auto;
    grid-gap: 2rem;
  }
`

export const ButtonsContainer = styled.nav`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-gap: 2rem;
  }
`;

export const Button = styled(SharedButton)`
  padding: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 3px;
  border-right: 1.5px;
  background: ${Colors.Blue};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    height: 100%;
    width: 3px;
  }
`;

export const Copyright = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-weight: 500;
  color: ${Colors.Blue};
  font-size: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.5rem;
  }
`;

export const Author = styled.a`
  font-weight: 600;
  color: ${Colors.Blue};
  text-decoration: none;
`;
