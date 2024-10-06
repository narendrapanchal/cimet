import React from 'react'

function Form({handleSubmit}) {
  return (
       <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Search Images' className='border border-teal-900 p-2'/>
      <br/>
      <button className='mt-2 p-2 font-teal-900 border border-teal-900' type='submit'>Find Images</button>
      </form>
  )
}

export default Form
