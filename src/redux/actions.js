import * as ActionTypes from './actionTypes';
export function add() {
  return { type: ActionTypes.ADD };
}
export function remove() {
  return { type: ActionTypes.REMOVE };
}
export function addAsync() {
  return dispatch=>{
    setTimeout(()=>{
      dispatch((add()));
    },2000);
  };
}