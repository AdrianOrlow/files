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
  const filePath = getPath({ id: data.id, permalink: data.permalink }, RouteTitle.File);

  const FileIcon = findFileIcon(data.fileName);
  const sizeBytes = parseInt(data.fileSizeKB, 10) * 1000;

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
        <InfoElement>{humanFileSize(sizeBytes)}</InfoElement>
        <InfoElement>{parseDate(data.updatedAt)}</InfoElement>
      </Info>
    </File>
  );
};

export default FileLink;
