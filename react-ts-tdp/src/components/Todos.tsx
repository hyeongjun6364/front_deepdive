import React, { useEffect, useRef, useState } from 'react'
import TodosModel from '../models/todos'

const Todos:React.FC = () => {
    const [todos,setTodos] = useState<TodosModel[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const todoItem1 = new TodosModel("learn typescript")
    useEffect(()=>{
        setTodos(prev => prev.concat(todoItem1))
    },[])
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputRef.current && inputRef.current.value){
            const newText = new TodosModel(inputRef.current.value)
            setTodos(prev => prev.concat(newText))
        }
       
    }
    const removeItem = (id:string)=>{
        setTodos(prev => prev.filter(items=>items.id!==id))
    }
  return (
    <form>
        <input ref={inputRef} placeholder='할일 입력'/>
        <button onClick={handleSubmit}>제출하기</button>
        <ul>
            {todos.map(items => <li key={items.id} onClick={() => removeItem(items.id)}>
                {items.text}
            </li>)}
        </ul>
    </form>
  )
}

export default Todos