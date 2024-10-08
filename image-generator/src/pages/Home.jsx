
import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel';
import Form from '../components/Form';
function Home() {
 
    const [list, setList]=useState([]);
   

  return (
    <div>
      <h1 className='text-3xl'>Welcome to Image Generator</h1>
      
      {list.length>0?<><Carousel images={list}/></>:<Form setList={setList}/>}
    </div>
  )
}

export default Home;

