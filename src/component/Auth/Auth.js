import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import{updateUser} from './../../ducks/reducer'


class Auth extends Component {
   constructor(props) {
    super(props)
    
    this.state = {
      username: '',
      password: '',
      profile_pic: ''
    }
    this.register = this.register.bind(this);
  }
  //<input placeholder="img url" value={profile_pic} onChange={e => this.handleChange('profile_pic', e.target.value)} />

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    })
  }

  async register() {
    let user = {
      username: this.state.username,
      password: this.state.password,
      profile_pic: this.state.profile_pic
    }
    try {
      let res = await axios.post('/auth/register', user)
      this.props.updateUser(res.data)
      this.props.history.push('/dashboard')
      console.log(user)
    } catch (err) {
      alert('error signing up')
      console.log(err)
    }
  }

  login = async (req, res) => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try {
      let res = await axios.post('/auth/login', user);
      this.props.updateUser(res.data)
      this.props.history.push('/dashboard')
      console.log(user)
    } catch (err) {
      alert('Incorrect username or password')
      console.log(err)
    }
  }

  render() {
    const { username, password, profile_pic } = this.state;
    return (
      <div>
        <h1>Auth</h1>
        <input placeholder='username' value={username} onChange={e => this.handleChange('username', e.target.value)} />
        <input placeholder='password'type='password' value={password} onChange={e => this.handleChange('password', e.target.value)} />
        
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    username: reduxState.username,
    profile_pic: reduxState.profile_pic
  }
}
const mapDispatchToProps = {
  updateUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
