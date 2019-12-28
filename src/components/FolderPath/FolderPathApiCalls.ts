import api from 'api/config';

export const deleteFolder = (id: string, token: string): Promise<void> => fetch(
  api.v1.folders.delete(id),
  {
    headers: {
      Authorization: token,
    },
    method: 'DELETE',
  },
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
});
