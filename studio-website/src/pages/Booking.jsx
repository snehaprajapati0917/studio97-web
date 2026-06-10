import "../css/booking.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";


function Booking(){
const navigate = useNavigate()
const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  package: "",
  from_date: "",
  to_date: "",
  location: "",
  people: "",
  requirements: ""
})

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}
const handleSubmit = async (e) => {

  e.preventDefault()

  try {

    const response = await axios.post(
      "https://studio97-web.onrender.com/api/booking/",
      formData
    )

    
alert("Booking Successful ✅");

console.log("Navigate Running");

navigate("/");
    console.log(response.data)

  }

  catch(error){

    console.log(error)

    alert("Booking Failed ❌")

  }

}
return(

<div className="booking">

<div className="booking-left">

<p className="small-title">

BOOK YOUR SESSION

</p>

<h1>

Reserve Your Perfect Shoot

</h1>

<p>

Book your wedding, pre-wedding, birthday,
festival or cinematic shoot with us.

</p>

<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Your Name"
name="name"
value={formData.name}
onChange={handleChange}
required
/>

<input
type="tel"
placeholder="Phone Number"
name="phone"
value={formData.phone}
onChange={handleChange}
required
/>

<input
type="email"
placeholder="Email"
name="email"
value={formData.email}
onChange={handleChange}
required
/>

<select
name="package"
value={formData.package}
onChange={handleChange}
required
>
<option value="">Select Package</option>
<option value="Wedding Package">Wedding Package</option>
<option value="Pre-Wedding Package">Pre-Wedding Package</option>
<option value="Birthday Package">Birthday Package</option>
<option value="Festival Package">Festival Package</option>
<option value="Cinematic Package">Cinematic Package</option>
</select>


<div className="date-section">

<div>

<label>

From Date

</label>

<input
type="date"
name="from_date"
value={formData.from_date}
onChange={handleChange}
required
/>

</div>


<div>

<label>

To Date

</label>

<input
type="date"
name="to_date"
value={formData.to_date}
onChange={handleChange}
required
/>

</div>

</div>


<input
type="text"
placeholder="Location"
name="location"
value={formData.location}
onChange={handleChange}
required
/>

<input
type="number"
placeholder="Number of People"
name="people"
value={formData.people}
onChange={handleChange}
/>

<textarea
rows="4"
placeholder="Special Requirements"
name="requirements"
value={formData.requirements}
onChange={handleChange}
></textarea>

<button type="submit">

Confirm Booking

</button>

</form>

</div>


<div className="booking-right">

<div className="summary-card">

<h2>

Booking Summary

</h2>

<p>

📷 Wedding Package

</p>

<p>

📅 Select dates

</p>

<p>

📍 Location

</p>

<p>

👥 Guests

</p>

<h3>

Estimated Price:
₹29,999

</h3>

</div>

</div>

</div>

)

}

export default Booking