import { useState } from "react";

export default function BookingFormComponent( {onAddBooking} ){

    const [ bookingForm, setBookingForm] = useState({
        name: "",
        email: "",
        location: "",
        eventDate: "",
        eventTime: "",
    });

    function handleChange(e) {
        setBookingForm({
            ...bookingForm,
            [e.target.name]:e.target.value
        });
    }

   function handleSubmit(e) {
    e.preventDefault();
    onAddBooking(bookingForm);

    setBookingForm({
        name: "",
        email: "",
        location: "",
        eventDate: "",
        eventTime: "",
    });
   }

    return(
        <form onSubmit={handleSubmit}>
            <label> Name:    
                 <input type="text" name="name" 
                 value={bookingForm.name} onChange={handleChange}/>
            </label> <br />

            <label> Email:
                <input type="email" name="email" 
                value={bookingForm.email} onChange={handleChange}/>
            </label> <br />

            <label> Location:
                <input type="text" name="location" 
                value={bookingForm.location} onChange={handleChange}/>
            </label> <br />

            <label> Event Time:
                <input type="time" name="eventTime" 
                value={bookingForm.eventTime} onChange={handleChange}/>
            </label> <br />

            <label> Event Date:
              <input type="date" name="eventDate" 
              value={bookingForm.eventDate} onChange={handleChange}/>
            </label> <br />

            <button type="submit">Book Event</button>
        </form>
    )
}