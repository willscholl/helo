import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      img: '',
      content: '',
      username: '',
      profile_pic: ''
    }
  }

  render() {
    const {title, img, content} = this.state
    return (
      <div>
        Post
        <p>Title: {title}</p>
        <img src={img}/>
        <p>Content: {content}</p>
      </div>
    )
  }
}

export default Post;