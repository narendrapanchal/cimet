import React from 'react'

function Eligible({text,handleBack}) {
  return (
    <div>
      <h1 className='text-3xl font-bold'>{text}</h1>
      <button  className='text-orange-300 underline hover:text-green-950 mt-2'onClick={handleBack}>Go Back</button>
      
    </div>
  )
}

export default Eligible
