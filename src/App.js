import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: "9a82yhf", name: "Gabriel", age: 21},
      {id: "jasfnq8", name: "Davison", age: 19},
      {id: "ajfq82j", name: "Vinicius", age: 28}
    ],
    showPersons: false
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

  changeNameHandler = (event, index) => {

    /* Copy the person to be changed */
    // const person = Object.assign({}, this.state.persons[index]);
    const person = {
      ...this.state.persons[index]
    }

    /* Change that person's name */
    person.name = event.target.value;

    /* Copy the entire persons array */
    const persons = [...this.state.persons];

    /* Change only the position relative to the person that was changed */
    persons[index] = person;

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

    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursos: "pointer",
    }

    let persons = null;
    let btnClass = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
                <Person 
                  key={person.id}
                  name={person.name} 
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  change={(event) => this.changeNameHandler(event, index)}>
                </Person>
            )
          })}
        </div>
      );

      style.backgroundColor = "red";
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>TRE Interns</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>Show/Hide</button>
          {persons}
        </div>
    );
  }
}

export default App; 
