import { useState } from 'react'
import './KryziaiNuliai.css';

function KryziaiNuliai() {
    let [buttons, setButtons] = useState();
    let [ended, setEnded] = useState(false);
    let [x, setX] = useState(true);
    // console.log('Rendered', x)
    // setEnded(true);
    const start = () => {
        const data = []

        for(let i = 0; i < 9; i++) {
            data.push(
                <button 
                    key={i} 
                    onClick={handleClick}
                ></button>
            )
        }

        setButtons(data);
        console.log(data);
        // console.log(buttons);
        // console.log(ended);
        
    }

    const handleClick = (e) => {
        
        if(x) {
            e.target.textContent = 'x';
            setX(false);
            // console.log(buttons);
            // console.log(`X state `+x);
            // setEnded(true);
            // console.log(`ended? `+ended);
        } else {
            e.target.textContent = '0';
            setX(true);
        }
    }

    return (
        <>
            <h1>Kryžiukai nuliukai</h1>
            <button 
                className="btn btn-primary"
                onClick={start}
            >Pradėti</button>
            <div>Ejimas: {x?`X`:`0`}</div>
            <div className="zaidimas">
                {buttons}
            </div>
            
        </>
    );
}

export default KryziaiNuliai;