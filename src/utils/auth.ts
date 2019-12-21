import { Api } from 'constants/index';

export const userLoggedIn = (
  localStorage.getItem(Api.LocalStorageTokenName) !== null
);

export const setUserToken = (token: string): void => (
  localStorage.setItem(Api.LocalStorageTokenName, token)
);

export const removeUserToken = (): void => (
  localStorage.removeItem(Api.LocalStorageTokenName)
);
