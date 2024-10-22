import React, { useState } from 'react'
export interface Obj{
    id: number,
    text: string,
    completed: boolean
  }
  
import Form from './Form';
const TodoList:React.FC=()=> {
  const [list,setList]=useState<Obj[]>([]);
  return (
    <>
    <Form setList={setList}/>
    <ul>
        {list.map((item:Obj)=><li className={item.completed?"completed":undefined} key={item.id} >{item.text} <input onChange={()=>{
          setList(prev=>prev.map(i=>i.id===item.id?{...i,completed:!i.completed}:i))
        }} type='checkbox' disabled={item.completed} checked={item.completed}/></li>)}
    </ul>
    </>
  )
}

export default TodoList
