import React from 'react';
import * as R from 'ramda';
import { Link } from 'react-router-dom';

import { File, Folder as FolderType, FolderFullInfo } from 'types';
import { RouteTitle } from 'constants/index';
import Loading from 'shared/Loading';
import { getPath, userLoggedIn } from 'utils/index';

import FolderPath from 'components/FolderPath';
import FolderLink from './FolderLink';
import FileLink from './FileLink';
import {
  Container,
  CreateNewButton,
  CreateNewIcon,
  NothingInfo,
  Section,
  SectionListHorizontal,
  SectionListVertical,
  SectionTitle,
} from './FolderStyle';

interface FolderProps {
  folderData: FolderFullInfo | null;
}

const Folder: React.FC<FolderProps> = (props: FolderProps) => {
  const { folderData } = props;

  if (folderData != null) {
    const {
      path, children, files, folder,
    } = folderData;
    const moreThanZeroChildrenFolders = R.gt(children.length, 0);
    const moreThanZeroChildrenFiles = R.gt(files.length, 0);

    const folderLink = (child: FolderType): React.ReactElement => (
      <FolderLink key={child.id} data={child} />
    );
    const folderLinksList = R.map(folderLink, children);

    const fileLink = (file: File): React.ReactElement => (
      <FileLink key={file.id} data={file} />
    );
    const filesLinksList = R.map(fileLink, files);

    return (
      <main>
        <Container>
          <Section>
            <FolderPath data={path} />
          </Section>
          <Section>
            <SectionTitle>Folders</SectionTitle>
            <SectionListHorizontal>
              {folderLinksList}
              {R.and(
                R.not(moreThanZeroChildrenFolders),
                R.not(userLoggedIn),
              ) && (
                <NothingInfo>
                  There are no folders.
                </NothingInfo>
              )}
              {userLoggedIn && (
                <CreateNewLink folderId={folder.id} type={RouteTitle.NewFolder} />
              )}
            </SectionListHorizontal>
          </Section>
          <Section>
            <SectionTitle>Files</SectionTitle>
            <SectionListVertical>
              {filesLinksList}
              {R.and(
                R.not(moreThanZeroChildrenFiles),
                R.not(userLoggedIn),
              ) && (
                <NothingInfo>
                  There are no files.
                </NothingInfo>
              )}
              {userLoggedIn && (
                <CreateNewLink folderId={folder.id} type={RouteTitle.NewFile} />
              )}
            </SectionListVertical>
          </Section>
        </Container>
      </main>
    );
  }
  return null;
};

interface CreateNewButtonProps {
  folderId: string;
  type: RouteTitle;
}

const CreateNewLink: React.FC<CreateNewButtonProps> = (
  { folderId, type }: CreateNewButtonProps,
) => {
  const isNewFile = type === RouteTitle.NewFile;
  const params = isNewFile ? { folderId } : { parentId: folderId };
  const path = getPath(params, type);

  return (
    <CreateNewButton
      as={Link}
      to={path}
    >
      <CreateNewIcon />
    </CreateNewButton>
  );
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
