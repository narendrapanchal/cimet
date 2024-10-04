import logo from './logo.svg';
import './App.css';
import RandomCircle from './components/RandomCircle';
import Buttons from './components/Buttons';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState([]);
  const [redoData,setRedoData]=useState([]);
  const darkColors = [
    '#1A1A2E', // Dark Blue
    '#0F3460', // Dark Navy
    '#16213E', // Dark Slate
    '#533B1F', // Dark Brown
    '#C70039', // Dark Red
    '#4B0082'  // Indigo
];

function getRandomDarkColor() {
    const randomIndex = Math.floor(Math.random() * darkColors.length);
    return darkColors[randomIndex];
}

  function handleClick(e){
    const left=e.clientX;
    const top=e.clientY;
    const background=getRandomDarkColor();
    setData([...data,{left,top,background}]);
  }
  function handleUndo(e){
    e.stopPropagation();
    const newRedoData=[data[data.length-1],...redoData];
    setData(data.slice(0,data.length-1));
    setRedoData(newRedoData);
  }
  function handleRedo(e){
    e.stopPropagation();
    if(redoData.length>0){
      const newRedoData=redoData.slice(1);
      setData([...data,redoData[0]]);
      setRedoData(newRedoData);
    }
  }
  function handleReset(e){
    e.stopPropagation();
    setData([]);
    setRedoData([]);
  }

  return (
    <div className="App">
      <Buttons handleRedo={handleRedo} handleReset={handleReset} handleUndo={handleUndo} data={data}/>
      <div onClick={handleClick} className='random-component'>
        {data.map((ele,ind)=><RandomCircle data={ele}/>)}
      </div>
    </div>
  );
}

export default App;
