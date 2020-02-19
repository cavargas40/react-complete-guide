import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Carlos" age="28"/>
        <Person name="Azusa" age="26"> My Hobbies: Play Piano </Person>
        <Person name="Cholo" age="25"/>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
