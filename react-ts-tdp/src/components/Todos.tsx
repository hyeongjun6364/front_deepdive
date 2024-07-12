import React, { useEffect, useRef, useState } from 'react'
import TodosModel from '../models/todos'
import TodoItem from './todoItem'
import NewItem from './newItem'

const Todos:React.FC<{todoItems:TodosModel[]}> = (props) => {
    const [todos,setTodos] = useState<TodosModel[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const todoItem1 = new TodosModel("learn typescript")
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputRef.current && inputRef.current.value){
            const newText = new TodosModel(inputRef.current.value)
            setTodos(prev => prev.concat(newText))
            inputRef.current.value=''
        }
        
    }
    const removeItem = (id:string)=>{
        setTodos(prev => prev.filter(items=>items.id!==id))
    }
  return (
    <form>
        {/* <input ref={inputRef} placeholder='할일 입력'/>
        <button onClick={handleSubmit}>제출하기</button> */}
        <NewItem inputRef={inputRef} handleSubmit={handleSubmit}/>
        <ul>
            {todos.map(items => <TodoItem key={items.id} text={items.text}  removeItem={()=>removeItem(items.id)}/>)}
        </ul>
    </form>
  )
}

export default Todos