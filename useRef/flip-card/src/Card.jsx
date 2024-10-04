const Card=({data,handleClick})=>{
    return   <div className="flip-card" onClick={()=>{
      if(data.fliped==true ||data.clicked==true){
        return ;
      }
      
      handleClick(data.index,{...data})}}>
    <div className={`flip-card-inner ${data.clicked?" fliped":undefined}`}>
      <div className="flip-card-front">
        ?
      </div>
      <div className={"flip-card-back"}>
      <img src={data.src} alt="Avatar" className="avatar"/>
      </div>
    </div>
  </div> 
}
export default Card