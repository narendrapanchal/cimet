const data=[
  "https://unsplash.com/photos/9uMvphEhd_c/download?ixid=M3w2NjE5Nzh8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwxfHxncmVlbnwxNzI4Mjc0NTEwfDA",
  "https://unsplash.com/photos/wxHCu_Ri_MY/download?ixid=M3w2NjE5Nzh8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHwxfHxncmVlbnwxNzI4Mjc0NTEwfDA",
  "https://unsplash.com/photos/IPRFX7CVVoU/download?ixid=M3w2NjE5Nzh8MHwxfHNlYXJjaHwzfHxjYXR8ZW58MHwxfHxncmVlbnwxNzI4Mjc0NTEwfDA",
  "https://unsplash.com/photos/xnyfMfMM6Fk/download?ixid=M3w2NjE5Nzh8MHwxfHNlYXJjaHw0fHxjYXR8ZW58MHwxfHxncmVlbnwxNzI4Mjc0NTEwfDA",
  "https://unsplash.com/photos/PFebkF2EnL8/download?ixid=M3w2NjE5Nzh8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwxfHxncmVlbnwxNzI4Mjc0NTEwfDA",
  "https://unsplash.com/photos/jQ4u59JuqAY/download?ixid=M3w2NjE5Nzh8MHwxfHNlYXJjaHw2fHxjYXR8ZW58MHwxfHxncmVlbnwxNzI4Mjc0NTEwfDA",
  "https://unsplash.com/photos/AgYJdcEZtmY/download?ixid=M3w2NjE5Nzh8MHwxfHNlYXJjaHw3fHxjYXR8ZW58MHwxfHxncmVlbnwxNzI4Mjc0NTEwfDA",
  "https://unsplash.com/photos/T_iuKuVlDv0/download?ixid=M3w2NjE5Nzh8MHwxfHNlYXJjaHw4fHxjYXR8ZW58MHwxfHxncmVlbnwxNzI4Mjc0NTEwfDA",
  "https://unsplash.com/photos/s05bltSqfYs/download?ixid=M3w2NjE5Nzh8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHwxfHxncmVlbnwxNzI4Mjc0NTEwfDA",
  "https://unsplash.com/photos/G0I6VfStU6A/download?ixid=M3w2NjE5Nzh8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8MXx8Z3JlZW58MTcyODI3NDUxMHww"
]

import React, { useEffect, useState } from 'react'
import { createApi } from 'unsplash-js';
import Carousel from '../components/Carousel';
const unsplash = createApi({ accessKey: import.meta.env.VITE_Access_Key });
function Home() {
    const [list, setList]=useState([]);
    const handleRequest=(data)=>{
      unsplash.search.getPhotos({
        query: 'cat',
        page: 1,
        perPage: 10,
        color: 'green',
        orientation: 'portrait',
      }).then((res)=>{console.log(JSON.stringify((res.response.results.map((ele)=>ele.links.download)),null,2))
        setList(res.response.results)
      }).catch((err)=>{
        console.log(err.message);
      })
    }
    useEffect(()=>{
      // handleRequest()
        // https://api.unsplash.com/photos?page=1
        // const data=
    },[]);
  return (
    <div>
      <h1 className='text-3xl'>Welcome to Image Generator</h1>
      <Carousel images={data}/>
    </div>
  )
}

export default Home;

