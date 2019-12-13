import styled from 'styled-components';
import { rgba } from 'polished';
import { AngleRight } from 'styled-icons/fa-solid';
import { Link as RouterLink } from 'react-router-dom';

import { Colors, Breakpoints } from 'constants/index';

export const Container = styled.div`
  display: inline-flex;
  padding: 1rem;
  border-radius: .5em;
  background: ${Colors.Fog};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.25rem;
  }
`;

export const Navigation = styled.nav`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
  }
`;

export const PathElement = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(RouterLink)`
  color: ${rgba(Colors.GrayishBlue, 0.75)};
  text-decoration: none;
  
  transition: 0.2s ease-in-out;
  ${PathElement}:not(:last-child) > &:hover {
    color: ${Colors.GrayishBlue};
  }
  
  ${PathElement}:last-child > & {
    pointer-events: none;
  }
`;

export const Arrow = styled(AngleRight)`
  color: ${rgba(Colors.GrayishBlue, 0.75)};
  height: 1.25rem;
  width: 1.75rem;
  
  span${PathElement}:last-child > &:last-child {
      display: none;
  }
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
     height: 1.75rem;
     width: 2.5rem;
  }
`;
