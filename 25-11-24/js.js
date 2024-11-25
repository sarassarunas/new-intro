document.write(`hello, this is timer:`);

let sekundes = 35;


let timer = setInterval(() => {
    let minutes = Math.floor(sekundes / 60);
    if(sekundes===0) {
        document.querySelector('.clock').innerHTML = `<h1>${minutes} : ${sekundes%60} Time is UP!</h1>`;
        clearInterval(timer);
        
    }
    
    
    document.querySelector('.clock').innerHTML = `<h1>${minutes} : ${sekundes%60}</h1>`;
    sekundes--;
    
    
}, 1000);

