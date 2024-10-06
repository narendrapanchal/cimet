import React, { useEffect, useState } from 'react'

function Home() {
    const [list, setList]=useState([]);
    useEffect(()=>{
        fetch("https://api.unsplash.com/search/collections?page=1&query=office");
        // https://api.unsplash.com/photos?page=1
    },[]);
  return (
    <div>
      <h1 className='text-3xl'>Welcome to Image Generator</h1>
    </div>
  )
}

export default Home
