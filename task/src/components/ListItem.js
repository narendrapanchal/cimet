import React from 'react'
import { Link } from 'react-router-dom'

function ListItem({index,text,isCompleted,handleDelete}) {
  return (
    <div>
        <p>{text}</p> <input type='checkbox' value={isCompleted}/> <Link to={`/edit/${index}`}></Link><button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default ListItem
