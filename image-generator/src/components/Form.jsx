import React, { useState } from 'react'
import { createApi } from 'unsplash-js';
const unsplash = createApi({ accessKey: import.meta.env.VITE_Access_Key });
function Form({setList}) {
  const [limit,setLimit]=useState(10);
  const [search,setSearch]=useState("");
  const [orientation,setOrientation]=useState("landscape");
  const [random,setRandom]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(search.length==0){
      unsplash.photos.getRandom({
        count: limit,
        orientation: orientation,
      }).then((res)=>{
        setList(res.response.map((ele)=>ele.links.download))
      })
    }else{
      unsplash.search.getPhotos({
        query: search,
        page: 1,
        perPage: limit,
        orientation: orientation,
      }).then((res)=>{
        setList(res.response.results.map((ele)=>ele.links.download))

      }).catch((err)=>{
        alert("Something went wrong ",err.message)
      })
    }
  }


  return (
       <form onSubmit={handleSubmit}>
      {!random&&<input value={search} type="text" placeholder='Search Images' className='border border-teal-900 p-2' onChange={(e)=>{
        setSearch(e.target.value)
      }}/>}
      
      <br/>
      {search.length===0&&<>
      <label name="Random Image">Get Random Images</label>
      <input type="checkbox" value="random" checked={random || search.length===0} onChange={((e)=>{
        setRandom(e.target.checked)
      })}/>
      </>}

        <br/>
      <input required type="number" value={limit} min={1} max={100} placeholder='Search Images' className='border border-teal-900 p-2' onChange={(e)=>{
        console.log(e.target.value)
        setLimit(e.target.value)
      }}/>
      <br/>
      <select onChange={(e)=>{
        setOrientation(e.target.value)
        console.log(e.target.value)
      }}>
        <option value="landscape">Landscape</option>
        <option value="portrait">Portrait</option>
        <option value="squarish">Squarish</option>
      </select>
      <br/> 
      <button className='mt-2 p-2 font-teal-900 border border-teal-900' type='submit'>Find Images</button>
      </form>
  )
}

export default Form
