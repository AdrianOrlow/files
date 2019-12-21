import { File, Link } from 'types';
import api from 'api/config';

export const getFile = (id: string): Promise<File> => fetch(
  api.v1.files.get(id),
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<File>;
});

export const createFileLink = (id: string, password: string): Promise<Link> => fetch(
  api.v1.files.link(id),
  {
    headers: {
      Authorization: `Basic ${btoa(password)}`,
    },
    method: 'POST',
  },
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<Link>;
});
