import React, { Component } from 'react';
import Note from './Note';

export class NoteHolder extends Component {
  render() {
    return (
      <div>
        <h1>NoteHolder for all notes</h1>
        {/* will hold multiple note components inside */}
        <Note />
      </div>
    )
  }
}

export default NoteHolder
