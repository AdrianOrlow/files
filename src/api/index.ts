import { API_URL } from '../constants';

export default {
  v1: {
    auth: {
      google: {
        login(): string {
          return `${API_URL}v1/oauth/google/login`;
        },
        callback(): string {
          return `${API_URL}v1/oauth/google/callback`;
        },
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
      getPublic(): string {
        return `${API_URL}v1/folders/public`;
      },
      post(): string {
        return `${API_URL}v1/folders`;
      },
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
      post(): string {
        return `${API_URL}v1/files`;
      },
    },
  },
};
