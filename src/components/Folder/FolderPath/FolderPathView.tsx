import React from 'react';
import * as R from 'ramda';
import { FolderPathElement } from 'types';

import {
  Container, Navigation, Link, Arrow,
} from './FolderPathStyle';

interface FolderPathProps {
  data: FolderPathElement[];
}

const FolderPath: React.FC<FolderPathProps> = (props: FolderPathProps) => {
  const { data } = props;

  const folderLinkWithArrow = (pathElement: FolderPathElement): React.ReactElement => (
    <span key={pathElement.id}>
      <Link
        to={`/folder/${pathElement.id}`}
      >
        {pathElement.title}
      </Link>
      <Arrow />
    </span>
  );
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
