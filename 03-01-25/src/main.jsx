import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Rules from './pages/Rules';
import Club from './pages/Club';
import Navigation from './components/navi/Navi';
import './index.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className='container'>
    <Navigation />
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/club' element={<Club/>}/>
      <Route path='/rules' element={<Rules/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
  </div>
  </BrowserRouter>
)
