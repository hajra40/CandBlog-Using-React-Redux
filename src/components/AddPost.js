import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from "uuid";

//form
class AddPost extends Component {

  state = {
    post: {
      id: '',
      title: '',
      content: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      post: {
        ...this.state.post,
        [e.target.name] : e.target.value
      }
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state.post);
    this.setState({
      post: {
        id: uuidv4(),
        title: '',
        content: '',
      }
    })
  }


  render() {
    return (
      <div className="container">
        <h5 className="blue-text center-align">CandBlog</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label className="post_title">Title</label>
            <input onChange={this.handleChange} value={this.state.post.title.value} type="text" name="title" />
          </div>

          <div className="input-field">
            <label className="post_content">Content</label>
            <textarea onChange={this.handleChange} value={this.state.post.content.value} name="content" className="materialize-textarea"></textarea>
          </div>

          <div className="input-field">
            <button className="btn blue">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    
    //createpost function
    createPost: (post) => {
      dispatch({
        type: 'ADD_POST',
        post
      })
    }
  }
}

export default connect(null , mapDispatchToProps)(AddPost);
