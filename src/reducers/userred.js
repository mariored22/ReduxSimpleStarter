import { userlist, showdetails } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case 'USER':
    return [...state, ...action.payload.data]

    case 'SHOWDETAILS':
      return {...state, [action.payload.data[0].id]: action.payload.data[0] }
  }
  return state;
}