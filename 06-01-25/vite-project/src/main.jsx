import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SingleItem from './pages/SingleItem.jsx';
import './index.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/single-item/:id' element={<SingleItem/>}/>
      </Routes>
    </div>
  </BrowserRouter>
)
