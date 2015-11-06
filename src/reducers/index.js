import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import { hover } from './hover'
import { todos, visibilityFilter } from './todo'
import { postsByReddit, selectedReddit } from './reddit'
import { expenses } from './expenses'

const rootReducer = combineReducers({
  hover,
  todos,
  visibilityFilter,
  postsByReddit,
  selectedReddit,
  expenses,
  router: routerStateReducer
});

export default rootReducer;