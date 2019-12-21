import styled from 'styled-components';
import { Colors } from 'constants/index';

export const Button = styled.button`
  display: flex;
  font-weight: 500;
  background: ${Colors.Blue};
  color: ${Colors.Fog};
  justify-content: center;
  border-radius: .5em;
  transition: 0.2s ease-in-out;
  
  &:hover {
    filter: brightness(97.5%);
  }
`;
