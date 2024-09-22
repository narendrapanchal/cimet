let input=document.querySelector("input");
let popup=document.getElementById("popup");
let names=document.getElementById("names");
document.getElementById("addName").addEventListener("click",(e)=>{
names.style.display="none";
popup.style.display="flex";
})
function handleCancel(){
    popup.style.display="none";
    names.style.display="flex";
}
document.getElementById("cancel").addEventListener("click",handleCancel);
document.getElementById("cancelButton").addEventListener("click",handleCancel);
document.getElementById("add").addEventListener("click",(e)=>{
    document.getElementById("addName").insertAdjacentHTML("beforebegin",`<div>${input.value[0]}</div>` );
    input.value="";
    handleCancel()
})

input.addEventListener("input",(e)=>{
    let value=e.target.value;
    let add=document.getElementById("add")
    if(value!=""){
        add.classList.remove("disabled");
    }else{
        add.classList.add("disabled"); 
    }
    add.disabled=value!=""?false:true;
})