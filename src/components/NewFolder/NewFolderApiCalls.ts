import api from 'api/config';
import { Folder } from 'types';
import { FormValues } from './NewFolderTypes';

export const createFolder = (data: FormValues, token: string): Promise<Folder> => fetch(
  api.v1.folders.post(),
  {
    headers: {
      Authorization: token,
    },
    method: 'POST',
    body: JSON.stringify(data),
  },
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<Folder>;
});
