import styled from 'styled-components';
import { Colors, Breakpoints } from 'constants/index';
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
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
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

export const SectionListVertical = styled.div`
  display: grid;
  grid-gap: 1rem;
`;
