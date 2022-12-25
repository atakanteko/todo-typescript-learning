import React from 'react';
import "./styles.css";

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
   <form className="input">
    <input 
        type="text" 
        name="todo" 
        placeholder='Enter a todo'
        className='input__box'
        onChange={(e) => {setTodo(e.target.value)}}
    />
    <button type="submit" className='input_submit'>
        Go
    </button>
   </form>
  )
}

export default InputField
