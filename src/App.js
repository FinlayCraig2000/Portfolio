// import logo from './logo.svg';
// import { Switch, Route, useLocation, Redirect, useParams } from 'react-router';

import React from 'react';
import CubeContainer from './components/cube/Cube-Container.js';
import HeaderContainer from './components/header/Header-Container.js';

import { WindowResize } from './helpers/WindowResize.js';

import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <WindowResize />

        <HeaderContainer />

        <CubeContainer />
      </div>
    );
  }
}