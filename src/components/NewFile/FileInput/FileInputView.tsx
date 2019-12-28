import React from 'react';
import * as R from 'ramda';
import { humanFileSize } from 'utils/index';

import {
  UploadLabel, UploadInput, FileContainer, FileDescription, FileInfoDivider,
  FileInfoName, FileInfoSize, FileCancel, FileCancelIcon,
} from './FileInputStyle';

import { Error, FileInputWrapper } from '../NewFileStyle';

interface Props {
  errors: string | undefined;
  file: File | null;
  onUpload(e: React.ChangeEvent<HTMLInputElement>): void;
  onCancel: Function;
}

const FileInput: React.FC<Props> = (props: Props) => {
  const {
    errors, file, onUpload, onCancel,
  } = props;

  return (
    <FileInputWrapper>
      <Upload file={file} onUpload={onUpload} />
      <FileInfo file={file} onCancel={onCancel} />
      {errors && (<Error>{errors}</Error>)}
    </FileInputWrapper>
  );
};

interface UploadProps {
  file: File | null;
  onUpload(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Upload: React.FC<UploadProps> = (props: UploadProps) => {
  const { onUpload, file } = props;
  const fileExists = R.and(R.not(R.isEmpty(file)), R.not(R.isNil(file)));

  return (
    <UploadLabel hidden={fileExists}>
      CLICK TO UPLOAD
      <UploadInput
        type="file"
        name="description"
        onChange={onUpload}
      />
    </UploadLabel>
  );
};

interface FileInfoProps {
  file: File | null;
  onCancel: Function;
}

const FileInfo: React.FC<FileInfoProps> = (props: FileInfoProps) => {
  const { file, onCancel } = props;

  if (file != null) {
    const fileSize = humanFileSize(file.size);

    return (
      <FileContainer>
        <FileDescription>
          <FileInfoName>{file.name}</FileInfoName>
          <FileInfoDivider />
          <FileInfoSize>{fileSize}</FileInfoSize>
        </FileDescription>
        <FileCancel onClick={(): void => onCancel()}>
          <FileCancelIcon />
        </FileCancel>
      </FileContainer>
    );
  }
  return null;
};

export default FileInput;
