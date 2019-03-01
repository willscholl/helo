import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';

export default class Routes extends Component {
  render() {
    return <Switch>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/post/:postid' component={Post} />
      <Route path='/new' component={Form} />
      <Route exact path='/' exact component={Auth} />
    </Switch>
  }
}