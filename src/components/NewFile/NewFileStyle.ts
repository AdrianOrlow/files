import styled from 'styled-components';
import { Breakpoints } from 'constants/index';
import * as SharedForm from 'shared/FormStyle';

export const { Container } = SharedForm;

export const { Form } = SharedForm;

export const { Header } = SharedForm;

export const { Title } = SharedForm;

export const Inner = styled(SharedForm.Inner)`
  grid-template-areas:
    "title"
    "description"
    "file"
    "finder"
    "permalink-password"
    "button";
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    grid-template-areas:
      "title file"
      "description file"
      "description permalink-password"
      "finder button";
  }
`;

export const { InputWrapper } = SharedForm;

export const TitleWrapper = styled(InputWrapper)`
  grid-area: title;
`;

export const DescriptionWrapper = styled(InputWrapper)`
  grid-area: description;
`;

export const FileInputWrapper = styled(InputWrapper)`
  grid-area: file;
`;

export const FolderFinderWrapper = styled(InputWrapper)`
  grid-area: finder;
`;

export const InlineInputs = styled(SharedForm.InlineInputs)`
  grid-area: permalink-password;
`;

export const { Input } = SharedForm;

export const { Textarea } = SharedForm;

export const Button = styled(SharedForm.Button)`
  grid-area: button;
`;

export const { LoadingSpinner } = SharedForm;

export const { Error } = SharedForm;
