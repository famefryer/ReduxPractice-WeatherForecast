import {FETCH_WEATHER} from '.././actions/index'

export default function(state=[],action){
  switch (action.type) {
    case FETCH_WEATHER :
      //Try to not change state directly,Use new instance
      // return state.concat([action.payload.data]);
      if(!action.payload.data){
        alert("Not found")
        return state;
      }
      return [action.payload.data , ...state]; //ES6 version
    default:

  }
  return state;
}
