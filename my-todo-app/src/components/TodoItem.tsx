import React from 'react';
import { Todo } from '../types';

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: string) => void; // Change the type to string
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
};
