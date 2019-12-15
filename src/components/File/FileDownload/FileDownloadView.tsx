import React from 'react';

import { Button } from './FileDownloadStyle';

interface FileDownloadProps {
  onDownloadButtonClick: Function;
}

const FileDownload: React.FC<FileDownloadProps> = (props: FileDownloadProps) => {
  const { onDownloadButtonClick } = props;

  return <Button onClick={(): void => onDownloadButtonClick()}>DOWNLOAD</Button>;
};

export default FileDownload;
