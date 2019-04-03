import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: "9a82yhf", name: "Gabriel", age: 21},
      {id: "jasfnq8", name: "Davison", age: 19},
      {id: "ajfq82j", name: "Vinicius", age: 28}
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  deletePersonHandler = (personIndex) => {
    /* Create a copy of the persons array */
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    
    /* Remove the person from the new array */
    persons.splice(personIndex, 1);
 
    /* Replace the old persons array with the new one */
    this.setState({persons: persons});
  }

  changeNameHandler = (event, id) => {

    /* Copy the person to be changed */
    // const person = Object.assign({}, this.state.persons[index]);

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    /* Change that person's name */
    person.name = event.target.value;

    /* Copy the entire persons array */
    const persons = [...this.state.persons];

    /* Change only the position relative to the person that was changed */
    persons[personIndex] = person;

    /* Replace the old persons array with the new one */
    this.setState({persons: persons});

  }

  togglePersonsHandler = () => {
    const showPersons_aux = this.state.showPersons;
    this.setState({
      showPersons: !showPersons_aux
    });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons){
      persons = <Persons 
            persons = {this.state.persons} 
            clicked = {this.deletePersonHandler}
            changed = {this.changeNameHandler} />;
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            title = {this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            click={this.togglePersonsHandler} />
          {persons}
        </div>
    );
  }
}

export default App; 
