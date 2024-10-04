import "../styles/ShowName.css"
const ShowName=({data,handleDelete})=>{
    return <div className="handleCancel" style={{color:data.color,background:data.background}}><button onClick={()=>{
        handleDelete(data.id)
    }}>&times;</button>{data.name[0].toUpperCase()}</div>
}
export default ShowName;