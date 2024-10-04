import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/List.css"
function ListItem({index,text,isCompleted,handleDelete}) {
  return (
    <div className='list-item'>
        <p>{text}</p> <input type='checkbox' checked={isCompleted} disabled={true}/> {isCompleted?<button className='disabled-button' disabled={true}>Edit</button>:<Link disabled={isCompleted} to={`/edit/${index}`}>Edit</Link>}<button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default ListItem
