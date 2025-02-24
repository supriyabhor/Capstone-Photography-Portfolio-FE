import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/Home';
import BookingForm from './pages/Booking';
import PhotographerForm from './pages/Photographer';
import PhotoGallery from './pages/PhotoGallery';
import LoginPage from './pages/Login';
import './App.css'

function App() {


  return (
    <>
       <nav>
        <Link to= {'/'} >  Home  </Link> |      |
        <Link to= {'/booking'} >  Booking Event  </Link> |       |
        <Link to= {'/PhotoGallery'} >  Photo Gallery  </Link> |  |
        <Link to ={'/LoginPage'} >  Login </Link>
       </nav>

       <Routes>
          <Route path='/' element = { <HomePage /> }/>
          <Route path='/Booking' element = { <BookingForm /> }/>
          <Route path='/Photographer' element = { <PhotographerForm /> }/>
          <Route path='/PhotoGallery' element = { <PhotoGallery /> }/>
          <Route path='/LoginPage' element = { <LoginPage /> }/>
          <Route path='*' element = { <h1> 404: Not Found </h1> }/>

       </Routes>
      
    </>
  )
}

export default App
