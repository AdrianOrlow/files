import { Folder } from "../../types";
import api from "../../api";

const getFile = (id: string): Promise<Folder> => fetch(
  api.v1.folders.get(id),
).then((response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<Folder>;
});
