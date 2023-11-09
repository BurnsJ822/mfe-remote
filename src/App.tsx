import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from './Counter';
import TodoList from './ToDo';

function App() {
  return (
    <>
      <Counter />
      <span>Hello from remote</span>;
      <TodoList />
    </>
  );
}

export default App;
