import React from 'react';
import * as R from 'ramda';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { File as FileType, Link as LinkType } from 'types';
import { RouteTitle } from 'constants/index';
import { getPath, getUserToken } from 'utils/index';

import FileView, { FileLoading } from './FileView';
import { createFileLink, getFile, deleteFile } from './FileApiCalls';

interface FileRouteParams {
  id: string;
}

type FileProps = RouteComponentProps<FileRouteParams>;

interface FileState {
  loading: boolean;
  deleteConfirmed: boolean;
  fileData: FileType | null;
  linkData: LinkType | null;
}

class File extends React.Component<FileProps, FileState> {
  constructor(props: FileProps) {
    super(props);

    this.state = {
      loading: false,
      deleteConfirmed: false,
      linkData: null,
      fileData: null,
    };

    this.getFileData = this.getFileData.bind(this);
    this.onPasswordInput = this.onPasswordInput.bind(this);
    this.getFileLinkData = this.getFileLinkData.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
  }

  componentDidMount(): void {
    this.getFileData();
  }

  async getFileData(): Promise<void> {
    this.setState(({ loading: true }));

    const { match, history } = this.props;
    const fileId = match.params.id;

    await getFile(fileId)
      .then((fileData: FileType) => {
        this.setState(({ fileData }));
        const path = getPath({
          id: fileData.id,
          permalink: fileData.permalink,
        }, RouteTitle.File);
        window.history.replaceState(
          {},
          `Files – ${fileData.title}`,
          path,
        );
      })
      .catch((error) => {
        console.error(error);
        history.push('/404');
      });

    this.setState(({ loading: false }));
  }

  onPasswordInput = async (password: string): Promise<boolean> => {
    const { fileData } = this.state;

    if (fileData) {
      const linkData = await this.getFileLinkData(fileData.id, password);
      this.setState(({ linkData }));
      return linkData != null;
    }
    return false;
  };

  getFileLinkData = async (fileId: string, password: string): Promise<LinkType | null> => {
    const linkData = await createFileLink(fileId, password)
      .catch((error) => (
        console.error(error)
      ));

    return linkData || null;
  };

  onDeleteButtonClick = async (): Promise<void> => {
    const { fileData, deleteConfirmed } = this.state;
    const { history } = this.props;

    if (deleteConfirmed) {
      const token = getUserToken();

      if (token && fileData) {
        this.setState(({ loading: true }));
        await deleteFile(fileData.id, token);
        const folderPath = getPath({ id: fileData.folderId }, RouteTitle.Folder);
        history.push(folderPath);
      }
    } else {
      this.setState(({ deleteConfirmed: true }));
      setTimeout(() => (this.setState(({ deleteConfirmed: false }))), 1000);
    }
  };

  render = (): React.ReactElement | null => {
    const {
      loading, linkData, fileData, deleteConfirmed,
    } = this.state;

    return R.or(loading, R.and(R.not(fileData), R.not(linkData)))
      ? FileLoading({})
      : FileView({
        linkData,
        fileData,
        deleteConfirmed,
        onPasswordInput: this.onPasswordInput,
        onDeleteButtonClick: this.onDeleteButtonClick,
      });
  };
}

export default withRouter(File);
