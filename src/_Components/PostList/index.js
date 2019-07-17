import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchPostsAction } from './../../_Redux/actions'; 

class  PostList extends Component {

  componentDidMount() {
    this.props.fetchPostsAction();
  }

  displayPosts = posts => posts.map( ( post, index ) => {
        return(
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr/>
          </div>
        );
  });
  

  render() {

    const { posts } = this.props;
    
    return (
      <div>
        <h1>Post List</h1>
        {this.displayPosts(posts)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts
  }
 
}
export default connect(mapStateToProps, { fetchPostsAction })(PostList);