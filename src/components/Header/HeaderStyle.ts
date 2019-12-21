import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rgba } from 'polished';

import { ReactComponent as LogoSvg } from 'assets/vectors/logo.svg';
import { Colors, Breakpoints } from 'constants/index';
import { Button as SharedButton } from 'shared/ButtonStyle';

export const Header = styled.header`
  display: flex;
  background: ${Colors.Fog};
  padding: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1rem 1.5rem;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${Breakpoints.Desktop};
  width: 100%;
  margin: auto;
`;

export const Title = styled(Link)`
  display: inline-flex;
  justify-content: left;
  align-items: center;
  font-weight: bold;
  color: ${Colors.GrayishBlue};
  font-size: 1rem;
  padding: .5rem 0;
  text-decoration: none;
  
  & > span {
    display: flex;
    align-items: center;
    &:first-child {
      padding-right: 0.5em;
      border-right: 1px solid ${rgba(Colors.GrayishBlue, 0.5)};
    }
    &:last-child {
      padding-left: 0.5em;
    }
  }

  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
  }
`;

export const Logo = styled(LogoSvg)`
  height: 1em;
  width: auto;
  fill: ${Colors.GrayishBlue};
`;

export const LogoutButton = styled(SharedButton)`
  background: ${Colors.LightBlue};
  color: ${Colors.GrayishBlue};
  padding: .5rem 1rem;
  border-radius: .5em;
  font-weight: 700;
`;
