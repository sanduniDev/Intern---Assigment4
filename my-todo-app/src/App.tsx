import { v4 as uuidv4 } from 'uuid';
import { TodoList } from './components/TodoList';
import { Todo } from './types';
import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleTodo = (selectedTodoId: string) => {
    const newTodos = todos.map(todo =>
      todo.id === selectedTodoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const addTodo = (text: string) => {
    const newTodo = { id: uuidv4(), text: text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const text = form.elements.namedItem('todo') as HTMLInputElement;
          if (text) {
            addTodo(text.value);
            text.value = ''; // Clear the input field after submission
          }
        }}
      >
        <input name="todo" type="text" />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
