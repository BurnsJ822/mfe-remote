import { useState, ChangeEvent, KeyboardEvent } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');

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

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={{border: '1px solid #ccc', padding: '10px', borderRadius: '8px'}}>
        <span>Burns's Remote</span>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodoText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
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
