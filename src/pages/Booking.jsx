import axios from "axios";
import { useState, useEffect } from "react";

export default function BookingForm() {
    const [ booking, setBooking ] = useState([]);
    const [ loading, setLoding] = useState(true);

    useEffect(() => {
        async function getBookingData() {
            let res = await axios.get('http://localhost:3000/booking');
            setBooking(res.data);
            setLoding(false);

            console.log(res.data);
        }
        getBookingData(); 

    }, [])



    return(
        <>
          <h2> Booking Event Form </h2>
         { loading ? (
            <p>Loading..</p>
         ) : (
            booking.map((el) => {
                return(
                    <div key={el._id}>
                        <h3>{el.name}</h3>
                        <p>Email: {el.email}</p>
                        <p>Location: {el.location}</p>
                        <p>Event Date: {el.enentDate}</p>
                        <p>Event Time: {el.eventTime}</p>
                    </div>
                )
            })
         )}
        </>
    );
}