import React, { useState } from 'react';
import * as R from 'ramda';
import { Folder } from 'types';

import {
  Container, Inner, FolderIdInput, FolderTitle, FindButton, FindIcon, LoadingIcon, FolderTitleName,
} from './FolderFinderStyle';
import { getFolderBasicInfo } from './FolderFinderApiCalls';

interface Props {
  name: string;
  placeholder: string;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const FolderFinder: React.FC<Props> = (props: Props) => {
  const {
    value, onChange, name, placeholder,
  } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [folderData, setFolderData] = useState<Folder | null>(null);

  const findFolder = async (): Promise<void> => {
    setLoading(true);
    const newFolderData = await getFolderBasicInfo(value)
      .catch((error) => console.error(error));
    setLoading(false);

    if (newFolderData) {
      setFolderData(newFolderData);
    }
  };

  const onButtonClick = (): Promise<void> => (
    findFolder()
  );

  const onIdInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFolderData(null);
    onChange(event);
  };

  return (
    <Container>
      <Inner>
        <FolderIdInput
          type="text"
          name={name}
          placeholder={placeholder}
          required
          value={value}
          onChange={onIdInput}
        />
        {folderData && (
          <FolderTitle>
            <FolderTitleName>
              Found folder:
            </FolderTitleName>
            {folderData.title}
          </FolderTitle>
        )}
      </Inner>
      <FindButton
        type="button"
        onClick={onButtonClick}
      >
        {R.not(loading) && <FindIcon />}
        {loading && <LoadingIcon />}
      </FindButton>
    </Container>
  );
};

export default FolderFinder;
