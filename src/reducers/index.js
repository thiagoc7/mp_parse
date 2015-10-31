import { combineReducers } from 'redux';

import { hover } from './hover'
import { todos, visibilityFilter } from './todo'
import { postsByReddit, selectedReddit } from './reddit'

const rootReducer = combineReducers({
  hover,
  todos,
  visibilityFilter,
  postsByReddit,
  selectedReddit
});

export default rootReducer;