import axios from "axios";
import { useEffect } from "react";

export default function BookingForm() {

    useEffect(() => {
        async function getBookingData() {
            let res = await axios.get('http://localhost:3000/booking');

            console.log(res.data);
        }
        getBookingData(); 

    }, [])


    return(
        <>
          <h1> Booking Event Form</h1>
        </>
    );
}