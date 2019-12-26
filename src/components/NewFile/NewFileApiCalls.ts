import * as R from 'ramda';
import api from 'api/config';
import { File } from 'types';
import { FormValues } from './NewFileTypes';

export async function createFile(fileData: FormValues, token: string): Promise<File> {
  const formData = new FormData();
  const { file } = fileData;
  const fileExists = R.not(R.isNil(file));

  if (fileExists) {
    const isNotFile = (_: string, key: string): boolean => key !== 'file';
    const data = R.pickBy(isNotFile, fileData);

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    formData.append('file', file);
    formData.append('data', JSON.stringify(data));

    return fetch(
      api.v1.files.post(),
      {
        headers: {
          Authorization: token,
        },
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json() as Promise<File>;
    });
  }
  throw new Error('File not exists');
}
