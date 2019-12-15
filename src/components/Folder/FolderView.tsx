import React from 'react';
import * as R from 'ramda';

import { FolderFullInfo, Folder as FolderType, File } from 'types';
import Loading from 'shared/Loading';

import FolderPath from './FolderPath';
import FolderLink from './FolderLink';
import FileLink from './FileLink';
import {
  Container, Section, SectionTitle, SectionListHorizontal, SectionListVertical,
} from './FolderStyle';

interface FolderProps {
  folderInfo: FolderFullInfo | null;
}

const Folder: React.FC<FolderProps> = (props: FolderProps) => {
  const { folderInfo } = props;

  if (folderInfo != null) {
    const { path, children, files } = folderInfo;
    const moreThanZeroChildren = R.gt(children.length, 0);
    const moreThanZeroFiles = R.gt(files.length, 0);

    return (
      <main>
        <Container>
          <Section>
            <FolderPath data={path} />
          </Section>
          <Section>
            <SectionTitle>Folders</SectionTitle>
            {moreThanZeroChildren && <FolderLinksList data={children} />}
          </Section>
          <Section>
            <SectionTitle>Files</SectionTitle>
            {moreThanZeroFiles && <FolderFilesLinks data={files} />}
          </Section>
        </Container>
      </main>
    );
  }
  return null;
};

interface LinksListProps {
  data: FolderType[];
}

const FolderLinksList: React.FC<LinksListProps> = (props: LinksListProps) => {
  const { data } = props;

  const folderLink = (folder: FolderType): React.ReactElement => (
    <FolderLink key={folder.id} data={folder} />
  );
  const foldersLinks = R.map(folderLink, data);

  return <SectionListHorizontal>{foldersLinks}</SectionListHorizontal>;
};

interface FilesLinksProps {
  data: File[];
}

const FolderFilesLinks: React.FC<FilesLinksProps> = (props: FilesLinksProps) => {
  const { data } = props;

  const fileLink = (file: File): React.ReactElement => (
    <FileLink key={file.id} data={file} />
  );
  const filesLinks = R.map(fileLink, data);

  return <SectionListVertical>{filesLinks}</SectionListVertical>;
};

const FolderLoading: React.FC = () => (
  <main>
    <Container>
      <Loading />
    </Container>
  </main>
);

export { FolderLoading };
export default Folder;
