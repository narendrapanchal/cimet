import { useState } from "react";
import "../styles/AddName.css";

function Popup({ handlePopup,addName}) {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleCancel() {
    handlePopup()
  }
  function handleAddName() {
    const colorCombinations = [
        { background: '#FF5733', color: '#FFFFFF' },
        { background: '#4CAF50', color: '#FFFFFF' },
        { background: '#2196F3', color: '#FFFFFF' },
        { background: '#FFC107', color: '#000000' },
        { background: '#9C27B0', color: '#FFFFFF' } 
    ];
    handleCancel();
    console.log('narendra1')
    const randomCombination = colorCombinations[Math.floor(Math.random() * colorCombinations.length)];
    console.log('narendra2')

    const id=Date.now();
    console.log('narendra3')

    addName({...randomCombination, id,name:text});
    console.log('prateek@')

    setText("");
    console.log('narendra4')

    console.log(handlePopup,"cLLLLLLLLLLLLLLLLLL")
  }
  return (
    <div className="popup-overlay" >
      <div className="popup">
        <div>
          <button onClick={handleCancel}>&times;</button>
        </div>
        <input value={text} onChange={handleChange} />
        <div>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleAddName}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
