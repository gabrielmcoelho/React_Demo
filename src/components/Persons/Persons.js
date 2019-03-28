import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return (
                <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age}
                    click={() => props.clicked(index)}
                    change={(event) => props.changed(event, person.id)}>
                </Person>
            )
        })
    )
}

export default persons;