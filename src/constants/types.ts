import { RouteProps } from 'react-router-dom';

export interface ColorsType {
  White: string;
  Black: string;
  Red: string;
  Green: string;
  Fog: string;
  LightBlue: string;
  Blue: string;
  GrayishBlue: string;
}

export interface BreakpointsType {
  VerySmallMobile: string;
  SmallMobile: string;
  Mobile: string;
  Desktop: string;
}

export interface RouteType extends RouteProps {
  data: RouteDataType;
  path: string;
}

export enum RouteTitle {
  Home,
  Login,
  NewFile,
  NewFolder,
  EditFile,
  EditFolder,
  Folder,
  File,
  Error404,
}

export interface RouteDataType {
  title: RouteTitle;
}

interface RouteTypes {
  [index: number]: RouteType;
}

export interface ApiType {
  Url: string;
  LocalStorageTokenName: string;
}
