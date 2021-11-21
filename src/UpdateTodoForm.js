import React, { Component } from 'react';


// TodoList contains ( Todoform and list of Todos )
class UpdateTodoForm extends Component {
    constructor(props){
        super(props);
        this.state={
            newtodo:this.props.present_todoname
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
       
      <form onSubmit={this.handlesubmit}>
          <input name ="newtodo" onChange={this.handlechange} type="text" value={this.state.newtodo}></input>
          <button>Save</button>
      </form>
      
   </div>
   
  );
  }
}

export default UpdateTodoForm;
