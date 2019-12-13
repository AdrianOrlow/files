import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {
  Section,
  Container,
  Button,
  Title,
} from './NotFoundStyle';

const NotFound: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const { history } = props;

  return (
    <Section>
      <Container>
        <Title>404.</Title>
        <Button onClick={history.goBack}>Previous page</Button>
      </Container>
    </Section>
  );
}


export default withRouter(NotFound);
