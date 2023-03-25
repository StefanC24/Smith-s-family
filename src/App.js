import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import CharacterList from './components/characterList/CharacterList';
import NavBar from './components/navbar/NavBar'
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import CharacterDetails from './components/characterDetails/CharacterDetails';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/characters' element={<CharacterList/>} />
        <Route path='/characters/:id' element={<CharacterDetails/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='*' element={<Navigate to='/characters' replace/>} />
      </Routes>  
      {location.pathname !=='/about' ?<Footer/> : null}
    </div> 
  );
}

export default App;
