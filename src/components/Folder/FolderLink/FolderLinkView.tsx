import React from 'react';
import { Folder as FolderType } from 'types';
import { RouteTitle } from 'constants/index';
import { getPath } from 'utils/index';

import {
  Folder, Icon, GrayFolderIcon, Title,
} from './FolderLinkStyle';

interface FolderLinkProps {
  data: FolderType;
}

const FolderLink: React.FC<FolderLinkProps> = (props: FolderLinkProps) => {
  const { data } = props;
  const folderPath = getPath({ id: data.id }, RouteTitle.Folder);

  return (
    <Folder to={folderPath}>
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
