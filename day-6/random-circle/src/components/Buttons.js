const Buttons=({handleRedo,handleUndo,handleReset,data})=>{
    return(
        <div className="buttons">
            <button onClick={handleReset} disabled={data.length==0}>Reset</button>
            <button onClick={handleUndo} disabled={data.length==0}>undo</button>
            <button onClick={handleRedo} disabled={data.length==0}>redo</button>
        </div>
    )
}
export default Buttons