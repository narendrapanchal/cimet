function createCounterPromise(maxCount = 3, timeoutMs = 5000) {  
    let clrInt;
    
    return {promise:new Promise((resolve, reject) => {
        let counter=1;
        let interval=setInterval(()=>{
            if(counter<=maxCount){
                console.log(`Counter ${counter}`);
                if(counter==maxCount){
                    clearInterval(interval);
                    resolve(`Done ! Counter reached  ${maxCount}`);
                }
                counter++;
            }
        },1000)

        clrInt=function(){
        if(interval){
            setTimeout(()=>{
                console.log("canceled after "+counter+" seconds")
            clearInterval(interval);
            },1)
        }
       } 
       setTimeout(()=>{
        if(interval){
             clearInterval(interval);
        }
    },timeoutMs+1)
    return {interval,cancel:clrInt}

    }),cancel:clrInt    
  }
}
  
  // Usage:
  const { promise, cancel } = createCounterPromise(10, 15000);
  
  promise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  
  // OUTPUT:
  // Counter 1
  // Counter 2
  // Counter 3
  // Counter 4
  // Counter 5
  // Counter 6
  // Counter 7
  // Counter 8
  // Counter 9
  // Counter 10
  // Done ! Counter reached 10
  
  
  
  // Cancel after 2 seconds
//   setTimeout(cancel, 2000); //This should cancel the operation after 2 seconds with message "Operation canceled after 2 seconds"