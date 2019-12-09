import React from 'react';
import { File as FileType } from 'types';

import {
  File, Header, Icon, Title, Info, InfoElement,
} from './FileLinkStyle';
import { findFileIcon } from './FileLinkUtils';

interface FileLinkProps {
  data: FileType;
}

const FileLink: React.FC<FileLinkProps> = (props: FileLinkProps) => {
  const { data } = props;
  const FileIcon = findFileIcon(data.fileName);

  return (
    <File to={`/files/${data.id}`}>
      <Header>
        <Icon>
          <FileIcon />
        </Icon>
        <Title>
          {data.title}
        </Title>
      </Header>
      <Info>
        <InfoElement>2019-11-11</InfoElement>
        <InfoElement>200 KB</InfoElement>
      </Info>
    </File>
  );
};

export default FileLink;
