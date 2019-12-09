import React from 'react';

import FolderPath from './FolderPath';
import FolderLink from './FolderLink';
import FileLink from './FileLink';
import {
  Container, Section, SectionTitle, SectionListHorizontal, SectionListVertical,
} from './FolderStyle';

const Folder: React.FC = () => {
  const pathData = JSON.parse('[ { "index": 0, "id": "7da0FAvE", "title": "dfsfdsaghhh", "isPublic": true }, { "index": 1, "id": "GdRDh2Ze", "title": "sadasdasd", "isPublic": true }, { "index": 3, "id": "8vJ2Tbvk", "title": "Files", "isPublic": true } ]');
  const folderData = JSON.parse('{ "id": "7da0FAvE", "createdAt": "2019-12-07T00:00:00Z", "updatedAt": "2019-12-07T00:00:00Z", "deletedAt": null, "title": "dfsfdsaghhh", "permalink": "hhhhhh", "isPublic": true, "parentId": "GdRDh2Ze" }');
  const fileData = JSON.parse('{ "id": "7dakh7ZE", "createdAt": "2019-12-09T15:56:05Z", "updatedAt": "2019-12-09T15:56:05Z", "deletedAt": null, "title": "Plik", "description": "Opis", "hasPassword": false, "permalink": "", "fileName": "-1575906965", "fileSizeKB": "145", "fileChecksumMd5": "5ec49e36d5084217992442c9d326d16e", "fileChecksumSha1": "1968b0418dec45c2df7edb0f0e683341a604a7c7", "folderId": "8vJ2Tbvk" }');

  return (
    <main>
      <Container>
        <Section>
          <FolderPath data={pathData} />
        </Section>
        <Section>
          <SectionTitle>Folders</SectionTitle>
          <SectionListHorizontal>
            <FolderLink data={folderData} />
            <FolderLink data={folderData} />
            <FolderLink data={folderData} />
          </SectionListHorizontal>
        </Section>
        <Section>
          <SectionTitle>Files</SectionTitle>
          <SectionListVertical>
            <FileLink data={fileData} />
            <FileLink data={fileData} />
            <FileLink data={fileData} />
          </SectionListVertical>
        </Section>
      </Container>
    </main>
  );
};

export default Folder;
