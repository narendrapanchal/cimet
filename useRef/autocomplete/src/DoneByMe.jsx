import { useEffect, useRef, useState } from "react";

const DoneByMe=()=>{
    const domainName = [
      "okaxis",
      "BARODAMPAY",
      "rbl",
      "upi",
      "allbank",
      "aubank",
      "axisbank",
      "bandhan",
      "indus",
      "kbl",
      "federal",
      "sbi",
      "yesbank",
      "citi",
      "citigold",
      "dlb",
      "dbs",
      "freecharge",
      "hsbc",
      "icici",
      "kotak",
      "paytm",
      "ybl",
      "okhdfcbank",
      "okicici",
      "oksbi",
      "axl",
      "ibl",
      "sib",
  ];
      const ulRef=useRef(null)
      const [text, setText] = useState("");
      const [domainString,setDomainString] = useState("");
      const [selectedIndex,setSelectedIndex] = useState(0)
      const [availableDomain,setAvailableDomain] = useState([]);
      
      useEffect(()=>{
        setAvailableDomain(domainName.filter((name)=>name.toLocaleLowerCase().includes(domainString.toLocaleLowerCase())));
      },[domainString])


      function handleChange(e) {
        const { value } = e.target;
        if(value[0]!="@"&&value.split("@").length<=2&&value.split(" ").length<2&&!containsSpecificChar(value)){
          setText(value);
          setSelectedIndex(0);
          if (value.includes("@")) {
            setDomainString(value.split("@")[1]);
          }
        }
        
      }
      const handleSelect = (index=selectedIndex)=>{
        const str= availableDomain[index];
        setSelectedIndex(index);
        setText((prev)=>prev.split("@")[0]+"@"+str);
        setAvailableDomain([]);
      }
      function handleKeyDown(e){
        const {key,keyCode} =e;
        console.log("key,keyCode",key,keyCode);
        if(key==="ArrowDown"){
          ulRef.current.scrollBy(0, 18);
          setSelectedIndex((prev)=>{
            if(prev+1<availableDomain.length){
              prev++;
            }
            return prev
          });
        }else if(key==="ArrowUp"){
          setSelectedIndex((prev)=>{
            if(prev-1>=0){
              prev--;
            }
            return prev
          });
          ulRef.current.scrollBy(0, -18);

        }else if(key==="ArrowRight"&& availableDomain.length>0){
          handleSelect();
        }
      }
      function containsSpecificChar(str) {
        // Define a regex pattern for the special characters
        const regex = /[!#$%^&*()-+]/;
        return regex.test(str);
    }
    
      return (
        <div>
          { (text.includes("@")&&availableDomain.length> 0)&& (
            <ul ref={ulRef}>
              {availableDomain.map((domain, index) => (
                <li key={index} onClick={()=>handleSelect(index)} className={index==selectedIndex?'selected':undefined}>
                  {domain}
                </li>
              ))}
            </ul>
          )}
          <span className="background-span">{availableDomain.length>0&&text.includes("@")?`${text.split("@")[0]}@${availableDomain[selectedIndex]}`:""}</span>
          <input 
            value={text} 
            onChange={handleChange} 
            onKeyDown={handleKeyDown} // Keep text intact on blur
          />
        </div>
      );
    }
    export default DoneByMe;