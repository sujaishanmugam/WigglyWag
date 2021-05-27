export const initialState = {
    user: null,
    apps: null,
    auth: null
  };


  
  export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_APPS: 'SET_APPS',
    SET_AUTH: 'SET_AUTH'
  };
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case actionTypes.SET_USER:
        return {
          ...state,
          user: action.user,
        };
        case actionTypes.SET_APPS:
          return {
            ...state,
            user: action.apps,
          };
        case actionTypes.SET_AUTH:
          return {
            ...state,
            auth: action.user,
          }
      default:
        return state;
    }
  };
  
  export default reducer;