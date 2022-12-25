import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone, MdClose } from 'react-icons/md';

interface Props {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }) => {
  
  const inputRef = useRef<HTMLInputElement>(null);

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (todoId: string): void => {    
    const todoList = todos.map((item) => (item.id === todoId ? {...item, completed: !todo.completed}: item))
    setTodos(todoList)
  }
  
  const deleteTodoItem = (todoId: string): void  => {
    const filteredTodos = todos.filter((item) => item.id !== todoId);
    setTodos(filteredTodos);
  }

  const handleEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setTodos(
      todos.map((item) =>( item.id === id ? {...item, todo: editTodo}: item))
    )
    setEdit(false)
  }
  
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

  return (
    <form className="todos__single" onSubmit={(e) => {handleEdit(e, todo.id)}}>
      {
        edit ? (
          <input
            ref={inputRef}
            className='todos__single--text'
            value={editTodo}
            onChange={(e) => {setEditTodo(e.target.value)}}
          />
        ) : todo.completed ? (
          <s className="todos__single--text">{todo.todo}</s>
         ) : (
          <span className="todos__single--text">{todo.todo}</span>
         )
      }
      
      <div>
        <span 
          className="icon"
          onClick={() => {
            if(!edit && !todo.completed){
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span 
          className="icon"
          onClick={() => {deleteTodoItem(todo.id)}}
        >
          <AiFillDelete />
        </span>
        <span 
          className="icon"
          onClick={() => {handleDone(todo.id)}}
        >
          {todo.completed ? <MdClose/> : <MdDone />}
        </span>
      </div>
    </form>
  )
}

export default SingleTodo;
