import React from 'react';
import {File as FileType} from 'types';
import {RouteTitle} from 'constants/index';
import {getPath} from 'utils/index';

import {File, Header, Icon, Info, InfoElement, Title,} from './FileLinkStyle';
import {findFileIcon, parseDate} from './FileLinkUtils';

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
        <InfoElement>200 KB</InfoElement>
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

export default FileLink;
