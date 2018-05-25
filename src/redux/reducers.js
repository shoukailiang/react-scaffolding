//合并所有reducer 并返回
import { combineReducers } from 'redux';
import * as ActionTypes from "./actionTypes";
const initState = {
  num: 0,
};
export function counter(state = initState, action) {
  switch (action.type) {
    case ActionTypes.ADD:
      return { num: state.num+1 };
    case ActionTypes.REMOVE:
      return { num: state.num-1 };
    default:
      return {num:0};
  }
}
export default combineReducers({ counter });