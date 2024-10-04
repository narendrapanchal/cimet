let array=[];
let currentIndex=0;
let dynamicCircle=document.getElementById("dynamicCircle");
const dynamicColors=["#000000","green","red","yellow","#928488"];
let randomColorArray=[];
let undoDiv=[];
dynamicCircle.addEventListener("click", function(e){
    let x=e.clientX;
    let y=e.clientY;
        array.push(currentIndex);
        let circle=document.createElement("div");
        circle.style.position="absolute";
        circle.style.left=x-20+"px";
        circle.style.top=y-20+"px";
        circle.style.width="20px";
        circle.style.height="20px";
        const randomColor=dynamicColors[Math.ceil(Math.random()*dynamicColors.length-1)];
        circle.style.backgroundColor=randomColor;
        circle.style.borderRadius="50%";
        dynamicCircle.appendChild(circle);
        document.getElementById("reset").disabled=false;
        document.getElementById("undo").disabled=false;
        document.getElementById("redo").disabled=true;
        undoDiv=[];

});
document.getElementById("reset").addEventListener("click",(e)=>{
    e.stopPropagation()
    array=[];
    currentIndex=0;
    dynamicCircle.innerHTML="";
    document.getElementById("dynamicCircle").innerHTML="";
    document.getElementById("reset").disabled=true;
    document.getElementById("undo").disabled=true;
    document.getElementById("redo").disabled=true;
});
document.getElementById("undo").addEventListener("click",(e)=>{
    e.stopPropagation();
    let circles=document.querySelectorAll("#dynamicCircle > div");
    undoDiv.push({x:circles[circles.length-1].style.left,y:circles[circles.length-1].style.top,color:circles[circles.length-1].style.backgroundColor});
    console.log({x:circles[circles.length-1].style.left,y:circles[circles.length-1].style.top,color:circles[circles.length-1].style.backgroundColor})
    circles[circles.length-1].remove();
    if(circles.length==1){
        document.getElementById("reset").disabled=true;
        document.getElementById("undo").disabled=true;
        document.getElementById("redo").disabled=true;
        return;
    }

    document.getElementById("redo").disabled=false;
})

document.getElementById("redo").addEventListener("click",(e)=>{
    e.stopPropagation();
    
    document.getElementById("reset").disabled=false;
    document.getElementById("undo").disabled=false;

    

    let circle=document.createElement("div");
    circle.style.position="absolute";
    circle.style.left=undoDiv[0].x;
    circle.style.top=undoDiv[0].y
    circle.style.width="20px";
    circle.style.height="20px";
    circle.style.backgroundColor=undoDiv[0 ].color;
    circle.style.borderRadius="50%";
    document.getElementById("dynamicCircle").appendChild(circle);
    undoDiv.shift();
    if(undoDiv.length==0){
        document.getElementById("redo").disabled=true;
        return;
    }
})