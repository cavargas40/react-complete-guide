import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends React.Component {
  constructor() {
    super();
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <React.Fragment>
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <input
          type="text"
          // ref={inputEl => this.inputElement = inputEl}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </React.Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, 'Person');
