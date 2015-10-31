import React, { Component, PropTypes } from 'react';

import { setHoverState, setHoverColor } from './../../redux/actions'

export default class Hover extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {dispatch} = this.props;

    return (
        <div>
          <div className="row">
            <input style={{margin: 5}} type="text" ref="input" defaultValue={this.props.hover.color}/>
            <button onClick={() => {
            dispatch(setHoverColor(this.refs.input.value))
          }}>edit</button>
          </div>

          <div
              className="row"
              onMouseLeave={() => dispatch(setHoverState(false))}
              onMouseEnter={() => dispatch(setHoverState(true))}>
            <div style={{backgroundColor: this.props.hover.isHovering ? this.props.hover.color : undefined}}>
              <div style={{width: 30, height: 30}}></div>

            </div>
          </div>
        </div>
    )
  }
}