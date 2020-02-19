import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'Carlos', age: 28 },
      { name: 'Azusa', age: 26 },
      { name: 'Cholo', age: 25 }
    ],
    showPersons: false
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Carlos', age: 28 },
        { name: event.target.value, age: 26 },
        { name: 'Cholo', age: 25 }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={index}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
  }
}

// const App = props => {
//   const [personsState, setPersonsState] = React.useState({
//     persons: [
//       { name: 'Carlos', age: 28 },
//       { name: 'Azusa', age: 26 },
//       { name: 'Cholo', age: 25 }
//     ]
//   });

//   const [otherState] = React.useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     console.log('I was Clicked!');
//     // DON'T DO THIS: this.state.persons['0'].name = 'Carlos Andres';
//     setPersonsState({
//       ...personsState,
//       persons: [
//         { name: 'Carlos Andres', age: 28 },
//         { name: 'Azusa', age: 26 },
//         { name: 'Cholo', age: 25 }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         {' '}
//         My Hobbies: Play Piano{' '}
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
//   // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
// };

export default App;
