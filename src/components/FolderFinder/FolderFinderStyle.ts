import styled from 'styled-components';
import { rgba } from 'polished';
import { Search } from 'styled-icons/fa-solid';

import { Colors, Breakpoints } from 'constants/index';
import { Button as SharedButton } from 'shared/ButtonStyle';
import { Spinner } from 'shared/Loading';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 4rem;
  background: ${Colors.Fog};
  border: 0;
  border-radius: 0.5em;
  font-size: 1rem;
  overflow: hidden;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
  }
`;

export const Inner = styled.div`
  display: grid;
`;

export const FolderIdInput = styled.input`
  border: 0;
  padding: 1rem;
  font-weight: 600;
  color: ${Colors.Fog};
  background: ${Colors.Blue};
  width: 100%;
  
  ::placeholder {
    color: ${rgba(Colors.Fog, 0.75)};
  }
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.25rem;
  }
`;

export const FolderTitle = styled.p`
  display: flex;
  align-items: center;
  padding: .5rem;
  margin: 0;
  font-weight: 600;
  color: ${rgba(Colors.GrayishBlue, 0.5)};
  background: ${Colors.LightBlue};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 0.75rem;
  }
`;

export const FolderTitleName = styled.span`
  color: ${rgba(Colors.GrayishBlue, 0.75)};
  
  &:after {
    content: "\\a0";
  }
`;

export const FindButton = styled(SharedButton)`
  border-radius: 0;
  padding: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.25rem;
  }
`;

const iconStyle = `
  height: 1rem;
  width: 1rem;
  color: ${Colors.Fog};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const FindIcon = styled(Search)`
  ${iconStyle}
`;

export const LoadingIcon = styled(Spinner).attrs({ color: Colors.Fog })`
  ${iconStyle}
`;
