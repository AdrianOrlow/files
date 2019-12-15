import React from 'react';
import * as R from 'ramda';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { File as FileType } from 'types';
import FileView, { FileLoading } from './FileView';

interface FileRouteParams {
  id: string;
}

type FileProps = RouteComponentProps<FileRouteParams>;

interface FileState {
  loading: boolean;
  password: string;
  passwordCorrect: boolean;
  fileData: FileType | null;
}

class File extends React.Component<FileProps, FileState> {
  constructor(props: FileProps) {
    super(props);

    this.state = {
      loading: false,
      password: '',
      passwordCorrect: false,
      fileData: null,
    };
  }

  componentDidMount(): void {
    const fileData = JSON.parse('{ "id": "XN8aSgZ1", "createdAt": "2019-12-15T17:56:56Z", "updatedAt": "2019-12-15T17:56:56Z", "deletedAt": null, "title": "Plik", "description": "Opis", "hasPassword": true, "permalink": "dsffsd", "fileName": "sdsdsdf-1576432616.png", "fileSizeKB": "12", "fileChecksumMd5": "28763df474b75e2e186c61e08b7a0297", "fileChecksumSha1": "30e8063697596cfed32924c8dba7b4ab20d03ec9", "folderId": "GdRDh2Ze" }');
    this.setState(({ fileData }));
  }

  onDownloadButtonClick = () => {
    console.log('ssdfsdf')
  }

  onPasswordInput = (password: string): boolean => {
    return !(password === 'aaa');
  };

  render = () => {
    const { loading, passwordCorrect, fileData } = this.state;
    return R.or(loading, R.not(fileData))
      ? FileLoading({})
      : FileView({
        passwordCorrect,
        fileData,
        onPasswordInput: this.onPasswordInput,
        onDownloadButtonClick: this.onDownloadButtonClick,
      });
  };
}

export default withRouter(File);
