import styled from 'styled-components';
import { rgba } from 'polished';
import { Link as RouterLink } from 'react-router-dom';

import { Colors } from 'constants/index';

export const File = styled(RouterLink)`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border-radius: .5em;
  overflow: hidden;
  background: ${Colors.Fog};
  text-decoration: none;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 3rem 1fr;
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  
  & > svg {
    height: 1rem;
    width: 1rem;
    color: ${Colors.GrayishBlue};
  }
`;

export const Title = styled.h2`
  font-size: 1rem;
  padding: 1rem;
  font-weight: 600;
  color: ${Colors.GrayishBlue};
  background: ${Colors.Fog};
  margin: 0;
`;

export const Info = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: .5rem;
  padding: .5rem;
  background: ${Colors.LightBlue};
`;

export const InfoElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: .5em;
  background: ${Colors.Fog};
  color: ${rgba(Colors.GrayishBlue, 0.75)};
  margin: 0;
`;
