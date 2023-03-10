import React, { useRef } from 'react';
import { Todo } from '../model';
import "./styles.css";

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void,
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  return (
   <form 
      className="input" 
      onSubmit={e => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
    <input
        ref={inputRef}
        type="text" 
        name="todo" 
        placeholder='Enter a todo'
        className='input__box'
        value={todo}
        onChange={(e) => {setTodo(e.target.value)}}
    />
    <button type="submit" className='input_submit'>
        Go
    </button>
   </form>
  )
}

export default InputField
