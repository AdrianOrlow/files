import styled from 'styled-components';
import { Folder as FolderIcon } from 'styled-icons/fa-solid';
import { Link as RouterLink } from 'react-router-dom';

import { Colors, Breakpoints } from 'constants/index';

export const Folder = styled(RouterLink)`
  display: inline-flex;
  border-radius: .5em;
  font-size: 1rem;
  overflow: hidden;
  text-decoration: none;
  
  transition: 0.2s ease-in-out;
  &:hover {
    filter: brightness(97.5%);
  }
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
  }
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: ${Colors.LightBlue};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.25rem;
    width: 1.25rem;
  }
`;

export const GrayFolderIcon = styled(FolderIcon)`
  height: 1rem;
  width: 1rem;
  color: ${Colors.GrayishBlue};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 1rem;
  font-weight: 600;
  color: ${Colors.GrayishBlue};
  background: ${Colors.Fog};
  margin: 0;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
    padding: 1.25rem;
  }
`;
