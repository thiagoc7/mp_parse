import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import { setHoverState, setHoverColor } from './../../actions/hover'

@connect((state) => {
  return {
    hover: state.hover
  };
})
export default class Hover extends Component {
  render() {
    const { dispatch, hover } = this.props;

    return (
        <div>
          <div className="row">
            <input style={{margin: 5}} type="text" ref="input" defaultValue={hover.color}/>
            <button onClick={() => {
            dispatch(setHoverColor(this.refs.input.value))
          }}>edit</button>
          </div>

          <div
              className="row"
              onMouseLeave={() => dispatch(setHoverState(false))}
              onMouseEnter={() => dispatch(setHoverState(true))}>
            <div style={{backgroundColor: hover.isHovering ? hover.color : undefined}}>
              <div style={{width: 30, height: 30}}></div>

            </div>
          </div>
        </div>
    )
  }
}