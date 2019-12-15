import styled from 'styled-components';

import { Button as SharedButton } from 'shared/ButtonStyle';
import { Colors, Breakpoints } from 'constants/index';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 3rem);
  width: 100%;
  background: ${Colors.LightBlue};
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: calc(100% - 4rem) 4rem;
  padding: 1rem;
  height: auto;
  width: 20rem;
  grid-gap: 2.5rem;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 4rem;
  margin: 0;
  text-align: center;
  line-height: 1.2;
  color: ${Colors.GrayishBlue};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 5rem;
  }
`;

export const Button = styled(SharedButton)`
  padding: 1.5rem;
  text-decoration: none;
`;
