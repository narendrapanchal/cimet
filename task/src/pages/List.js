import React, { useState } from 'react'
import ListItem from '../components/ListItem';

function List() {
    const [data,setData]=useState(JSON.parse(localStorage.getItem("list"))||[]);
    const handleDelete=(ind)=>{
        const newData=[...data];
        delete newData[ind];
        setData(newData);
        localStorage.setItem("list",newData);
    }
  return (
    <div>
      <h1>This is the list page</h1>
      <div>
        {List.map((ele,ind)=><ListItem index={ind} text={ele.text} isCompleted={ele.isCompleted} handleDelete={()=>{
            handleDelete(ind);
        }}/>)}

      </div>
    </div>
  )
}

export default List
