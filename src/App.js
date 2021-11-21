import React, { Component } from 'react';
import TodoList from './TodoList';

// TodoList contains ( Todoform and list of Todos )
class App extends Component {
  render(){
  
  return (
   <div> 
      <TodoList />  
   </div>
   
  );
  }
}

export default App;
