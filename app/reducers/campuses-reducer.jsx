const initialState = {
  selected: {},
  list: []
}

export default function(state = initialState, action) {
  
  const newState = Object.assign({}, state);

  switch(action.type) {

    case 'RECIEVE_CAMPUSES':
      newState.list = action.campuses;
      break;

    default: return state
  
  }

  return newState;
  
};