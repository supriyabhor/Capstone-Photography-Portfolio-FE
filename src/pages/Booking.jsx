import axios from "axios";
import { useState, useEffect } from "react";
import BookingFormComponent from "../components/BookingForm";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
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
            setBooking([...booking, newBooking]);
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    }

    async function handleEditBooking(id, updateBooking) {
        try {
          const res = await axios.put(`http://localhost:3000/booking/${id}`, updateBooking);
          const updatedBookingList = booking.map((booking) => (booking._id === id ? res.data : booking));
          setBooking(updatedBookingList);
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      }



    function handleShowData() {
        setShowData(true);
    }
    function handleEdit(booking) {
    setSelectedBooking(booking);
  }

    return(
        <>
          <h2> Booking your Event here....</h2>
          
            {selectedBooking && selectedBooking._id ? (
        <BookingFormComponent
          onAddBooking={handleAddBooking}
          onEditBooking={handleEditBooking}
          booking={selectedBooking}
        />
      ) : (
        <BookingFormComponent onAddBooking={handleAddBooking} />
      )}
         
          <button onClick={handleShowData}>Show All Bookings</button>
         {showData && (
            <div>
         { loading ? (
            <p>Loading..</p>
         ) : (
            booking.map((el, i) => {
                return(
                    <div key={el._id || i}>
                        <h3>{el.name}</h3>
                        <p>Email: {el.email}</p>
                        <p>Location: {el.location}</p>
                        <p>Event Date: {el.enentDate}</p>
                        <p>Event Time: {el.eventTime}</p>
                        <button onClick={() => handleEdit(el)}>Edit</button>
                       <button>delete</button>

                    </div>
                )
              })
            )}
           </div>
         )}

        </>
    );
}