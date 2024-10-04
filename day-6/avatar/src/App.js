import './App.css';
import Popup from './components/Popup';
import { useState } from 'react';
import PopupList from './components/PopupList';
import CreateName from './components/CreateName';
import ShowName from './components/ShowName';

function App() {
  const [dataList,setDataList]=useState([]);
  const [showPopup,setShowPopup]=useState(false);
  function handlePopup(){
    setShowPopup(!showPopup);
  }
  function addName(newData){
    setDataList((prev)=>[...prev,newData]);
    handlePopup();
  }
  function handleDelete(id){
    setDataList((prev)=>{
      return prev.filter((item,index)=>item.id!==id)
    })
  }
  return (
    <div className="App">
     {showPopup?<Popup handlePopup={handlePopup} addName={addName}/>:<PopupList>
      {dataList.map((ele,ind)=><ShowName handleDelete={handleDelete} data={ele}/>)}
      <CreateName handlePopup={handlePopup}/>
      </PopupList>}
    </div>
  );
}

export default App;
