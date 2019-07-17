export default (state = [], action) => {

  console.log(action, 'from reducer')

  switch ( action.type ) {

    case 'FETCH_POSTS':
      return action.payload;

      default:
        return state;
  }
  
};