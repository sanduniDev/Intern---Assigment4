
import React from 'react';
import { Todo } from '../types';
import { TodoItem } from './TodoItem';

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: string) => void; // Change the type to string
};

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
