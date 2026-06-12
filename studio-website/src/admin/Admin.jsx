
import { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
function Admin() {

  const [bookings, setBookings] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchBookings();
    fetchMessages();
  }, []);

  const fetchBookings = async () => {

    try {

      const response = await axios.get(
         "https://studio97-web.onrender.com/api/booking/"
      );

      setBookings(response.data);

    } catch (error) {

      console.log(error);

    }
  };
  const fetchMessages = async () => {

  try {

    const response = await axios.get(
      "https://studio97-web.onrender.com/api/contact/"
    );

    setMessages(response.data);

  }

  catch(error){

    console.log(error);

  }

}
const deleteBooking = async (id) => {

  await axios.delete(
    `https://studio97-web.onrender.com/api/booking/delete/${id}/`
  )

  fetchBookings()

}
const updateStatus = async (id, newStatus) => {

  try {

    await axios.put(
      `https://studio97-web.onrender.com/api/booking/update-status/${id}/`,
      {
        status: newStatus
      }
    );

    fetchBookings();

  } catch (error) {

    console.log(error);

  }
}


const totalBookings = bookings.length;

const pendingBookings = bookings.filter(
  booking => booking.status === "Pending"
).length;

const confirmedBookings = bookings.filter(
  booking => booking.status === "Confirmed"
).length;

const completedBookings = bookings.filter(
  booking => booking.status === "Completed"
).length;

const cancelledBookings = bookings.filter(
  booking => booking.status === "Cancelled"
).length;


  return (

    <div className="admin-container">
    

<h1 className="admin-title">
  studio 97 Dashboard
</h1>
      
      <div className="dashboard-cards">

 <div className="card">
  <h2>{totalBookings}</h2>
  <p>📷 Total Bookings</p>
</div>

<div className="card">
  <h2>{pendingBookings}</h2>
  <p>🕒 Pending</p>
</div>

<div className="card">
  <h2>{confirmedBookings}</h2>
  <p>✔️ Confirmed</p>
</div>

<div className="card">
  <h2>{completedBookings}</h2>
  <p>🏆 Completed</p>
</div>

<div className="card">
  <h2>{cancelledBookings}</h2>
  <p>🚫 Cancelled</p>
</div>

<div className="card">
  <h2>{messages.length}</h2>
  <p>✉️ Messages</p>
</div>
</div>
      <div className="table-wrapper">
         <h2 className="section-title"
      style={{
        marginTop:"50px",
        marginBottom:"20px",
        color:"#c89658"
      }}
      >Booking Details📅</h2>

      <table className="admin-table">

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Package</th>
            <th>Location</th>
            <th>People</th>
            
<th>Action</th>
<th>Status</th>
          </tr>

        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr key={booking.id}>

              <td>{booking.id}</td>
              <td>{booking.name}</td>
              <td>{booking.phone}</td>
              <td>{booking.package}</td>
              <td>{booking.location}</td>
              <td>{booking.people}</td>
              <td>
  <button
    className="delete-btn"
    onClick={() => deleteBooking(booking.id)}
  >
    Delete
  </button>
</td>
              <td>
                <select
                  className="status-select"
                  value={booking.status}
                  onChange={(e) =>
                    updateStatus(
                      booking.id,
                      e.target.value
                    )
                  }
                >
                  <option value="Pending">
                    Pending
                  </option>
                  <option value="Confirmed">
                    Confirmed
                  </option>
                  <option value="Completed">
                    Completed
                  </option>
                  <option value="Cancelled">
                    Cancelled
                  </option>
                </select>
              </td>

            </tr>

          ))}

        </tbody>

      </table>
      <h2 className="section-title"
style={{
  marginTop:"50px",
  marginBottom:"20px",
  color:"#c89658"
}}
>
Contact Messages📩
</h2>

<div className="table-wrapper">

<table className="admin-table">

<thead>

<tr>

<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Message</th>

</tr>

</thead>

<tbody>

{messages.map((message)=>(

<tr key={message.id}>

<td>{message.id}</td>

<td>{message.name}</td>

<td>{message.email}</td>

<td>{message.phone}</td>

<td>{message.message}</td>

</tr>

))}

</tbody>

</table>

</div>
</div>
</div>

  );
}

export default Admin
