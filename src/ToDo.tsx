import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

// Define the Todo interface
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  // State to manage the list of todos
  const [todos, setTodos] = useState<Todo[]>([]);
  // State to manage the input value for adding new todos
  const [newTodoText, setNewTodoText] = useState<string>('');

  // Function to add a new todo
  const addTodo = () => {
    if (newTodoText.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  // Function to remove a todo
  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Handle input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };

  // Handle Enter key press in the input field
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodoText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
