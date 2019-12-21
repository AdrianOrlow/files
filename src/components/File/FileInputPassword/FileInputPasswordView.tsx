import React from 'react';
import * as R from 'ramda';
import { Colors } from 'constants/index';

import {
  Container, Input, Button, ArrowIcon, ErrorIcon, LoadingIcon,
} from './FileInputPasswordStyle';

interface FileInputPasswordProps {
  onPasswordInput: Function;
}

const FileInputPassword: React.FC<FileInputPasswordProps> = (props: FileInputPasswordProps) => {
  const { onPasswordInput } = props;
  const passwordPlaceholder = R.join('', R.repeat('●', 6));

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const onButtonClick = async (): Promise<void> => {
    setLoading(true);
    const result = await onPasswordInput(password);
    setError(R.not(result));
    setLoading(false);
    setTimeout(() => setError(false), 1000);
  };

  return (
    <Container>
      <Input
        type="password"
        placeholder={passwordPlaceholder}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        disabled={R.or(error, loading)}
        error={error}
        onClick={(): Promise<void> => onButtonClick()}
      >
        {R.not(loading) && (error ? <ErrorIcon /> : <ArrowIcon />)}
        {loading && <LoadingIcon color={Colors.Fog} />}
      </Button>
    </Container>
  );
};

export default FileInputPassword;
