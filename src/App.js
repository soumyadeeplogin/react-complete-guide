import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      {id: 'adadf', name: 'Iron Man', age: 28},
      {id: 'qerewr', name: 'Spiderman', age: 18},
      {id: 'xvbvc', name: 'Dr. Strange', age: 25}
    ],
    showPersons: false 
  }
  
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangedHandler = ( event, id ) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person= {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  tooglePersonsHandler = (event) => {

    this.setState({showPersons: !(this.state.showPersons)})
  }
  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)}/>  
          })}
      </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.tooglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )

    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!!'));
  }
}

export default App;
