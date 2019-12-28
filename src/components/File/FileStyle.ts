import styled from 'styled-components';
import { rgba } from 'polished';
import { Colors, Breakpoints } from 'constants/index';
import { Button as SharedButton } from 'shared/ButtonStyle';
import { Pen, Trash } from 'styled-icons/fa-solid';

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
  grid-template-columns: 3rem 1fr auto;
  color: ${Colors.GrayishBlue};
  background: ${Colors.LightBlue};
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    grid-template-columns: 3.75rem 1fr auto;
  }
`;

export const HeaderActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: .5rem;
  padding: .5rem;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 0.5rem 1rem;
  }
`;

const headerButtonsStyle = `
  padding: .5rem;
  background: ${rgba(Colors.Fog, 0.75)};

  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1rem;
  }
`;

export const EditButton = styled(SharedButton)`
  ${headerButtonsStyle};
`;

interface DeleteButtonProps {
  confirmed: boolean;
}

export const DeleteButton = styled(SharedButton)`
  ${headerButtonsStyle};
  
  ${(props: DeleteButtonProps): string => (
    props.confirmed ? `
      background: ${rgba(Colors.Red, 0.25)}
    ` : ''
  )};
`;

const iconVectorStyle = `
  height: 0.75rem;
  width: 0.75rem;

  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    height: 1rem;
    width: 1rem;
  }
`;

export const EditIcon = styled(Pen)`
  ${iconVectorStyle};
  color: ${Colors.Blue};
`;

export const DeleteIcon = styled(Trash)`
  ${iconVectorStyle};
  color: ${Colors.Red};
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
    color: ${Colors.GrayishBlue};
    height: 1rem;
    width: 1rem;

    @media only screen and (min-width: ${Breakpoints.Mobile}) {
      height: 1.25rem;
      width: 1.25rem;
    }
  }
`;

export const Title = styled.h2`
  display: block;
  padding: 1rem 1rem 1rem 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  
  @media only screen and (min-width: ${Breakpoints.Mobile}) {
    padding: 1.25rem 1.25rem 1.25rem 0;
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
  grid-gap: 1rem;
  height: min-content;
  grid-template-areas:
    "filename"
    "date"
    "size";
  
  @media only screen and (min-width: ${Breakpoints.VerySmallMobile}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "filename filename" "date size";
  }
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
