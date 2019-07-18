import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchPostsAndUsers } from './../../_Redux/actions'; 

import UserHeader from '../UserHeader';

class  PostList extends Component {

  componentDidMount() {
    // this.props.fetchPostsAction();
    this.props.fetchPostsAndUsers();
  }

  displayPosts = posts => posts.map( ( post ) => {
        return(
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p> <i className='large middle aligned icon user'></i>{post.body}</p>
            <UserHeader userId={post.userId}/>
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
  return {
    posts: state.posts,
  }
 
}
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);