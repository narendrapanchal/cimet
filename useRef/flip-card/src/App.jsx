import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './Game';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  function getRandomImages() {
    const images = [
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
        'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
        'https://www.shutterstock.com/image-photo/plitvice-lakes-croatia-beautiful-place-260nw-1050138794.jpg',
        'https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg',
        'https://media.istockphoto.com/id/488358624/photo/peneda-geres-national-park.jpg?s=612x612&w=0&k=20&c=IW62P3lokM7WWBs4pmiUMyLh_MJwutFRxjqWyNUMOwI=',
        'https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_red_fort_l_341_817.jpg',
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
        'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
        'https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg',
        'https://www.shutterstock.com/image-photo/plitvice-lakes-croatia-beautiful-place-260nw-1050138794.jpg',
        'https://media.istockphoto.com/id/488358624/photo/peneda-geres-national-park.jpg?s=612x612&w=0&k=20&c=IW62P3lokM7WWBs4pmiUMyLh_MJwutFRxjqWyNUMOwI=',
        'https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_red_fort_l_341_817.jpg'
    ];
    const shuffled = images.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 12);
}
  return (
    <>
     {!gameStarted&&<button onClick={()=>setGameStarted(true)}>Start Game</button>} 
     {gameStarted&&<Game images={getRandomImages()}/>}
    </>
  )
}

export default App
