//import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Tasks from './Tasks';
import './ToDo.css';

//import {InputGroup, Button, FormControl} from 'react-bootstrap';

class ToDo extends Component {
    state = {
        tasks:[],
        inputValue: '',
        
    //arr:[1, 2, 3, 4, 5, 6, 8, 9]
    }


handleChange = (event) =>{
    this.setState({
        inputValue: event.target.value
    })

    
}
addTask = () => {
    const {inputValue} = this.state;
    const newTasks = [...this.state.tasks];
    if(inputValue.length!==0){
    newTasks.push(inputValue)
    this.setState({
        tasks: newTasks,
        inputValue: '',
         
        })
    
    }
}

    render() {
        const {inputValue, tasks} = this.state;
        return(
            <div>
               {/* <InputGroup className="mb-3">
    <InputGroup.Prepend onChange={this.handleChange} >
      <Button variant="outline-secondary"onClick={this.addTask} >Button</Button>
     
    </InputGroup.Prepend>
    <FormControl aria-describedby="basic-addon1" />
        </InputGroup>*/}

               <input type='text'placeholder='Add new task'value={inputValue} onChange={this.handleChange}/> 
               <input type = 'button' value='Add' onClick={this.addTask}/> 
               <ol>
               {
                  tasks.map((tasks, index)=>{          // this.state.
                       return  < Tasks data={tasks}/> //<li key={index}>{tasks}</li>
                   })
               }
            </ol>
          </div>
          )
        }
        
}
    export default ToDo