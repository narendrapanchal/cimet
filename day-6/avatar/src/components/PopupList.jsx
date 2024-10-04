import "../styles/PopupList.css";
const PopupList=({children})=>{
    return <div className="popup-overlay-list">
        <div className="popup-list">

        {children}
        </div>
    </div>
}
export default PopupList;