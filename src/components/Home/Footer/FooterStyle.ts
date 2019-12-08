import styled from 'styled-components';
import Colors from 'constants/Colors';
import { Button as SharedButton } from 'shared/ButtonStyle';

export const Section = styled.section`
  padding: 1rem;
  background: ${Colors.Fog};
  display: grid;
  grid-template-rows: 1fr 3px 1rem;
  grid-gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

export const Button = styled(SharedButton)`
  padding: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 3px;
  border-right: 1.5px;
  background: ${Colors.Blue};
`;

export const Copyright = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-weight: 500;
  color: ${Colors.Blue};
  font-size: 1rem;
`;

export const Author = styled.a`
  font-weight: 600;
  font-size: 1rem;
  color: ${Colors.Blue};
`;
