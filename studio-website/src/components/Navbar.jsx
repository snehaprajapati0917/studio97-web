import "../css/navbar.css"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.jpg";

function Navbar(){
const navigate=useNavigate()

const [menu,setMenu]=useState(false)

return(

<nav className="navbar">

<div className="logo">

<img src={logo} alt=""/>

<div>

<h1>STUDIO 97</h1>
<p>PHOTOGRAPHY</p>
</div>

</div>


{/* <div className={menu ? "nav-links active" : "nav-links"}>
 */}
 <div className={`nav-links ${menu ? "active" : ""}`}>

<Link onClick={()=>setMenu(false)} to="/">
Home
</Link>

<Link onClick={()=>setMenu(false)} to="/about">
About
</Link>

<Link onClick={()=>setMenu(false)} to="/services">
Services
</Link>

<Link onClick={()=>setMenu(false)} to="/portfolio">
Portfolio
</Link>

<Link onClick={()=>setMenu(false)} to="/packages">
Packages
</Link>

<Link onClick={()=>setMenu(false)} to="/contact">
Contact
</Link>

</div>


<button className="book-btn" onClick={()=>navigate("/booking")}>

Book Now

</button>


<div
className="menu-icon"
onClick={()=>setMenu(!menu)}
>

{menu ? <FaTimes/> : <FaBars/>}

</div>

</nav>

)

}

export default Navbar