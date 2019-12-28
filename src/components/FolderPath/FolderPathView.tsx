import React, { useState } from 'react';
import * as R from 'ramda';
import { FolderPathElement } from 'types';
import { Link as RouterLink, withRouter, RouteComponentProps } from 'react-router-dom';

import { RouteTitle } from 'constants/index';
import { getPath, getUserToken, userLoggedIn } from 'utils/index';
import { deleteFolder } from './FolderPathApiCalls';

import {
  Container,
  Inner,
  Navigation,
  Link,
  Arrow,
  PathElement,
  Actions,
  EditButton,
  EditIcon,
  DeleteButton,
  DeleteIcon,
} from './FolderPathStyle';

interface FolderPathProps {
  data: FolderPathElement[];
}

type Props = FolderPathProps & RouteComponentProps;

const FolderPath: React.FC<Props> = (props: Props) => {
  const { data, history } = props;
  const [loading, setLoading] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const token = getUserToken();

  const folderLinkWithArrow = (pathElement: FolderPathElement): React.ReactElement => {
    const folderPath = getPath({ id: pathElement.id }, RouteTitle.Folder);

    return (
      <PathElement key={pathElement.id}>
        <Link to={folderPath}>
          {pathElement.title}
        </Link>
        <Arrow />
      </PathElement>
    );
  };
  const pathReversed = R.reverse(data);
  const folderPath = R.map(folderLinkWithArrow, pathReversed);
  const lastPathElement = R.last(pathReversed);
  const editLinkPath = getPath({ id: lastPathElement?.id }, RouteTitle.EditFolder);

  const onDeleteButtonClick = async (): Promise<void> => {
    if (deleteConfirmed) {
      if (token && lastPathElement) {
        setLoading(true);
        await deleteFolder(lastPathElement.id, token);
        const beforeLastPathElement = data[1];
        const path = getPath({ id: beforeLastPathElement.id }, RouteTitle.Folder);
        history.push(path);
      }
    } else {
      setDeleteConfirmed(true);
      setTimeout(() => (setDeleteConfirmed(false)), 1000);
    }
  };

  return (
    <Container>
      <Inner>
        <Navigation>
          {folderPath}
        </Navigation>
      </Inner>
      {userLoggedIn && (
        <Actions>
          <EditButton
            as={RouterLink}
            to={editLinkPath}
          >
            <EditIcon />
          </EditButton>
          <DeleteButton
            onClick={(): Promise<void> => (onDeleteButtonClick())}
            disabled={loading}
            confirmed={deleteConfirmed}
          >
            <DeleteIcon />
          </DeleteButton>
        </Actions>
      )}
    </Container>
  );
};

export default withRouter(FolderPath);
