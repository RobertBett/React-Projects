import React from 'react';
import './Cockpit.css';


const cockpit =(props)=>{
    let anything={
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid blue',
        padding: '8px',
        cursor:'pointer',
  
      };

    if(props.showPersons){
        anything.backgroundColor="red";
    }

    let classes =[];

    if(props.persons.length <=2){
      classes.push('red'); //classes =['red]
    }
    if(props.persons.length <=1){
      classes.push('bold'); //classes =['red','bold']
    }
    console.log(props.persons.length)
    return(
        <div>
            <h1>{props.newTitle}</h1>
            <p className={classes.join(' ')} >This is really working!</p>
            <button 
                style={anything}
                onClick={props.clicked}>Switch Name</button>
        </div>
    );
};

export default cockpit;