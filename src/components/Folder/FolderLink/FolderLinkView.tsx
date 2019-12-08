import React from 'react';
import { Folder as FolderType } from 'types';

import {
  Folder, Icon, GrayFolderIcon, Title,
} from './FolderLinkStyle';

interface FolderLinkProps {
  folderData: FolderType;
}

const FolderLink: React.FC<FolderLinkProps> = (props: FolderLinkProps) => {
  const { folderData } = props;

  return (
    <Folder to={`/folder/${folderData.id}`}>
      <Icon>
        <GrayFolderIcon />
      </Icon>
      <Title>
        {folderData.title}
      </Title>
    </Folder>
  );
};

export default FolderLink;
