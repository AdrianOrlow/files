import api from 'api/config';
import { File } from 'types';
import { FormValues } from './EditFileTypes';

export const getFile = (id: string): Promise<File> => fetch(
  api.v1.files.get(id),
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<File>;
});

export const updateFile = (id: string, data: FormValues, token: string): Promise<File> => fetch(
  api.v1.files.put(id),
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

  return response.json() as Promise<File>;
});
