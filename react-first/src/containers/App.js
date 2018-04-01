import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons:[
        {id:1 ,name:'Sam'},
        {id:12, name:'Rob'},
        {id:122, name:'Sonia'}
      ],
  
      otherState:'Whatever',
      showPersons:false
    }

    console.log('inside Constructor', props);
  }

  componentWillMount(){
    console.log('in component will mount');
  }

  componentDidMount(){
    console.log('component did Mount')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('UPDATE App.js inside shouldComponentUpdate', nextProps,nextState);
    return nextState.persons !== this.state.persons || 
            nextState.showPersons !== this.state.showPersons;
  }

  componentWillUpdate(nextProps,nextState){
  console.log('UPDATE App.js inside component will update',nextProps,nextState)
  }

  componentDidUpdate(){
  console.log('UPDATE App.js inside component did Update')
  }

  // state ={
  //   persons:[
  //     {id:1 ,name:'Sam'},
  //     {id:12, name:'Rob'},
  //     {id:122, name:'Sonia'}
  //   ],

  //   otherState:'Whatever',
  //   showPersons:false
  // }


  nameChangeHandler=(event, id)=>{
    const personIndex= this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //Alternative
    // const person =Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex]=person;



    this.setState({
      persons:persons
    })
  }

  //Try to understand how this works
  deletePersonHandler =(personIndex)=>{
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  togglePersonsHandler=()=>{
    const doesShow= this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      });

  }

  render() {

    console.log('inside render')
    let persons = null;

    if(this.state.showPersons){
      persons =  
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>
          ;

          {/* <Person name={this.state.persons[0].name}/>
          <Person name={this.state.otherState} />
          <Person name={this.state.persons[1].name} changed={this.nameChangeHandler}/>
          <Person name={this.state.persons[2].name} click={this.switchNameHandler.bind(this,'What')}> and i am the Prettiest</Person> */}
        
    }



    return (
      <div className="App">
       <button onClick={()=>{this.setState({showPersons:true})}}>Show Persons</button>
      <Cockpit
        newTitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );

    //return React.createElement('div',{ className: 'App'}, React.createElement('h1',null, 'im a React App!!'));
  }
}

export default App;
