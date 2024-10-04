import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AgeValidator from './AgeValidator'
import Eligible from './Eligible'

function App() {
  const [eligibleText,setEligibleText]=useState("");
  const [showEligibility,setShowEligibility] = useState(false);
  const handleClick = (eligible) => {
    setEligibleText(eligible? "You are over 18, which means your eligible to use" : "ou are below 18, which means your not eligible to use");
    setShowEligibility(true);
  }
  const handleBack=()=>{
    setEligibleText("");
    setShowEligibility(false);
  }

  return (
    <>
      <div className='shadow-2xl p-4 text-left '>
        {!showEligibility?<AgeValidator handleClick={handleClick}/>:
        <Eligible handleBack={handleBack} text={eligibleText}/>}
      </div>
    </>
  )
}

export default App
