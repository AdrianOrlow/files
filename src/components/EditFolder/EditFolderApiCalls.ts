import api from 'api/config';
import { Folder } from 'types';
import { FormValues } from './EditFolderTypes';

export const getFolder = (id: string): Promise<Folder> => fetch(
  api.v1.folders.get(id),
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<Folder>;
});

export const updateFolder = (id: string, data: FormValues, token: string): Promise<Folder> => fetch(
  api.v1.folders.put(id),
  {
    headers: {
      Authorization: token,
    },
    method: 'PUT',
    body: JSON.stringify(data),
  },
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<Folder>;
});
