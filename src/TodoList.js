import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  function handleCreate(task) {
    dispatch({
      type: 'ADD_TODO',
      task
    });
  }

  function handleUpdate(id, updatedTask) {
    dispatch({
      type: 'UPDATE_TODO',
      id,
      updatedTask 
    });
  }
  
  function handleDelete(id) {
    dispatch({ type: 'REMOVE_TODO', id });
  }

  const allTodos = todos.map(todo => (
    <Todo
    updateTodo={handleUpdate}
      id={todo.id}
      key={todo.id}
      task={todo.task}
      deleteTodo={handleDelete}
    />
  ));
  return (
    <div>
      <NewTodoForm createTodo={handleCreate} />
      <ul>{allTodos}</ul>
    </div>
  );
}

export default TodoList;