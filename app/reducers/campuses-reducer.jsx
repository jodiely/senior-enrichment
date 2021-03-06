import {convertCampuses} from '../utils';

const initialState = {
  selected: {},
  list: []
}

export default function(state = initialState, action) {
  
  const newState = Object.assign({}, state);

  switch(action.type) {

    case 'RECEIVE_CAMPUSES':
      newState.list = convertCampuses(action.campuses);
      
      break;

    default: return state
  
  }
  console.log('newState', newState)
  return newState;
  
};