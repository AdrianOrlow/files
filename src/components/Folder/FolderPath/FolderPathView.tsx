import React from 'react';
import * as R from 'ramda';
import { FolderPathElement } from 'types';
import { RouteTitle } from 'constants/index';
import { getPath } from 'utils/index';

import {
  Container, Navigation, Link, Arrow, PathElement,
} from './FolderPathStyle';

interface FolderPathProps {
  data: FolderPathElement[];
}

const FolderPath: React.FC<FolderPathProps> = (props: FolderPathProps) => {
  const { data } = props;

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

  return (
    <Container>
      <Navigation>
        {folderPath}
      </Navigation>
    </Container>
  );
};

export default FolderPath;
