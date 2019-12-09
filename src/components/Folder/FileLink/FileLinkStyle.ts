import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import Colors from 'constants/Colors';

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
  color: ${Colors.GrayishBlue};
  margin: 0;
`;
