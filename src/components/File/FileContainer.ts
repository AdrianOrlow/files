import React from 'react';
import * as R from 'ramda';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { File as FileType, Link as LinkType } from 'types';
import FileView, { FileLoading } from './FileView';
import { getFile, createFileLink } from './FileApiCalls';

interface FileRouteParams {
  id: string;
}

type FileProps = RouteComponentProps<FileRouteParams>;

interface FileState {
  loading: boolean;
  fileData: FileType | null;
  linkData: LinkType | null;
}

class File extends React.Component<FileProps, FileState> {
  constructor(props: FileProps) {
    super(props);

    this.state = {
      loading: false,
      linkData: null,
      fileData: null,
    };

    this.getFileData = this.getFileData.bind(this);
    this.onPasswordInput = this.onPasswordInput.bind(this);
    this.getFileLinkData = this.getFileLinkData.bind(this);
  }

  componentDidMount(): void {
    this.getFileData();
  }

  async getFileData(): Promise<void> {
    this.setState(({ loading: true }));

    const { match, history } = this.props;
    const fileId = match.params.id;

    await getFile(fileId)
      .then((fileData: FileType) => (
        this.setState(({ fileData }))
      ))
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

  render = () => {
    const { loading, linkData, fileData } = this.state;

    return R.or(loading, R.and(R.not(fileData), R.not(linkData)))
      ? FileLoading({})
      : FileView({
        linkData,
        fileData,
        onPasswordInput: this.onPasswordInput,
      });
  };
}

export default withRouter(File);
