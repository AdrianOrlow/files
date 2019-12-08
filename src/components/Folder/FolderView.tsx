import React from 'react';

import FolderPath from './FolderPath';
import FolderLink from './FolderLink';
import {
  Container, Section, SectionTitle, SectionListHorizontal
} from './FolderStyle';

const Folder: React.FC = () => {
  const pathData = JSON.parse('[ { "index": 0, "id": "7da0FAvE", "title": "dfsfdsaghhh", "isPublic": true }, { "index": 1, "id": "GdRDh2Ze", "title": "sadasdasd", "isPublic": true }, { "index": 3, "id": "8vJ2Tbvk", "title": "Files", "isPublic": true } ]');
  const folderData = JSON.parse('{ "id": "7da0FAvE", "createdAt": "2019-12-07T00:00:00Z", "updatedAt": "2019-12-07T00:00:00Z", "deletedAt": null, "title": "dfsfdsaghhh", "permalink": "hhhhhh", "isPublic": true, "parentId": "GdRDh2Ze" }');

  return (
    <main>
      <Container>
        <Section>
          <FolderPath path={pathData} />
        </Section>
        <Section>
          <SectionTitle>Folders</SectionTitle>
          <SectionListHorizontal>
            <FolderLink folderData={folderData} />
            <FolderLink folderData={folderData} />
            <FolderLink folderData={folderData} />
          </SectionListHorizontal>
        </Section>
        <Section>
          <SectionTitle>Files</SectionTitle>
        </Section>
      </Container>
    </main>
  );
}

export default Folder;
