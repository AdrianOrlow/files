type Model = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export interface Folder extends Model {
  title: string;
  permalink: string;
  isPublic: boolean;
  parentId: string;
}

export interface FolderPath {
  [index: number]: FolderPathElement;
}

export interface FolderPathElement {
  index: number;
  id: string;
  title: string;
  isPublic: boolean;
}

export interface File extends Model {
  title: string;
  description: string;
  hasPassword: boolean;
  permalink: string;
  fileName: string;
  fileSizeKB: string;
  fileChecksumMD5: string;
  fileChecksumSHA1: string;
  folderId: string;
}

export interface FolderFullInfo {
  folder: Folder;
  path: FolderPathElement[];
  children: Folder[];
  files: File[];
}
