import React, { Component } from 'react';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <button onClick={this.handleLogoutClick}>로그아웃</button>
            <span>환영합니다!</span>
          </div>
        ) : (
          <div>
            <button onClick={this.handleLoginClick}>로그인</button>
            <span>로그인 해주세요!</span>
          </div>
        )}
      </div>
    );
  }
}

export default LoginControl;
