import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const data = localStorage.getItem('list');
  const item = {...JSON.parse(data)[id]};

  const [text, setText] = useState(item.text);
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);


  function handleSave() {
    const list = JSON.parse(localStorage.getItem('list'));
    list[id] = { ...item, text, isCompleted };
    localStorage.setItem('list', JSON.stringify(list));
  }

  return (
    <div>
      <h1>Edit page</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)} 
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Edit;


