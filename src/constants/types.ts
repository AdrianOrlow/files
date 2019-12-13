import { RouteProps } from 'react-router-dom';

export interface ColorsType {
  White: string;
  Black: string;
  Fog: string;
  LightBlue: string;
  Blue: string;
  GrayishBlue: string;
}

export interface BreakpointsType {
  Mobile: string;
  Desktop: string;
}

export interface RouteType extends RouteProps {
  data: RouteDataType;
  path: string;
}

export enum RouteTitle {
  Home,
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
