import React, { Component } from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const AppIntro = styled.p`
  font-size: large;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const spin =  keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo = styled.img `
  animation: ${spin} infinite 20s linear;
  height: 80px;
`;

const AppContainer = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </Header>
        <AppIntro>
          To get _started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppContainer>
    );
  }
}

export default App;
