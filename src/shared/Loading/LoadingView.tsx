import React from 'react';
import { Colors } from 'constants/index';

import { Container, Spinner as SpinnerIcon } from './LoadingStyle';

interface Props {
  thickness?: number;
  gap?: number;
  color?: string;
}

const Loading: React.FC<Props> = (props: Props) => {
  const { thickness = 4, gap = 4, color = Colors.GrayishBlue } = props;

  return (
    <Container>
      <Spinner thickness={thickness} gap={gap} color={color} />
    </Container>
  );
};

const Spinner: React.FC<Props> = (props: Props) => {
  const { thickness = 4, gap = 4, color = Colors.GrayishBlue } = props;

  return (
    <SpinnerIcon
      role="img"
      viewBox="0 0 32 32"
    >
      <circle
        role="presentation"
        cx={16}
        cy={16}
        r={14 - (thickness / 2)}
        stroke={color}
        fill="none"
        strokeWidth={thickness}
        strokeDasharray={Math.PI * 2 * (11 - gap)}
        strokeLinecap="round"
      />
    </SpinnerIcon>
  );
};

export { Spinner };
export default Loading;
