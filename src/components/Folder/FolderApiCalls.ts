import api from 'api';
import {File, Folder, FolderFullInfo, FolderPathElement} from 'types';

const getFolderBasicInfo = (id: string): Promise<Folder> => fetch(
  api.v1.folders.get(id),
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<Folder>;
});

const getFolderPath = (id: string): Promise<FolderPathElement[]> => fetch(
  api.v1.folders.path.get(id),
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<FolderPathElement[]>;
});

const getFolderChildren = (id: string): Promise<Folder[]> => fetch(
  api.v1.folders.children.get(id),
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<Folder[]>;
});

const getFolderFiles = (id: string): Promise<File[]> => fetch(
  api.v1.folders.files.get(id),
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<File[]>;
});

type PromisesType = [
  Promise<Folder>,
  Promise<FolderPathElement[]>,
  Promise<Folder[]>,
  Promise<File[]>
];

type PromisesResultsType = [
  Folder, FolderPathElement[], Folder[], File[]
];

type Unpromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

export const getFolderFullInfo = (id: string): Promise<FolderFullInfo> => {
  const promises: PromisesType = [
    getFolderBasicInfo(id),
    getFolderPath(id),
    getFolderChildren(id),
    getFolderFiles(id),
  ];

  return Promise.all(promises)
    .then((response: PromisesResultsType) => {
      const folderInfo: FolderFullInfo = {
        folder: response[0],
        path: response[1],
        children: response[2],
        files: response[3],
      };

      return folderInfo as unknown as Promise<FolderFullInfo>;
    });
};
