import styled from 'styled-components';
import { Colors, Breakpoints } from 'constants/index';
import { Button as SharedButton } from 'shared/ButtonStyle';
import { Link } from 'styled-icons/fa-solid';

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  width: 100%;
  
  @media only screen and (min-width: ${Breakpoints.VerySmallMobile}) {
    grid-template-columns: 1fr 1fr;
  }
`;

interface LinkButtonProps {
  copied: boolean;
}

export const LinkIcon = styled(Link)`
  height: 1rem;
  width: 1rem;
  margin-right: 1rem;
  transition: 0.2s ease-in-out;
  color: ${Colors.GrayishBlue};
`;

export const LinkInfo = styled.p`
  margin: 0;
  font-weight: 500;
  width: 100%;
  display: block;
  transition: 0.2s ease-in-out;
  color: ${Colors.GrayishBlue};
`;

export const LinkButton = styled(SharedButton)`
  justify-content: left;
  font-size: 1rem;
  padding: 1rem;
  width: 100%;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  background: ${(props: LinkButtonProps): string => (props.copied ? Colors.Green : Colors.LightBlue)};
  
  ${LinkInfo}, ${LinkIcon} {
    color: ${(props: LinkButtonProps): string => (props.copied ? Colors.Fog : Colors.GrayishBlue)};
  }
`;

export const DownloadButton = styled(SharedButton)`
  font-size: 1rem;
  padding: 1rem;
  align-items: center;
  text-decoration: none;
`;
