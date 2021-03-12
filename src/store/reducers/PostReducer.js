//reducer  => func that returns an object

const initialState = {
  posts: []
}

const PostReducer = (state = initialState, action) => {
  switch(action.type){

    case 'DELETE_POST': 
      const newPosts = state.posts.filter( post => post.id !== action.id);
      return {
        posts: newPosts
      }

    case 'ADD_POST' : 
      return {
        posts: [ action.post , ...state.posts]
      }
      
    default :
      return state;
  }
  // return state;
}

export default PostReducer;