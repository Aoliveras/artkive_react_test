import React, { Component } from 'react';
import Checkbox from './Checkbox'

export class Note extends Component {
  render() {
    return (
      <div>
        <h2>Single note</h2>
        {/* will hold checkbox component */}
        <Checkbox />
      </div>
    )
  }
}

export default Note
