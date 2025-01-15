import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

const handleSubmit = (e) => {
  e.preventDefault();

  // Kuomet norime persiusti failo duomenis, siunciame formdata objekta is karto!
  const data = new FormData(e.target);

  axios.post('/api', data)
    .then(resp => console.log(resp));
}

  return (
    <>
      <h1>eksperimental fields</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' name='name' />
        <input type="text" placeholder='last name' name='lastName' />
        <input type="file" name='file' />
        <div>
          <button>submit</button>
        </div>
      </form>
    </>
  )
}

export default App
