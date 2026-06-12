import { useState } from "react";
import axios from "axios";

import "../css/contact.css"

function Contact(){
const [formData, setFormData] = useState({
name: "",
email: "",
phone: "",
message: ""
});

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prevData) => ({
...prevData,
[name]: value
}));
};

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    await axios.post(
      "https://studio97-web.onrender.com/api/contact/",
      formData
    );

    alert("Inquiry Sent Successfully ✅");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

  } catch (error) {

    console.log(error);

    alert("Failed To Send Inquiry ❌");

  }

};
return(

<div className="contact">

<div className="contact-left">

<p className="small-title">
GET IN TOUCH
</p>

<h1>
Let's Talk About <br/>
Your Ideas
</h1>

<p className="contact-text">

Have questions or want to know more about our photography services?
Send us an inquiry and we'll contact you soon.

</p>

<div className="contact-details">

<div className="detail-box">
<h3>📞 Phone</h3>
<p>+91 9876543210</p>
</div>

<div className="detail-box">
<h3>📧 Email</h3>
<p>studio97photography@gmail.com</p>
</div>

<div className="detail-box">
<h3>📍 Address</h3>
<p>Anand, Gujarat</p>
</div>

<div className="detail-box">
<h3>🕒 Working Hours</h3>
<p>Mon-Sun : 9AM - 8PM</p>
</div>
<div className="detail-box">
<h3>Owner:</h3>
<p>sneha prajapati</p>
</div>

</div>

</div>



<div className="contact-right">

<h2>Send Us An Inquiry</h2>

<form onSubmit={handleSubmit}>

<div className="two-input">

<input
type="text"
placeholder="Your Name"
name="name"
value={formData.name}
onChange={handleChange}
/>

<input
type="email"
placeholder="Your Email"
name="email"
value={formData.email}
onChange={handleChange}
/>

</div>

<input
type="tel"
placeholder="Phone Number"
name="phone"
value={formData.phone}
onChange={handleChange}
/>

<textarea
placeholder="Write your inquiry..."
name="message"
value={formData.message}
onChange={handleChange}
>

placeholder="Write your inquiry..."

</textarea>

<button type="submit">
  Send Inquiry
</button>

</form>

</div>

</div>

)

}

export default Contact