let input=document.querySelector("input");
let popup=document.getElementById("popup");
let names=document.getElementById("names");
const colorCombinations = [
    { background: '#FF5733', text: '#FFFFFF' }, // Combination 1
    { background: '#4CAF50', text: '#FFFFFF' }, // Combination 2
    { background: '#2196F3', text: '#FFFFFF' }, // Combination 3
    { background: '#FFC107', text: '#000000' }, // Combination 4
    { background: '#9C27B0', text: '#FFFFFF' }  // Combination 5
];


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

    const randomCombination = colorCombinations[Math.floor(Math.random() * colorCombinations.length)];
    const newDiv = document.createElement("div");
    
    newDiv.style.background = randomCombination.background;
    newDiv.style.color = randomCombination.text;
    newDiv.innerHTML = `
        <button>&times;</button>
        ${input.value[0].toUpperCase()}
    `;
    
    const button = newDiv.querySelector("button");
    button.addEventListener("click", () => {
        newDiv.remove(); // Remove the parent div
    });
    
    document.getElementById("addName").insertAdjacentElement("beforebegin", newDiv);

    

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