import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/Home'
import Todos from './components/todos/Todos'
import Hover from './components/hover/Hover'
import Reddit from './components/reddit/Reddit'
import Expenses from './pages/Expenses'

const routes = (
    <Route path='/' component={Home}>
      <IndexRoute component={Expenses} />
      <Route path="todos" component={Todos} />
      <Route path="hover" component={Hover} />
      <Route path="reddit" component={Reddit} />
    </Route>
);

export default routes
