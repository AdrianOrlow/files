import React from 'react';
import { Folder as FolderType } from 'types';

import {
  Folder, Icon, GrayFolderIcon, Title,
} from './FolderLinkStyle';

interface FolderLinkProps {
  data: FolderType;
}

const FolderLink: React.FC<FolderLinkProps> = (props: FolderLinkProps) => {
  const { data } = props;

  return (
    <Folder to={`/folder/${data.id}`}>
      <Icon>
        <GrayFolderIcon />
      </Icon>
      <Title>
        {data.title}
      </Title>
    </Folder>
  );
};

export default FolderLink;
