import React, { useEffect, useState } from 'react';

function Carousel({ images, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const containerRef = React.useRef(null);
  useEffect(()=>{
  },[])
  const handleNext = () => {
    const imageWidth = containerRef.current; // Get the width of the container
    console.log("imageWidth",imageWidth)
      containerRef.current.scrollLeft = imageWidth;
  };

  const handlePrevious = () => {
    const imageWidth = containerRef.current.style.width; // Get the width of the container
    containerRef.current.scrollRight = imageWidth;
  };

  return (
    <div className={`carousel ${direction}`}>
      <div ref={containerRef}  style={{display:"flex", overflow:"scroll", flexWrap:"nowrap"}}>
      {images.map((image,ind)=><img src={image}  alt={"Image "+ind} style={{width:'inherit'}}/>)}
      </div>
      <button onClick={handlePrevious} className='bg-white absolute left-1 top-1/2'>Prev</button>
      <button onClick={handleNext} className='bg-white absolute right-1 top-1/2'>Next</button>
    </div>
  );
}

export default Carousel;
