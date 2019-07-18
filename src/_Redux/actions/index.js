import _ from 'lodash';
import JSONplaceholder from '../../_API/JSONplaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch( fetchPostsAction() );
  const userIds = _.uniq(_.map( getState().posts, 'userId' )) 

  userIds.forEach( id => dispatch( fetchUserAction(id) ) );
}

export const fetchPostsAction = () => async dispatch  => {
  const response = await JSONplaceholder.get('posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
}

export const fetchUserAction = userId => async dispatch => {
  const response = await JSONplaceholder.get(`users/${userId}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
}

/*
export const fetchUserAction = ( userId ) => ( dispatch ) => {
  _fetchUSer(userId, dispatch);
}

const _fetchUSer = _.memoize(async (userId, dispatch) => {
  const response = await JSONplaceholder.get(`users/${userId}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
});
*/