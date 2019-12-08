import styled from 'styled-components';

import { Button as SharedButton } from 'shared/ButtonStyle';
import Colors from 'constants/Colors';

export const Section = styled.section`
  height: 75vh;
  width: 100%;
  background: ${Colors.LightBlue};
`;

export const Container = styled.div`
  height: calc(100% - 2rem);
  width: calc(100% - 2.5rem);
  display: grid;
  grid-template-rows: calc(100% - 4rem) 4rem;
  padding: 1rem;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
  text-align: center;
  line-height: 1.2;
  color: ${Colors.GrayishBlue};
`;

export const Button = styled(SharedButton)`
  padding: 1.5rem;
`;