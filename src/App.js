import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
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
      ':hover': {
        backgroundColor: "lightgreen",
        color: "black"
      }
    }

    let persons = null;

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
      style[':hover'].backgroundColor = "salmon";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>TRE Interns</p>
          <button style={style} onClick={this.togglePersonsHandler}>Show/Hide</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App); 
