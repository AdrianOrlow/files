import styled from 'styled-components';
import { ArrowRight, Times } from 'styled-icons/fa-solid';
import { Colors } from 'constants/index';
import { Spinner } from 'shared/Loading';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  font-size: 2rem;
  padding: 0;
  height: 3rem;
  border: 0;
  width: 100%;
  background: ${Colors.LightBlue};
  color: ${Colors.Blue};
  text-align: center;
  border-top-left-radius: .5rem;
  border-bottom-left-radius: .5rem;
  
  :focus::placeholder {
    color: transparent;
  }
  
  ::placeholder {
    color: ${Colors.Blue};
    letter-spacing: .25rem;
    font-size: 2rem;
    line-height: 3rem;
  }
`;

interface ButtonProps {
  error: boolean;
}

export const Button = styled.button`
  display: flex;
  font-size: 2rem;
  height: 3rem;
  padding: 0 1rem;
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
  transition: .2s ease-in-out;
  background: ${(props: ButtonProps): string => (
    props.error ? Colors.Red : Colors.Blue
  )};
  & > svg {
    height: 1rem;
    width: 1rem;
    color: ${Colors.Fog};
  }
`;

export const ArrowIcon = styled(ArrowRight)``;
export const ErrorIcon = styled(Times)``;
export const LoadingIcon = styled(Spinner)``;
