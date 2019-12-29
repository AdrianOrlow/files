import styled from 'styled-components';
import { rgba } from 'polished';
import { Colors, Breakpoints } from 'constants/index';
import { Form as FormikForm } from 'formik';
import { Button as SharedButton } from 'shared/ButtonStyle';
import { Spinner } from 'shared/Loading';
import { Times } from 'styled-icons/fa-solid';

export const Container = styled.div`
  max-width: ${Breakpoints.Desktop};
  padding: 1rem;
  margin: auto;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.5rem;
  }
`;

export const Form = styled(FormikForm)`
  border-radius: .5em;
  font-size: 1rem;
  overflow: hidden;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: ${Colors.GrayishBlue};
  background: ${Colors.LightBlue};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.25rem;
  }
`;

export const Title = styled.h2`
  display: block;
  text-align: center;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
  }
`;

export const Inner = styled.section`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  background: ${Colors.Fog};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-gap: 1.25rem;
    padding: 1.25rem;
  }
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-gap: .75rem;
`;

export const InlineInputs = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media only screen and (min-width: ${Breakpoints.SmallMobile}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Input = styled.input`
  display: flex;
  padding: 1rem;
  border-radius: .5em;
  border: 0;
  font-size: 1rem;
  font-weight: 600;
  background: ${Colors.LightBlue};
  color: ${Colors.GrayishBlue};

  :focus::placeholder {
    color: transparent;
  }
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
    padding: 1.25rem;
  }
`;

export const Textarea = styled(Input).attrs({ as: 'textarea' })`
  resize: none;
  overflow: hidden;
  font-weight: 500;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    height: auto;
  }
`;

export const Button = styled(SharedButton)`
  padding: 1rem;
  grid-area: button;
  font-weight: 600;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.25rem;
  }
`;

export const LoadingSpinner = styled(Spinner)`
  height: 1rem;
  width: 1rem;
  color: ${Colors.Fog};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .75rem;
  border-radius: 0.5em;
  font-weight: 500;
  background: ${rgba(Colors.Red, 0.1)};
  color:  ${rgba(Colors.Red, 0.75)};
`;

export const FileContainer = styled.div`
  border-radius: .5em;
  font-size: 1rem;
  background: ${Colors.Blue};
  display: grid;
  grid-template-columns: 1fr 4rem;
  
  @media only screen and (min-width: ${Breakpoints.SmallMobile}) {
    font-size: 1.25rem;
    height: 100%;
  }
`;

export const FileDescription = styled.div`
  display: grid;
  grid-template-columns: fit-content(66%) 1px auto;
  grid-gap: 1rem;
  color: ${Colors.Fog};
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.SmallMobile}) {
    font-size: 1.25rem;
    padding: 1.25rem;
  }
`;

const fileInfoText = `
  margin: 0;
  display: flex;
  align-items: center;
`;

export const FileInfoName = styled.p`
  ${fileInfoText};
  word-break: break-all;
`;

export const FileInfoSize = styled.p`
  ${fileInfoText};
  white-space: nowrap;
`;

export const FileInfoDivider = styled.div`
  height: 100%;
  width: 2px;
  border-radius: 1px;
  background: ${rgba(Colors.Fog, 0.5)};
  
  @media only screen and (min-width: ${Breakpoints.SmallMobile}) {
    height: 2rem;
    margin: auto;
  }
`;

export const FileCancel = styled(SharedButton)`
  padding: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.SmallMobile}) {
    padding: 1.25rem;
  }
`;

export const FileCancelIcon = styled(Times)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${Colors.Fog};
`;
