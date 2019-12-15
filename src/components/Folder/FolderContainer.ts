import React from 'react';
import * as R from 'ramda';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { FolderFullInfo } from 'types';

import FolderView, { FolderLoading } from './FolderView';
import { getFolderFullInfo, getPublicFolderId } from './FolderApiCalls';

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
    const matchFolderId = match.params.id;

    if (R.or(R.equals(prevProps, undefined), loading)) {
      return;
    }

    const presentFolder = folderInfo?.folder;
    const matchIsPresentFolder = R.or(
      R.equals(matchFolderId, presentFolder?.id),
      R.equals(matchFolderId, presentFolder?.permalink),
    );

    if (R.not(matchIsPresentFolder)) {
      this.getFolderData();
    }
  }

  async getFolderData(): Promise<void> {
    this.setState(({ loading: true }));

    const { match, history } = this.props;
    const matchFolderId = match.params.id;
    const publicFolderId: string = await getPublicFolderId();
    const matchFolderIsPublic = R.equals(matchFolderId, 'public');
    const folderId = matchFolderIsPublic ? publicFolderId : matchFolderId;

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
    return R.or(loading, !folderInfo) ? FolderLoading({}) : FolderView({ folderInfo });
  };
}

export default withRouter(Folder);
