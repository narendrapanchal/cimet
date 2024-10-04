import React, { useState } from 'react'
import ListItem from '../components/ListItem';

function List() {
    const [data,setData]=useState(()=>{
      try{
        return JSON.parse(localStorage.getItem("list")) || [];
      }catch(error){
        return [];
      }
    });
    console.log(data)
    const handleDelete=(ind)=>{
        const newData=data.filter((item,index)=>index!=ind);
        setData(newData);
        localStorage.setItem("list",JSON.stringify(newData));
    }
  return (
    <div>
      <h1>This is the list page</h1>
      <div>
        {data?.map((ele,ind)=><ListItem key={ind+ele.text} index={ind} text={ele.text} isCompleted={ele.isCompleted} handleDelete={()=>{
            handleDelete(ind);
        }}/>)}

      </div>
    </div>
  )
}

export default List
