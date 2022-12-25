import React from 'react'
import { Todo } from '../model'

interface Props {
    todoList: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todoList, setTodos }) => {
  return (
    <div className='todos'>
        {
            todoList.map((todo) => (
                <li>{todo.todo}</li>
            ))
        }
    </div>
  )
}

export default TodoList
