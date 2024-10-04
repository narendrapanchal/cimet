const RandomCircle=({data})=>{
    return <div className="dynamic-div" style={{background:data.background,left:`${data.left}px`,top:`${data.top}px`}}></div>
}
export default RandomCircle