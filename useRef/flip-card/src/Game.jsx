import { useEffect, useState } from "react"
import Card from "./Card"

const Game=({images})=>{
    const [score,setScore]=useState(0);
    const [totalClicks,setTotalClisks]=useState(0);
    const [arr,setArr]=useState(images.map((ele,ind)=>{
        return {
            clicked:false,
            src:ele,
            index:ind,
            fliped:false
        }
    }))
    const [dumbArray,setDumbArray]=useState([]);
    const handleReverse=(indOne,indTwo)=>{
        setTimeout(()=>{
            setArr((prev)=>{
                let temp=[...prev]
                temp[indOne].clicked=false;
                temp[indTwo].clicked=false;
                return [...temp];
            })
        },1000)
    }
    const handleClick=(index,obj)=>{
        setTotalClisks(prev=>prev+1);
        if(dumbArray.length==0){
            setArr((prev)=>{
                let temp=[...prev]
                temp[index].clicked=true;
                return [...temp];
            });
            setDumbArray([obj]);
        }else{
            const dumbItem=dumbArray[0];
            if(dumbItem.src==obj.src){
                setDumbArray([]);
                setArr((prev)=>{
                    let temp=[...prev]
                    temp[index].fliped=true;
                    temp[index].clicked=true;
                    temp[dumbItem.index].fliped=true;
                    return [...temp];
                })
                setScore(prev=>prev+1);
            }else{
                const dumbItem=dumbArray[0];
                handleReverse(index,dumbItem.index);
                setArr((prev)=>{
                    let temp=[...prev]
                    temp[index].clicked=true;
                    return [...temp];
                })
                setDumbArray([])
            }

        }
    }
    const [counter,setCounter]=useState(60);
    useEffect(()=>{
        const timer=setInterval(()=>{
            if(counter<=0){
                alert("Game Over!")
            }
            setCounter(prev=>prev-1)
        },1000)
        return ()=>clearInterval(timer)
        
    },[]);

    return <div>
        <h1>Time Remaining: {counter}</h1>
        <h2>Your score is ({score}/{images.length/2})</h2>
        <h2>Total clicks are {totalClicks}</h2>
        <div className="grid-container">
        {arr.map((data,index)=><Card key={index} data={data}  handleClick={handleClick}/>)}
    </div>
    </div>
}
export default Game