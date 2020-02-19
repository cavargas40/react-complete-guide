import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends React.Component {
//   state = {
//     persons: [
//       { name: 'Carlos', age: 28 },
//       { name: 'Azusa', age: 26 },
//       { name: 'Cholo', age: 25 }
//     ]
//   };

//   switchNameHandler = () => {
//     console.log('I was Clicked!');
//     // DON'T DO THIS: this.state.persons['0'].name = 'Carlos Andres';
//     this.setState({
//       persons: [
//         { name: 'Carlos Andres', age: 28 },
//         { name: 'Azusa', age: 26 },
//         { name: 'Cholo', age: 25 }
//       ]
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         >
//           {' '}
//           My Hobbies: Play Piano{' '}
//         </Person>
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//       </div>
//     );
//     // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
//   }
// }

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Carlos', age: 28 },
      { name: 'Azusa', age: 26 },
      { name: 'Cholo', age: 25 }
    ]
  });

  const [otherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    console.log('I was Clicked!');
    // DON'T DO THIS: this.state.persons['0'].name = 'Carlos Andres';
    setPersonsState({
      ...personsState,
      persons: [
        { name: 'Carlos Andres', age: 28 },
        { name: 'Azusa', age: 26 },
        { name: 'Cholo', age: 25 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        {' '}
        My Hobbies: Play Piano{' '}
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
};

export default App;
