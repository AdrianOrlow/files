import styled from 'styled-components';
import { rgba } from 'polished';
import { Link as RouterLink } from 'react-router-dom';

import { Colors, Breakpoints } from 'constants/index';

export const File = styled(RouterLink)`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border-radius: .5em;
  overflow: hidden;
  background: ${Colors.Fog};
  text-decoration: none;
  
  transition: 0.2s ease-in-out;
  &:hover {
    filter: brightness(97.5%);
  }

  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-template-columns: 3fr minmax(20rem, 1fr);
    grid-template-rows: 1fr;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 3rem 1fr;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-template-columns: 3.75rem 1fr;
  }
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.25rem;
    width: 1.25rem;
    background: inherit;
  }
  
  & > svg {
    height: 1rem;
    width: 1rem;
    color: ${Colors.GrayishBlue};
    
    @media only screen and (min-width: ${Breakpoints.Mobile}) {
      height: 1.25rem;
      width: 1.25rem;
    }
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 1rem;
  font-weight: 600;
  color: ${Colors.GrayishBlue};
  margin: 0;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
    padding: 1.25rem;
  }
`;

export const Info = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: .5rem;
  padding: .5rem;
  background: ${Colors.LightBlue};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-gap: 0.5rem;
    background: inherit;
  }
`;

export const InfoElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: .5em;
  background: ${Colors.Fog};
  color: ${rgba(Colors.GrayishBlue, 0.75)};
  margin: 0;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
    color: ${rgba(Colors.GrayishBlue, 0.75)};
    background: ${Colors.LightBlue};
  }
`;
