import styled from 'styled-components';
import { rgba } from 'polished';
import { Plus } from 'styled-icons/fa-solid';
import { Colors, Breakpoints } from 'constants/index';
import { Button as SharedButton } from 'shared/ButtonStyle';

import { Folder as FolderLinkStyle } from './FolderLink/FolderLinkStyle';

export const Container = styled.div`
  max-width: ${Breakpoints.Desktop};
  padding: 1rem;
  margin: auto;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.5rem;
  }
`;

export const Section = styled.section`
  margin-bottom: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    margin-bottom: 1.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 600;
  color: ${Colors.GrayishBlue};
  opacity: 0.75;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: .5rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

export const NothingInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.5em;
  font-weight: 600;
  color: ${Colors.GrayishBlue};
  background: ${Colors.Fog};
  width: 15rem;
  margin: 0;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
    padding: 1.25rem;
    width: 20rem;
  }
`;

export const CreateNewButton = styled(SharedButton)`
  display: inline-flex;
  padding: 1rem;
  border-right: .5em;
  background: ${Colors.Fog};
  color: ${rgba(Colors.GrayishBlue, 0.5)};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
    padding: 1.25rem;
  }
`;

export const CreateNewTitle = styled.span`
  color: ${rgba(Colors.GrayishBlue, 0.5)};
  font-weight: 600;
  margin-right: 1rem;
`;

export const CreateNewIcon = styled(Plus)`
  color: ${rgba(Colors.GrayishBlue, 0.5)};
  height: 1rem;
  width: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const SectionListHorizontal = styled.div`
  display: block;
  
  & > ${FolderLinkStyle}, & > ${CreateNewButton} {
    margin-bottom: .5rem;
    
    &:not(:last-child) {
      margin-right: .5rem;
    }
  }
`;

export const SectionListVertical = styled.div`
  display: grid;
  grid-gap: 1rem;
`;
