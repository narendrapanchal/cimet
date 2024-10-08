import React, { useEffect, useReducer, useRef, useState } from 'react';

function Carousel({ images, interval }) {
  const currentIndex=useRef(0)
  const [direction, setDirection] = useState('');
  const containerRef = React.useRef(null);
  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log("currentIndex,",currentIndex,)
      handleNext();
    },2000)
    return ()=>{
      clearInterval(timer);
    }
  },[])
  const handleNext = () => {
    const imageWidth = containerRef.current.children[0].offsetWidth;
    currentIndex.current=(currentIndex.current+1)%images.length
      containerRef.current.scrollLeft = (currentIndex.current)*imageWidth;
  };

  const handlePrevious = () => {
    const imageWidth =  containerRef.current.children[0].offsetWidth;
    currentIndex.current=(currentIndex.current-1+images.length)%images.length
     // Get the width of the container
    containerRef.current.scrollLeft = currentIndex.current*imageWidth;
  };

  return (
    <div className={`carousel `}>
      <div ref={containerRef}  style={{display:"flex", overflow:"scroll", flexWrap:"nowrap"}}>
      {images.map((image,ind)=><img key={"image "+ind} src={image}  alt={"Image "+ind} style={{width:'inherit'}}/>)}
      </div>
      <button onClick={handlePrevious} className='bg-white absolute left-1 top-1/2'>Prev</button>
      <button onClick={handleNext} className='bg-white absolute right-1 top-1/2'>Next</button>
    </div>
  );
}

export default Carousel;
