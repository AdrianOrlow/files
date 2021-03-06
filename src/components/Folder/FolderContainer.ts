import React from 'react';
import * as R from 'ramda';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { FolderFullInfo } from 'types';
import { getPath } from 'utils/index';
import { RouteTitle } from 'constants/index';

import FolderView, { FolderLoading } from './FolderView';
import { getFolderFullInfo, getPublicFolderId } from './FolderApiCalls';

interface FolderRouteParams {
  id: string;
}

type FolderProps = RouteComponentProps<FolderRouteParams>;

interface FolderState {
  loading: boolean;
  folderData: FolderFullInfo | null;
}

class Folder extends React.Component<FolderProps, FolderState> {
  constructor(props: FolderProps) {
    super(props);

    this.state = {
      loading: true,
      folderData: null,
    };

    this.getFolderData = this.getFolderData.bind(this);
  }

  componentDidMount(): void {
    this.getFolderData();
  }

  componentDidUpdate(prevProps: FolderProps): void {
    const { folderData, loading } = this.state;
    const { match } = this.props;
    const matchFolderId = match.params.id;

    if (R.or(R.equals(prevProps, undefined), loading)) {
      return;
    }

    const presentFolder = folderData?.folder;
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
    const matchFolderIsPublic = R.equals(matchFolderId, 'public');
    const folderId = matchFolderIsPublic ? await getPublicFolderId() : matchFolderId;

    await getFolderFullInfo(folderId)
      .then((folderInfo: FolderFullInfo) => {
        this.setState(({ folderData: folderInfo }));
        const { folder } = folderInfo;
        const path = getPath({
          id: folder.id,
          permalink: folder.permalink,
        }, RouteTitle.Folder);
        window.history.replaceState(
          {},
          `Files – ${folder.title}`,
          path,
        );
      })
      .catch((error) => {
        console.error(error);
        history.push('/404');
      });

    this.setState(({ loading: false }));
  }

  render = (): React.ReactElement | null => {
    const { loading, folderData } = this.state;
    return R.or(loading, R.not(folderData))
      ? FolderLoading({})
      : FolderView({ folderData });
  };
}

export default withRouter(Folder);
