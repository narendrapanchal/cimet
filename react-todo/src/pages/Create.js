import React, { useEffect, useState } from "react";

function Create() {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem("list")) || [];
    list.push({ text, isCompleted: false });
    localStorage.setItem("list", JSON.stringify(list));
    setText("")
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <input type="text" value={text} onChange={(e)=>{
          handleChange(e)
        }} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Create;
