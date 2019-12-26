import React from 'react';
import * as R from 'ramda';

import { File as FileType, Link } from 'types';
import { findFileIcon, humanFileSize, parseDate } from 'utils/index';
import Loading from 'shared/Loading';

import FileDownload from './FileDownload';
import FileInputPassword from './FileInputPassword';

import {
  Container, File as FileStyle, Header, Icon, Title, Inner,
  Description, Info, InfoElement, Checksum, ChecksumElement, ChecksumTitle, Actions,
} from './FileStyle';

export interface FileProps {
  fileData: FileType | null;
  linkData: Link | null;
  onPasswordInput: Function;
}

const File: React.FC<FileProps> = (props: FileProps) => {
  const {
    fileData, linkData, onPasswordInput,
  } = props;

  if (fileData != null) {
    const canDownloadFile = R.or(
      R.and(fileData.hasPassword, linkData),
      R.not(fileData.hasPassword),
    );

    const FileIcon = findFileIcon(fileData.fileName);
    const sizeBytes = parseInt(fileData.fileSizeKB, 10) * 1000;

    return (
      <main>
        <Container>
          <FileStyle>
            <Header>
              <Icon>
                <FileIcon />
              </Icon>
              <Title>
                {fileData.title}
              </Title>
            </Header>
            <Inner>
              <Description>{fileData.description}</Description>
              <Info>
                <InfoElement area="filename">{fileData.fileName}</InfoElement>
                <InfoElement area="size">{humanFileSize(sizeBytes)}</InfoElement>
                <InfoElement area="date">{parseDate(fileData.updatedAt)}</InfoElement>
              </Info>
              <Checksum>
                <ChecksumElement>
                  <ChecksumTitle>MD5:</ChecksumTitle>
                  {fileData.fileChecksumMd5}
                </ChecksumElement>
                <ChecksumElement>
                  <ChecksumTitle>SHA1:</ChecksumTitle>
                  {fileData.fileChecksumSha1}
                </ChecksumElement>
              </Checksum>
              <Actions>
                {canDownloadFile && <FileDownload linkData={linkData} fileData={fileData} />}
                {R.not(canDownloadFile) && <FileInputPassword onPasswordInput={onPasswordInput} />}
              </Actions>
            </Inner>
          </FileStyle>
        </Container>
      </main>
    );
  }

  return null;
};

const FileLoading: React.FC = () => (
  <main>
    <Container>
      <Loading />
    </Container>
  </main>
);

export { FileLoading };
export default File;
