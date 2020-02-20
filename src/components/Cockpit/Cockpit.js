import React, { useEffect } from 'react';
import './Cockpit.css';

const Cockpit = props => {
  const toggleBtnRef = React.useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();

    return () => {
      //clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in UseEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd UseEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = 'Red';
  }

  if (props.showPersons) {
    assignedClasses.push('red');
  }

  if (props.personsLength <= 2) {
    assignedClasses.push('red');
  }

  if (props.personsLength <= 1) {
    assignedClasses.push('bold');
  }

  return (
    <div className="Cockpit">
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked} ref={toggleBtnRef}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
