import React, { Component } from 'react';
import User from './components/Users/User';
import './App.css';
import NoteHolder from './components/Notes/NoteHolder';

class App extends Component {
  render() {
    return (
      // setup router to change between User component and Noteholder component once signed up
      <div className="App">
        <h1>Notes App</h1>
        <User />
        <NoteHolder />
      </div>
    );
  }
}

export default App;
