import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/Home';
import BookingForm from './pages/Booking';
import PhotographerForm from './pages/Photographer';
import './App.css'

function App() {


  return (
    <>
       <nav>
        <Link to= {'/'} >  Home  </Link> |      |
        <Link to= {'/booking'} >  Booking Event  </Link> |       |
        <Link to= {'/Photographer'} >  Create Portfolio  </Link>
       </nav>

       <Routes>
          <Route path='/' element = { <HomePage /> }/>
          <Route path='/Booking' element = { <BookingForm /> }/>
          <Route path='/Photographer' element = { <PhotographerForm /> }/>
          <Route path='*' element = { <h1> 404: Not Found </h1> }/>

       </Routes>
      
    </>
  )
}

export default App
