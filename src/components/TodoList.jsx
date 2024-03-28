// components/TodoList.js
import React from 'react';
import { Grid } from '@material-ui/core';
import TodoCard from './TodoCard'; // Import the TodoCard component

const TodoList = ({ todos, onDeleteTodo, onEditTodo }) => {
  return (
    <Grid container spacing={2}>
    {todos.map((todo) => (
      <Grid item key={todo.id} xs>
        <TodoCard
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      </Grid>
    ))}
  </Grid>
  );
};

export default TodoList;