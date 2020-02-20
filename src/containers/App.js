import React from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.Component {
  state = {
    persons: [
      { name: 'Carlos', age: 28, id: 1 },
      { name: 'Azusa', age: 26, id: 2 },
      { name: 'Cholo', age: 25, id: 3 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons
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
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
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
