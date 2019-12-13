import { API_URL } from '../constants';

export default {
  v1: {
    auth: {
      google: {
        login: `${API_URL}v1/oauth/google/login`,
        callback: `${API_URL}v1/oauth/google/callback`,
      },
    },
    folders: {
      get(id: string): string {
        return `${API_URL}v1/folders/${id}`;
      },
      put(id: string): string {
        return `${API_URL}v1/folders/${id}`;
      },
      delete(id: string): string {
        return `${API_URL}v1/folders/${id}`;
      },
      getPublic: `${API_URL}v1/folders`,
      post: `${API_URL}v1/folders`,
      path: {
        get(id: string): string {
          return `${API_URL}v1/folders/${id}/path`;
        },
      },
      files: {
        get(id: string): string {
          return `${API_URL}v1/folders/${id}/files`;
        },
      },
      children: {
        get(id: string): string {
          return `${API_URL}v1/folders/${id}/folders`;
        },
      },
    },
    files: {
      get(id: string): string {
        return `${API_URL}v1/files/${id}`;
      },
      put(id: string): string {
        return `${API_URL}v1/files/${id}`;
      },
      delete(id: string): string {
        return `${API_URL}v1/files/${id}`;
      },
      post: `${API_URL}v1/files`,
    },
  },
};
