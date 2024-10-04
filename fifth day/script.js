const musicData=[
    {src:"./assets/crash.png",music:"./assets/crash.mp3"},
    {src:"./assets/kick.png",music:"./assets/kick.mp3"},
    {src:"./assets/snare.png",music:"./assets/snare.mp3"},
    {src:"./assets/tom.png",music:"./assets/tom.mp3"}
];
let rightDiv=document.getElementById("right");

window.addEventListener("keydown",function(){
    const random=Math.ceil(Math.random()*(musicData.length-1));
    let audio=new Audio(musicData[random].music);
    audio.play();
})
musicData.forEach(({src,music})=>{
    let img=document.createElement("img");
    img.src=src;
    img.addEventListener("click",()=>{
        let audio=new Audio(music);
        audio.play();
        console.log("Audio",audio);
    });
    rightDiv.appendChild(img);
})