type Model = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export interface Folder extends Model {
  title: string;
  permalink: string;
  parentId: string;
}

export interface FolderPath {
  [index: number]: FolderPathElement;
}

export interface FolderPathElement {
  index: number;
  id: string;
  title: string;
}

export interface File extends Model {
  title: string;
  description: string;
  hasPassword: boolean;
  permalink: string;
  fileName: string;
  fileSizeKB: string;
  fileChecksumMd5: string;
  fileChecksumSha1: string;
  folderId: string;
}

export interface FolderFullInfo {
  folder: Folder;
  path: FolderPathElement[];
  children: Folder[];
  files: File[];
}

export interface Link extends Model {
  key: string;
  fileId: string;
  validUntil: string;
}
