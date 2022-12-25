import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface Props {
    todoList: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todoList, setTodos }) => {
  return (
    <div className='todos'>
        {
            todoList.map((todo, index) => (
                <SingleTodo 
                  key={index} 
                  todo={todo}
                  todos={todoList}
                  setTodos={setTodos} 
                />
            ))
        }
    </div>
  )
}

export default TodoList
