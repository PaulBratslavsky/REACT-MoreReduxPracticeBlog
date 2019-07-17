import JSONplaceholder from '../../_API/JSONplaceholder';

export const fetchPostsAction = () => async dispatch  => {
  const response = await JSONplaceholder.get('posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
}
