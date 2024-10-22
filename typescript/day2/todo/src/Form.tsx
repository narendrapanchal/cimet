import React, { useState } from 'react'


const Form:React.FC=({setList})=> {
    const [text,setText]=useState<string>("")
    const handleSubmit=(e)=>{
        e.preventDefault();
            setList((prev)=>[...prev,{id:Date.now(),text,completed:false}]);
            setText("");
    }
  return (
        <form onSubmit={handleSubmit}>
            <input value={text}  required type='text' onChange={(e)=>{
                setText(e.target.value)
            }}/>
            <button type='submit'>Submit</button>

        </form>
      
  )
}

export default Form
