import React from 'react';

import Api from 'api/config';
import { File as FileType, Link as LinkType } from 'types';
import { normalizeUri, toSnakeCase } from 'utils/index';

import {
  Container, DownloadButton, LinkButton, LinkIcon, LinkInfo,
} from './FileDownloadStyle';

interface FileDownloadProps {
  linkData: LinkType | null;
  fileData: FileType | null;
}

const FileDownload: React.FC<FileDownloadProps> = (props: FileDownloadProps) => {
  const { linkData, fileData } = props;
  const [copied, setCopied] = React.useState(false);

  const copyLinkToClipBoard = (fileLink: string): void => {
    setCopied(true);
    navigator.clipboard.writeText(fileLink);
    setTimeout((): void => setCopied(false), 300);
  };

  if (fileData) {
    const linkWithKey = Api.v1.files.download.withKey;
    const linkWithoutKey = Api.v1.files.download.withoutKey;
    const normalizedFileName = toSnakeCase(normalizeUri(fileData.fileName));
    const fileLink = fileData.hasPassword && linkData != null
      ? linkWithKey(fileData.id, linkData.key, normalizedFileName)
      : linkWithoutKey(fileData.id, normalizedFileName);

    return (
      <Container>
        <LinkButton
          copied={copied}
          onClick={(): void => copyLinkToClipBoard(`${fileLink}?preview`)}
        >
          <LinkIcon />
          <LinkInfo>COPY TO CLIPBOARD</LinkInfo>
        </LinkButton>
        <DownloadButton
          as="a"
          href={fileLink}
          download
          target="_blank"
        >
          DOWNLOAD
        </DownloadButton>
      </Container>
    );
  }
  return null;
};

export default FileDownload;
