import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { FolderFullInfo } from 'types';

import FolderView, { FolderLoading } from './FolderView';
import { getFolderFullInfo } from './FolderApiCalls';

interface FolderRouteParams {
  id: string;
}

type FolderProps = RouteComponentProps<FolderRouteParams>;

interface FolderState {
  loading: boolean;
  folderInfo: FolderFullInfo | null;
}

class Folder extends React.Component<FolderProps, FolderState> {
  constructor(props: FolderProps) {
    super(props);

    this.state = {
      loading: true,
      folderInfo: null,
    };

    this.getFolderData = this.getFolderData.bind(this);
  }

  componentDidMount(): void {
    this.getFolderData();
  }

  componentDidUpdate(prevProps: FolderProps): void {
    const { folderInfo, loading } = this.state;
    const { match } = this.props;
    if (prevProps === undefined || loading) {
      return;
    }

    if (folderInfo && folderInfo.folder.id !== match.params.id) {
      this.getFolderData();
    }
  }

  async getFolderData(): Promise<void> {
    const { match, history } = this.props;
    const folderId = match.params.id;

    this.setState(({ loading: true }));

    await getFolderFullInfo(folderId)
      .then((folderInfo: FolderFullInfo) => (
        this.setState(({ folderInfo }))
      ))
      .catch((error) => {
        console.error(error);
        history.push('/404');
      });

    this.setState(({ loading: false }));
  }

  render = () => {
    const { loading, folderInfo } = this.state;
    return loading || !folderInfo ? FolderLoading({}) : FolderView({ folderInfo });
  };
}

export default withRouter(Folder);
