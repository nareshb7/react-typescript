import React from 'react';
import GetTodo from './GetTodo'
import AddTodo from './AddTodo'

const Todo = () => {
  return <div>Todo
    <div>
      <AddTodo />
    </div>
    <div>
      <GetTodo />
    </div>
  </div>;
};
export default Todo;
