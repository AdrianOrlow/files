import styled from 'styled-components';
import { Folder as FolderIcon } from 'styled-icons/fa-solid';
import { Link as RouterLink } from 'react-router-dom';

import Colors from 'constants/Colors';

export const Folder = styled(RouterLink)`
  display: inline-flex;
  border-radius: .5em;
  font-size: 1rem;
  overflow: hidden;
  text-decoration: none;
`;

export const Icon = styled.span`
  padding: 1rem;
  background: ${Colors.LightBlue};
`;

export const GrayFolderIcon = styled(FolderIcon)`
  height: 1rem;
  width: 1rem;
  color: ${Colors.GrayishBlue};
`;

export const Title = styled.p`
  font-size: 1rem;
  padding: 1rem;
  font-weight: 500;
  color: ${Colors.GrayishBlue};
  background: ${Colors.Fog};
  margin: 0;
`;
