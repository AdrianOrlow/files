import React from 'react';
import { Colors } from 'constants/index';

import { Container, Spinner } from './LoadingStyle';

interface LoadingProps {
  thickness?: number;
  gap?: number;
}

const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
  const { thickness = 4, gap = 4 } = props;

  return (
    <Container>
      <Spinner
        role="img"
        viewBox="0 0 32 32"
      >
        <circle
          role="presentation"
          cx={16}
          cy={16}
          r={14 - (thickness / 2)}
          stroke={Colors.GrayishBlue}
          fill="none"
          strokeWidth={thickness}
          strokeDasharray={Math.PI * 2 * (11 - gap)}
          strokeLinecap="round"
        />
      </Spinner>
    </Container>
  );
};

export default Loading;
