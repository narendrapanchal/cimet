async function sequentialDelayedCounting(limit = 5) {
    for(let i=1;i<=limit;i++){
        const randomSeconds=Math.ceil(Math.random()*(2000)+1000);
        await new Promise((resolve)=>{
            setTimeout(()=>{
                console.log(`Waiting ${randomSeconds}ms before logging ${i}`);
                console.log(`logging ${i}`)
                resolve("complete")
            },randomSeconds)
        })
    }

    try {
    } catch (error) {}
  }
  
  sequentialDelayedCounting(6);
