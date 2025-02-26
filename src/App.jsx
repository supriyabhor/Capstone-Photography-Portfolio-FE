import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import BookingForm from './pages/Booking';
import PhotographerForm from './pages/Photographer';
import PhotoGallery from './pages/PhotoGallery';
import LoginPage from './pages/Login';
import './App.css'
import logo from './assets/Logo.svg';
import Footer from './components/Footer';

function App() {


  return (
    <>
    {/* NAV */}
    <nav>
      <div className='logo'>
         <img src={logo} alt="App Logo" className='app-logo'/>
      </div>
    </nav>

    {/* LINKS */}
       <nav>
        <Link to= {'/'} >  Home  </Link> |      |
        <Link to= {'/booking'} >  Booking Event  </Link> |       |
        <Link to ={'/LoginPage'} >  Login </Link>
       </nav>
        
    {/* ROUTES */}
       <Routes>
          <Route path='/' element = { <HomePage /> }/>
          <Route path='/Booking' element = { <BookingForm /> }/>
          <Route path='/Photographer' element = { <PhotographerForm /> }/>
          <Route path='/PhotoGallery' element = { <PhotoGallery /> }/>
          <Route path='/LoginPage' element = { <LoginPage /> }/>
          <Route path='*' element = { <h1> 404: Not Found </h1> }/>

       </Routes>

       {/* FOOTER */}
       <Footer />
      
    </>
  )
}

export default App
