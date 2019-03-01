import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

function Nav(props) {
  if(props.location.pathname !== '/') {
    const { username, profile_pic } = props
    console.log(props)
    return (
      <div>
        <h1>Nav</h1>
        <Link to='/dashboard'><button>HOME</button></Link>
        <Link to='/post'><button>NEW POST</button></Link>
        <Link to='/'><button>LOGOUT</button></Link>
        <div>{username}</div>
        <img src={profile_pic}/>
      </div>
    );
  }
  return null
}

const mapStateToProps = (reduxState) => {
  return {
    username: reduxState.username,
    profile_pic: reduxState.profile_pic
  }
}

export default connect(mapStateToProps)(Nav)
