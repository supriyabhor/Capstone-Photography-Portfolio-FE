
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingFormComponent({ onAddBooking, onEditBooking, booking }) {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
 

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    location: "",
    eventDate: "2024-03-16", // Default date
    eventTime: "10:00 AM", // Default time
  });

  useEffect(() => {
    console.log(booking);
    if (booking && booking.name) {
      setBookingForm({
        name: booking.name || "",
        email: booking.email || "",
        location: booking.location || "",
        eventDate: booking.eventDate || "2024-03-16", // Default date
        eventTime: booking.eventTime || "10:00 AM", // Default time
      });
      setEditing(true);
    }
  }, [booking]);

  function handleChange(e) {
    const { name, value } = e.target;
    setBookingForm({ ...bookingForm, [name]: value });
  }

 

  function resetForm() {
    setBookingForm({
      name: "",
      email: "",
      location: "",
      eventDate: "2024-03-16",
      eventTime: "10:00 AM",
    });
  
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editing) {
      onEditBooking(booking._id, bookingForm);
      navigate("/booking");
    } else {
      onAddBooking(bookingForm);
      navigate("/booking");
    }
   resetForm(); // Call the resetForm function
  
  }

  

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label> Name: </label>
      <input type="text" name="name" value={bookingForm.name} onChange={handleChange} />
      <br />
      <label> Email: </label>
      <input type="email" name="email" value={bookingForm.email} onChange={handleChange} />
      <br />
      <label> Location: </label>
      <input type="text" name="location" value={bookingForm.location} onChange={handleChange} />
      <br />
      <label> Event Date: </label>
      <input type="date" name="eventDate" value={bookingForm.eventDate} onChange={handleChange} />
      <br />
      <label> Event Time: </label>
      <input type="text" name="eventTime" value={bookingForm.eventTime} onChange={handleChange} />
      <br />
      <button type="submit">{editing ? "Save Changes" : "Book Event"}</button>
    </form>
  );
}