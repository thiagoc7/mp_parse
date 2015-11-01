import React, { Component } from 'react';
import Parse from 'parse';

import './styles/normalize.css'
import './styles/skeleton.css'

Parse.initialize('hicvuvsjWekRiJGFdeK1GSUoTikmUDF85ilcopjt', 'cT8A4El4yQz3fEZ5V59MBrOanmv1jgmTo3K6xJFX')

import Navbar from './components/Navbar'

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//router
import { ReduxRouter } from 'redux-router';
import routes from './routes'

import configureStore from './store/configureStore'

const store = configureStore()


export class App extends Component {
  constructor(props){
    super(props);

    //const model = Parse.Object.extend("test");
    //let test = new model()
    //test.set('title', 'oie')
    //test.save()
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <Provider store={store}>
              <ReduxRouter>
                {routes}
              </ReduxRouter>
            </Provider>
          </div>
        </div>
    );
  }
}