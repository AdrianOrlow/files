import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Api from 'api/config';
import { Api as ApiConstants, RouteTitle } from 'constants/index';
import { userLoggedIn, setUserToken, getPath } from 'utils/index';

import LoginView from './LoginView';

class Login extends React.Component<RouteComponentProps> {
  private popup: Window | null;

  constructor(props: RouteComponentProps) {
    super(props);

    this.popup = null;
  }

  componentDidMount(): void {
    const { history } = this.props;
    if (userLoggedIn) {
      history.push(getPath({}, RouteTitle.Home));
      return;
    }

    this.startAuth();
    window.addEventListener('message', this.receiveMessage);
  }

  receiveMessage = (event: MessageEvent): void => {
    const { popup } = this;
    if (event.data.source !== 'api') {
      return;
    }

    setUserToken(event.data.token);
    popup?.close();
    window.location.assign('/');
  };

  startAuth = (): void => {
    this.popup = this.openPopup();
    this.checkPopup();
  };

  checkPopup = (): void => {
    const { popup } = this;
    const check = setInterval(() => {
      if (popup != null) {
        popup.postMessage('Token', ApiConstants.Url);
      } else {
        clearInterval(check);
      }
    }, 1000);
  };

  openPopup = (): Window | null => {
    const googleLoginUrl = Api.v1.auth.google.login();

    return window.open(
      googleLoginUrl,
      '_blank',
      'toolbar=no, location=no, directories=no, status=no, menubar=no',
    );
  };

  render = (): React.ReactElement | null => LoginView({});
}

export default withRouter(Login);
