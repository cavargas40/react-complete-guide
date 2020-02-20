import React from 'react';
import './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends React.Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <React.Fragment>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </React.Fragment>
    );
  }
}

export default withClass(Person, 'Person');
