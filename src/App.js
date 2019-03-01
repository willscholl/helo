import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import Nav from './component/Nav/Nav';
import {withRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes/>
        <Nav location={this.props.location} />
      </div>
    );
  }
}

export default withRouter(App);
