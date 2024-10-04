import React, { useRef, useState } from 'react'

function AgeValidator({handleClick}) {
    const [age,setAge]=useState(null);
    const [isValid,setIsValid] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        handleClick(isAboveOrEqual18(age))
    }
    const [showDeterminationText,setDeterminationText]=useState(false)
  return (
    <div>
        <h1 className='text-3xl font-bold'>Find out if you are eligible to use our service!</h1>
        <p className='font-bold'>What is your date of birth?</p>
      <form onSubmit={handleSubmit}>
      <input  className='p-2 w-full border border-l-gray-950'type="date" required={true} onChange={(e)=>{
        console.log("e.target.value",e.target.value);
        setAge(new Date(e.target.value));
      }}/>
      <br/>
      <button className='px-10 py-2 font-bold my-2 text-green-950 border-2  border-emerald-950 hover:text-white hover:bg-green-950' type="submit" >Check</button>
      </form>
      <button className='text-orange-300 underline hover:text-green-950 mt-2' onClick={()=>setDeterminationText((prev)=>!prev)}>Why do we need to know this?</button>
      {showDeterminationText&&<p className='p-2 mt-4 border border-orange-300'>
        Your date of birth determines if you can use our platform. You must be 18 years old to use our services.
      </p>}
    </div>
  )
}
function isAboveOrEqual18(birthDate, currentDate = new Date()) {
    const birth = new Date(birthDate);
    const current = new Date(currentDate);
    let age = current.getFullYear() - birth.getFullYear();
    const monthDiff = current.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && current.getDate() < birth.getDate())) {
        age--;
    }
    return age >= 18;
}

export default AgeValidator
