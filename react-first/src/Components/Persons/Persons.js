import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
    constructor(props){
        super(props);
        console.log('Persons.js constructor',props)
      }
    
      componentWillMount(){
        console.log('Persons.js componentWillMount')
      }
    
      componentDidMount(){
        console.log('Persons.js componentDidmount')
      }

      componentWillReceiveProps(nextProps){
          console.log('UPDATE Persons.js inside componentWillReciveProps',nextProps)
      }

      // shouldComponentUpdate(nextProps,nextState){
      //     console.log('UPDATE Persons.js inside shouldComponentUpdate', nextProps,nextState);
      //     return nextProps.persons !== this.props.person ||
      //               nextProps.changed !== this.props.changed ||
      //               nextProps.clicked !== this.props.clicked;
      //   // return true;
      // }

      componentWillUpdate(nextProps,nextState){
        console.log('UPDATE Persons.js inside component will update',nextProps,nextState)
      }

      componentDidUpdate(){
        console.log('UPDATE persons.js inside component did Update')
      }
    render(){
        console.log('Persons.js render')
        return this.props.persons.map((person,index) =>{
            return <Person 
                name={person.name}
                click={()=> this.props.clicked(index)}
                changed={(event)=>this.props.changed(event,person.id)}
                key={person.id}/>
    });
    }
}

export default Persons;