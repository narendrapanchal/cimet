import React, { useEffect, useReducer, useRef, useState } from 'react';

function Carousel({ images }) {
  const currentIndex=useRef(0);
  const [currentImage,setCurrentImage]=useState(0);
  const containerRef = React.useRef(null);
  useEffect(()=>{
    const timer=setInterval(()=>{
      handleNext();
    },2000)
    return ()=>{
      clearInterval(timer);
    }
  },[])
  const handleNext = () => {
    if(currentIndex.current===images.length-1){
      const imageWidth = containerRef.current.children[0].offsetWidth;
      currentIndex.current=(currentIndex.current+1)%images.length
      containerRef.current.style.transform = `translateX(-${(currentIndex.current)*imageWidth}px`;
      containerRef.current.style.transition = "none";
      setCurrentImage(currentIndex.current);
    }else{

      const imageWidth = containerRef.current.children[0].offsetWidth;
      currentIndex.current=(currentIndex.current+1)%images.length
      containerRef.current.style.transform = `translateX(-${(currentIndex.current)*imageWidth}px`;
      containerRef.current.style.transition = "all 1s ease-in-out";
      setCurrentImage(currentIndex.current);
    }
  };

  const handlePrevious = () => {
    

      const imageWidth =  containerRef.current.children[0].offsetWidth;
      currentIndex.current=(currentIndex.current-1+images.length)%images.length
      containerRef.current.style.transform = `translateX(-${currentIndex.current*imageWidth}px)`;
      containerRef.current.style.transition = "all 1s ease-in-out";
      setCurrentImage(currentIndex.current);
    


  };
  const handleClick = (num) => {
    const imageWidth = containerRef.current.children[0].offsetWidth;
    currentIndex.current=num
      containerRef.current.style.transform =`translateX(-${(currentIndex.current)*imageWidth}px)`;
    containerRef.current.style.transition = "all 0.4s ease-in-out";
    setCurrentImage(num);
  };

  return (
    <div className={`carousel `}>
      <div ref={containerRef} className='images' >
      {images.map((image,ind)=><img key={"image "+ind} src={image}  alt={"Image "+ind} style={{width:'inherit'}} />)}
      </div>
      <button onClick={handlePrevious} className='bg-white absolute left-1 top-1/4  lg:top-1/2 p-2 rounded'>Prev</button>
      <button onClick={handleNext} className='bg-white absolute right-1 top-1/4 p-2 lg:top-1/2 rounded'>Next</button>
      <div className='flex justify-center gap-1 button-container' >

      {images.map((image,ind)=><button  key={"button "+ind} className={` carousel-button w-4 h-4 p-2 rounded bg-gray-500 ${ind==currentImage?'bg-green-400':undefined}`} onClick={()=>{
        handleClick(ind)
      }}></button>)}
      </div>

    </div>
  );
}

export default Carousel;
