import styled from 'styled-components';
import { Colors, Breakpoints } from 'constants/index';
import * as SharedForm from 'shared/FormStyle';

export const UploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${Colors.Blue};
  padding: 1rem;
  border-radius: 7.5px;
  border: 5px solid ${Colors.Blue};
  cursor: pointer;
  
  @media only screen and (min-width: ${Breakpoints.SmallMobile}) {
    font-size: 1.25rem;
    padding: 1.25rem;
    border-radius: 15px;
    border: 10px solid ${Colors.Blue};
    height: calc(100% - 3.75rem);
  }
`;

export const UploadInput = styled.input`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  white-space: nowrap;
  width: 1px; 
`;

export const { FileContainer } = SharedForm;

export const { FileDescription } = SharedForm;

export const { FileInfoName } = SharedForm;

export const { FileInfoSize } = SharedForm;

export const { FileInfoDivider } = SharedForm;

export const { FileCancel } = SharedForm;

export const { FileCancelIcon } = SharedForm;
