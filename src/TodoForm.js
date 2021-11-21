import React, { Component } from 'react';

// TodoList contains ( Todoform and list of Todos )
class TodoForm extends Component {
 constructor(props){
     super(props);
     this.state={
         newtodo:""
     }

 this.handlechange = this.handlechange.bind(this);
 this.handlesubmit = this.handlesubmit.bind(this);

 }
  
 handlechange(evt){
     this.setState({[evt.target.name]:evt.target.value});
 }
 handlesubmit(evt){
    evt.preventDefault();
    this.props.func(this.state.newtodo);
    this.setState({newtodo:""});

}
 render(){
  
 return (
   <div>
      <form  onSubmit={this.handlesubmit}>
          <input name="newtodo" onChange={this.handlechange} type="text" placeholder="New Todo" value={this.state.newtodo}></input>
          <button>Add Todo</button>
      </form>
      
   </div>
   
  );
  }
}

export default TodoForm;