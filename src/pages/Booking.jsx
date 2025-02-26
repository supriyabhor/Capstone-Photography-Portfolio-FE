import axios from "axios";
import { useState, useEffect } from "react";
import BookingFormComponent from "../components/BookingForm";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
    const navigate = useNavigate();
    const [ booking, setBooking ] = useState([]);
    const [ loading, setLoding] = useState(true);
    const [showData, setShowData] = useState(false);
    const [ selectedBooking, setSelectedBooking] = useState({});
  

    useEffect(() => {
    async function getBookingData() {
            let res = await axios.get('http://localhost:3000/booking');
            setBooking(res.data);
            setLoding(false);
            console.log(res.data);
        }
        getBookingData(); 

    }, [])

    async function handleAddBooking(newBooking) {
        try {
            const res =await axios.post('http://localhost:3000/booking', newBooking);
            const newBookingId = res.data._id; // Retrieve the _id of the newly created booking
            setBooking([...booking, { ...newBooking, _id: newBookingId }]);
            
           // setBooking([...booking,  newBooking]);
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    }

    async function handleEditBooking(id, updateBooking) {
        try {
            console.log("Data Updated Successfully...");
          const res = await axios.put(`http://localhost:3000/booking/${id}`, updateBooking);
          const updatedBookingList = booking.map((booking) => (booking._id === id ? res.data : booking));
          setBooking(updatedBookingList);
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      }

    async function handleDeleteBooking(id) {
        try {
            console.log("Data is Deleted...");
            const res = await axios.delete(`http://localhost:3000/booking/${id}`);
            setBooking(booking.filter((booking) => booking._id !== id));
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    }

    function handleShowData() {
        setShowData(!showData);  //Toggle showData
    }

    function handleEdit(booking) {
        console.log(booking);
    setSelectedBooking(booking);


  }

    return(
        <>
          <h2> Booking your Event here....</h2>
          
            
        <BookingFormComponent
          onAddBooking={handleAddBooking}
          onEditBooking={handleEditBooking}
          booking={selectedBooking}
        />
       
         
       <button onClick={handleShowData}> {showData ? 'Hide All Bookings' : 'Show All Bookings'} </button>
         {showData && (
            <div>
         { loading ? (
            <p>Loading..</p>
         ) : (
            booking.map((el, i) => {
                return(
                  <div className="booking-data" key={el._id || i}>
                  <h3>{el.name}</h3>
                  <p>Email: {el.email}</p>
                  <p>Location: {el.location}</p>
                  <p>Event Date: {el.eventDate}</p>
                  <p>Event Time: {el.eventTime}</p>
                  <button onClick={() => handleEdit(el)}>Edit</button>
                
                  <button onClick={() => handleDeleteBooking(el._id)}>Delete</button>
                </div>
                )
              })
            )}
           </div>
         )}

        </>
    );
}