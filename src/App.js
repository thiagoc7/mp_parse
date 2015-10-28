import React, { Component } from 'react';
import Parse from 'parse';

Parse.initialize('hicvuvsjWekRiJGFdeK1GSUoTikmUDF85ilcopjt', 'cT8A4El4yQz3fEZ5V59MBrOanmv1jgmTo3K6xJFX')

export class App extends Component {
  constructor(props){
    super(props);

    const model = Parse.Object.extend("test");
    let test = new model()
    test.set('title', 'oie')
    test.save()
  }

  render() {
    return (
      <div>
        <h1>oie</h1>
      </div>
    );
  }
}