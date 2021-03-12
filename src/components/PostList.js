import React, { Component } from 'react'
import PostDetails from './PostDetails'
import {connect} from 'react-redux'

class PostList extends Component {

  render() {
    const { posts } = this.props;
    return (
      <div className="container">
        <div className="row">
          { 
            posts && 
            posts.map( post => 
              <PostDetails post={post} key={post.id} />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(PostList);