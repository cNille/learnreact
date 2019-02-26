import * as types from './constants';

export function addTodo(name){
  console.log(name);
  return {
    type: types.ADD_TODO,
    item: {
      done: false,
      name
    }
  }
}
export function toggleItem(index){
  return {
    type: types.TOGGLE_ITEM,
    index,
  }
}
