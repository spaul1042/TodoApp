import React, { Component } from 'react';
import './Todo.css';
import UpdateTodoForm from './UpdateTodoForm';
// TodoList contains ( Todoform and list of Todos )
class Todo extends Component {
constructor(props){
        super(props);
        this.state={
            done_or_not:false,
            form_or_not:false,
            Dtodo:this.props.Dtodo,
            Did:this.props.Did
        };
        this.deletetodo = this.deletetodo.bind(this);
        this.updatetodo = this.updatetodo.bind(this);
        this.save = this.save.bind(this);
        this.todo_done = this.todo_done.bind(this);
      
}

deletetodo(evt){
    let x = this.state.Did;
    this.props.func1(x);
}

updatetodo(){
    let next_state= !(this.state.form_or_not);
    this.setState({form_or_not:next_state});
}

save(newtodo){
    let next_state= !(this.state.form_or_not);
    this.setState({form_or_not:next_state, Dtodo:newtodo});
}

todo_done(){
    let x1 = this.state.Dtodo;
    let x2 = x1;
    let test1 = !(this.state.done_or_not);

    if(test1 === true){
       x2 = x2 + "✔😎";
    }
    else{
        x2= x2.slice(0,- 1);
        x2= x2.slice(0,- 1);
        x2= x2.slice(0,- 1);
        

    }

    this.setState({done_or_not:test1 , Dtodo:x2});
}

render(){

return (
   <>
  { 

   this.state.form_or_not ? 

   <UpdateTodoForm func={this.save} present_todoname ={this.state.Dtodo} />

   :
   <div>
     <span onClick={ this.todo_done } className="SingleTodo">{this.state.Dtodo}</span>
     <button onClick={this.deletetodo}>Delete</button>
     <button onClick={this.updatetodo}>Update</button>
     {/* <button onClick={this.updatetodo}>Update</button> */}
   </div>

  }
   </>
  );
  }
}

export default Todo;