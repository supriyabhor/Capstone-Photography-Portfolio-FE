import axios from "axios";
import { useState, useEffect } from "react";
import BookingFormComponent from "../components/BookingForm";

export default function BookingForm() {
    const [ booking, setBooking ] = useState([]);
    const [ loading, setLoding] = useState(true);
    const [showData, setShowData] = useState(false);
    
   
    
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

    function handleShowData() {
        setShowData(true);
    }
    

    return(
        <>
          <h2> Booking your Event here....</h2>
          
          <BookingFormComponent onAddBooking={handleAddBooking}   />

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
                    </div>
                )
              })
            )}
           </div>
         )}
        </>
    );
}