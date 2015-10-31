import React, { Component } from 'react';
import Parse from 'parse';

import './styles/normalize.css'
import './styles/skeleton.css'

Parse.initialize('hicvuvsjWekRiJGFdeK1GSUoTikmUDF85ilcopjt', 'cT8A4El4yQz3fEZ5V59MBrOanmv1jgmTo3K6xJFX')

import Home from './components/Home'

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './redux/reducers';

let store = createStore(todoApp);


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
            <h1>
              Mp Parse
            </h1>
          </div>
          <div className="row">
            <Provider store={store}>
              <Home />
            </Provider>
          </div>
        </div>
    );
  }
}