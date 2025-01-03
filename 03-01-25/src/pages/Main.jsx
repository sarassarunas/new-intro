import { useState, useRef } from "react";

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


function MainPage() {
    const [psw,setPsw] = useState(``);
    const lengthInput = useRef();
    const [length,setLength] = useState(10);
    const [symbolCheck,setSymbolCheck] = useState(false);
    const [numberCheck,setNumberCheck] = useState(false);

    const abc = `AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz`;
    const symbols = `~!@#$%^&*()_-+=}{][;:'"<>?,./`;
    const numbers = `1234567890`;
    
    
    function pswGen() {
        
        let rndPsw =``;
        let rnd = 0;
        for(let i=1;i<=length;i++) {
            if(symbolCheck && numberCheck) {
                rnd = random(1,3); 
            } else if (symbolCheck && !numberCheck) {
                rnd = random(1,2);
            } else if (!symbolCheck && numberCheck) {
                if(random(1,2)===1) {rnd=1} else {rnd=3};
            } else {rnd=1}

            if(rnd===1) {
                rndPsw+=abc[random(0,abc.length-1)];
            } else if (rnd===2) {
                rndPsw+=symbols[random(0,symbols.length-1)];
            } else {
                rndPsw+=numbers[random(0,numbers.length-1)];
            }
            
            
        }
        return (setPsw(rndPsw))
    }
    
    
    return(
        <>
            <h1>Random pasword generator</h1>
            <div>
                <label htmlFor="">Psw length: </label>
                <input type="number" ref={lengthInput} defaultValue={10} onChange={()=>setLength(lengthInput.current.value)}/>
            </div>
            <div>
                <label htmlFor="">Do want symbols?</label>
                <input type="checkbox" name="symbols" id="" onChange={()=>setSymbolCheck(!symbolCheck)}/>
                <label htmlFor="">Do want numbers?</label>
                <input type="checkbox" name="numbers" id="" onChange={()=>setNumberCheck(!numberCheck)}/>
            </div>
            <button onClick={pswGen}>Generate</button>
            <div className="my-3"><span>Your password: </span>{psw}</div>
        </>
    )
}
export default MainPage;