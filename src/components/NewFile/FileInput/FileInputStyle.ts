import styled from 'styled-components';
import { rgba } from 'polished';
import { Colors, Breakpoints } from 'constants/index';
import { Times } from 'styled-icons/fa-solid';
import { Button as SharedButton } from 'shared/ButtonStyle';

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
