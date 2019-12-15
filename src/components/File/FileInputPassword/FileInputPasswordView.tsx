import React from 'react';
import * as R from 'ramda';

import {
  Container, Input, Button, ArrowIcon, ErrorIcon,
} from './FileInputPasswordStyle';

interface FileInputPasswordProps {
  onPasswordInput: Function;
}

const FileInputPassword: React.FC<FileInputPasswordProps> = (props: FileInputPasswordProps) => {
  const { onPasswordInput } = props;
  const passwordPlaceholder = R.join('', R.repeat('●', 6));

  const [error, setError] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const onButtonClick = (): void => {
    setError(onPasswordInput(password));
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
      <Button error={error} onClick={(): void => onButtonClick()}>
        {error ? <ErrorIcon /> : <ArrowIcon />}
      </Button>
    </Container>
  );
};

export default FileInputPassword;
