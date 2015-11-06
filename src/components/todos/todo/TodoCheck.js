import React from 'react'

const Checkbox = ({isChecked, onClick}) => (
    <input
        type="checkbox"
        style={{margin: 5}}
        checked={isChecked}
        onChange={onClick}/>
)

Checkbox.propTypes = {
  isChecked: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Checkbox