import { useState } from 'react'
import Search from '../components/searches/Search';
import KryziaiNuliai from '../components/xo/KryziaiNuliai';
import './App.css'


function App() {
  
  let [nr, setNumber] = useState(0);

  function changeNrPlus(e) {
    // setNumber(++nr);
    console.log(e);
    if(e.target.innerText === `+1`) {
      setNumber(++nr);
    } else if (e.target.innerText === `-1`) {
      setNumber(--nr);
    }
    // console.log(nr + e.target.innerText);
  }
  // function changeNrMinus(e) {
  //   setNumber(--nr);
  //   console.log(e);
  // }

  return (
    <>
      <div className="result">{nr}</div>
      <button onClick={changeNrPlus}>+1</button>
      <button onClick={changeNrPlus}>-1</button>
      <div className="paieska">
        <Search/>
      </div>
      <div className="kryziaiNuliai">
        <KryziaiNuliai/>
      </div>
    </>
  )
}

export default App
