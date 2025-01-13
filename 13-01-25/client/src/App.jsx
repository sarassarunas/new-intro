import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SingleVid from './pages/SingleVid.jsx';
import Admin from './pages/Admin.jsx';
import './App.css'

function App() {
 

  return (
    <>
      <h1>Kazkada cia bus navi</h1>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/single-vid/:id' element={<SingleVid/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
