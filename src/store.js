import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import * as types from './constants';

const initialState = {
  items: [],
}

const TodoReducer = (state=initialState, action) => {
  switch(action.type){
    case types.ADD_TODO: {
      const { items } = state
      const { item } = action

      item.key = items.length
      items.push(item)
      return {
        ...state,
        items
      }
    }
    case types.TOGGLE_ITEM: {
      const idx = action.index;
      const { items } = state
      items[idx].done = !items[idx].done;
      return {
        ...state,
        items
      }
    }
    default:
      return state
  }
}

const store = createStore( TodoReducer )
export default store
