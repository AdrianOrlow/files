import React from 'react';
import { File as FileType } from 'types';
import { RouteTitle } from 'constants/index';
import {
  getPath, parseDate, findFileIcon, humanFileSize,
} from 'utils/index';

import {
  File, Header, Icon, Info, InfoElement, Title,
} from './FileLinkStyle';

interface FileLinkProps {
  data: FileType;
}

const FileLink: React.FC<FileLinkProps> = (props: FileLinkProps) => {
  const { data } = props;
  const filePath = getPath({ id: data.id }, RouteTitle.File);

  const FileIcon = findFileIcon(data.fileName);

  return (
    <File to={filePath}>
      <Header>
        <Icon>
          <FileIcon />
        </Icon>
        <Title>
          {data.title}
        </Title>
      </Header>
      <Info>
        <InfoElement>{humanFileSize(data.fileSizeKB)}</InfoElement>
        <InfoElement>{parseDate(data.updatedAt)}</InfoElement>
      </Info>
    </File>
  );
};

export default FileLink;
