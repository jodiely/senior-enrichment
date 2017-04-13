const initialState = {
  selected: {},
  list: []
}

export default function(state = initialState, action) {
  
  const newState = Object.assign({}, state);

  switch(action.type) {

    case 'RECEIVE_STUDENTS':
      newState.list = action.students;
      
      break;

    default: return state
  
  }
  console.log('newState', newState)
  return newState;
  
};