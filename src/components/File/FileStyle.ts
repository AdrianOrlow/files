import styled from 'styled-components';
import { rgba } from 'polished';
import { Colors, Breakpoints } from 'constants/index';

export const Container = styled.div`
  max-width: ${Breakpoints.Desktop};
  padding: 1rem;
  margin: auto;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.5rem;
  }
`;

export const File = styled.div`
  border-radius: .5em;
  font-size: 1rem;
  overflow: hidden;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    font-size: 1.25rem;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 3rem 1fr;
  color: ${Colors.GrayishBlue};
  background: ${Colors.LightBlue};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-template-columns: 3.75rem 1fr;
  }
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.25rem;
    width: 1.25rem;
    background: inherit;
  }
  
  & > svg {
    height: 1rem;
    width: 1rem;
    color: ${Colors.GrayishBlue};
    
    @media only screen and (min-width: ${Breakpoints.Mobile}) {
      height: 1.25rem;
      width: 1.25rem;
    }
  }
`;

export const Title = styled.h2`
  display: block;
  padding: 1rem;
  padding-left: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.25rem;
    padding-left: 0;
    font-size: 1.25rem;
  }
`;

export const Inner = styled.section`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  background: ${Colors.Fog};
  grid-template-areas:
      "description"
      "info"
      "checksum"
      "actions";
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-gap: 1.25rem;
    padding: 1.25rem;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2rem;
    grid-template-areas:
      "description info"
      "checksum actions";
  }
`;

export const Description = styled.p`
  grid-area: description;
  line-height: 1.2;
  margin: 0;
  font-weight: 500;
  color: ${rgba(Colors.GrayishBlue, 0.75)}
`;

export const Info = styled.section`
  grid-area: info;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "filename filename" "date size";
  grid-gap: 1rem;
  height: min-content;
`;

interface InfoElementType {
  area: 'filename' | 'date' | 'size';
}

export const InfoElement = styled.div<InfoElementType>`
  grid-area: ${(props: InfoElementType): string => props.area};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-weight: 600;
  border-radius: .5em;
  color: ${rgba(Colors.GrayishBlue, 0.75)};
  background: ${Colors.LightBlue};
  margin: 0;
`;

export const Checksum = styled.section`
  grid-area: checksum;
  display: grid;
  word-break: break-all;
  grid-gap: 0.5rem;
`;

export const ChecksumElement = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${rgba(Colors.GrayishBlue, 0.5)};
`;

export const ChecksumTitle = styled.span`
  font-weight: 600;
  
  &:after {
    content: "\\a0";
  }
`;

export const Actions = styled.section`
  grid-area: actions;
  display: flex;
`;
