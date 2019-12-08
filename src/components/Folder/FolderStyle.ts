import styled from 'styled-components';
import Breakpoints from 'constants/Breakpoints';
import Colors from 'constants/Colors';
import { Folder as FolderLinkStyle } from './FolderLink/FolderLinkStyle';

export const Container = styled.div`
  max-width: ${Breakpoints.Desktop};
  padding: 1rem;
  margin: auto;
`;

export const Section = styled.section`
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h2`
  font-weight: 600;
  color: ${Colors.GrayishBlue};
  opacity: 0.75;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: .5rem;
`;

export const SectionListHorizontal = styled.div`
  display: block;
  
  & > ${FolderLinkStyle} {
    margin-bottom: .5rem;
    
    &:not(:last-child) {
      margin-right: .5rem;
    }
  }
`;
