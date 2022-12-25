import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    setTodos([...todos, {id: Date.now(), todo, completed: false}])
    setTodo("");
  }
  
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField 
        todo={todo} 
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      <TodoList
        todoList={todos}
        setTodos={setTodos}  
      />
    </div>
  );
}

export default App;