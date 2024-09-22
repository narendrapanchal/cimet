import React, { useEffect, useState } from 'react'

function Create() {
    const [data,setData]=useState(JSON.parse(localStorage.getItem("list"))||[]);
    const [text,setText]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        setData((prev)=>[...prev,{text,completed:false}]);
    }
    useEffect(()=>{
        localStorage.setItem("list",data);
    },[data]);    const handleChange=(e)=>{
        setText(e.target.value);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange}/>
        <button type='submit'></button>
      </form>
    </div>
  )
}

export default Create
