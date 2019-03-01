import React, { Component } from 'react';
import Post from '../Post/Post'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      checked: false,
      posts: []
    }
  }

  componentDidMount(search, checked) {
    axios.get(`/api/post/${search}`).then(res => {
      this.setState({
        posts: res.data
      });
      // THIS SIM SUCKED
    });
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    })
  }

  handleCheck =() => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    const mappedPosts = this.state.posts.map((post) => {
      return (
        <Post 
        key={post.author_id}
        title={post.title}
        img={post.img}
        content={post.content}
        />
      )
      })

    return (
      <div>
        Dashboard
        <input placeholder='Search posts' value='' onChange={e => this.handleChange('search', e.target.value)}/>
        <button >Search</button>
        <button >Reset</button>
        <h4>My Posts</h4>
        <input 
        type="checkbox"
        value={this.state.checked}
        onChange={this.handleCheck}
        />
        {mappedPosts}
      </div>
    )
  }
}

export default Dashboard