import styled from 'styled-components';
import { AngleRight } from 'styled-icons/fa-solid';
import { Link as RouterLink } from 'react-router-dom';

import Colors from 'constants/Colors';

export const Container = styled.div`
  display: inline-flex;
  padding: 1rem;
  border-radius: .5em;
  background: ${Colors.Fog};
`;

export const Navigation = styled.nav`
  opacity: 0.75;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
`;

export const Link = styled(RouterLink)`
  color: ${Colors.GrayishBlue};
  text-decoration: none;
`;

export const Arrow = styled(AngleRight)`
  color: ${Colors.GrayishBlue};
  height: 1rem;
  width: 1.5rem;
  
  span:last-child > &:last-child {
      display: none;
  }
`;
