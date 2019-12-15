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
  const FileIcon = findFileIcon(data.fileName);
  const filePath = getPath({ id: data.id }, RouteTitle.File);

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
        <FileLinkDate date={data.updatedAt} />
        <FileSize size={data.fileSizeKB} />
      </Info>
    </File>
  );
};

interface FileLinkDateProps {
  date: string;
}

const FileLinkDate = (props: FileLinkDateProps): React.ReactElement => {
  const { date } = props;
  return <InfoElement>{parseDate(date)}</InfoElement>;
};

interface FileSizeProps {
  size: string;
}

const FileSize = (props: FileSizeProps): React.ReactElement => {
  const { size } = props;
  return <InfoElement>{humanFileSize(size)}</InfoElement>;
};

export default FileLink;
