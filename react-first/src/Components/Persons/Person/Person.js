import React, {Component} from 'react'
import'./Person.css'

class Person extends Component{
  constructor(props){
    super(props);
    console.log('Person.js constructor',props)
  }

  componentWillMount(){
    console.log('Person.js componentWillMount')
  }

  componentDidMount(){
    console.log('Person.js componentDidmount')
  }
  render(){
    console.log('Person.js render')
     return (
      <div className="Person">
        <p> I am {this.props.name},I am {Math.floor(Math.random()* 100) }years old {this.props.children} </p>
        <button onClick={this.props.click}>Click</button>
        <input type="text" onChange={this.props.changed}/>
      </div>
  )
  }
}


export default Person;