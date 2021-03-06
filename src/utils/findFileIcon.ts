import { StyledIcon } from 'styled-icons/types';
import {
  File,
  FileAlt,
  FileArchive,
  FileAudio,
  FileCode,
  FileExcel,
  FileImage,
  FilePdf,
  FilePowerpoint,
  FileVideo,
  FileWord,
} from 'styled-icons/fa-solid';
import * as mime from 'mime-types';
import * as R from 'ramda';

interface IconMimeTypes {
  icon: StyledIcon;
  types: string[] | false[];
}

const iconsMimeTypes: IconMimeTypes[] = [
  {
    icon: FileImage,
    types: [
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/gif',
      'image/tiff',
    ],
  },
  {
    icon: FileWord,
    types: [
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.oasis.opendocument.text',
    ],
  },
  {
    icon: FilePowerpoint,
    types: [
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ],
  },
  {
    icon: FileVideo,
    types: [
      'video/mpeg',
      'video/mp4',
      'video/quicktime',
      'video/x-ms-wmv',
    ],
  },
  {
    icon: FilePdf,
    types: [
      'application/pdf',
    ],
  },
  {
    icon: FileExcel,
    types: [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
  },
  {
    icon: FileAudio,
    types: [
      'audio/mpeg',
      'audio/ogg',
    ],
  },
  {
    icon: FileArchive,
    types: [
      'application/zip',
    ],
  },
  {
    icon: FileAlt,
    types: [
      'application/json',
      'application/xml',
      'text/csv',
      'text/xml',
      'text/plain',
    ],
  },
  {
    icon: FileCode,
    types: [
      'application/javascript',
      'text/css',
      'text/html',
    ],
  },
];

const findFileIcon = (fileName: string): StyledIcon => {
  const mimeType = mime.lookup(fileName);
  const hasMimeType = R.includes(mimeType);
  const foundMimeType = R.find<IconMimeTypes>(
    (icon: IconMimeTypes) => hasMimeType(icon.types),
  )(iconsMimeTypes);
  return foundMimeType ? foundMimeType.icon : File;
};

export default findFileIcon;
