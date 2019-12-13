import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';
import { Colors } from 'constants/index';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.Fog};
  color: ${rgba(Colors.GrayishBlue, 0.75)};
  font-weight: 600;
  min-height: 25rem;
  border-radius: 0.5rem;
  font-size: 2rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.svg`
  transition-property: transform;
  animation-name: ${rotate};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 750ms;
  width: 1em;
  height: 1em;
`;
