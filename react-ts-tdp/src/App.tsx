import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import TodosModel from './models/todos';
import { useState } from 'react';
function App() {
  const [todos,setTodos] = useState<TodosModel[]>([])
  return (
   <Todos todoItems={todos}/>
  );
}

export default App;
