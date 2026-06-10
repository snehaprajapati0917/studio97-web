import "../css/about.css"
import { useNavigate } from "react-router-dom"

function About(){

const navigate = useNavigate()

return(
<>
<section className="about-container">

<div className="about-left">

<p className="small-title">

ABOUT studio 97

</p>

<h1>

Turning Moments Into
<span> Masterpieces</span>

</h1>

<p>

We don't simply take photographs. We create memories,
capture emotions and transform beautiful moments into
stories that stay forever. Our focus is wedding,
pre-wedding, fashion and cinematic photography.

</p>

<button
className="about-btn"
onClick={()=>navigate("/portfolio")}
>

View Portfolio

</button>

</div>



<div className="about-right">

<img
className="img1"
 src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200"
// src="../assets/ab1.png"
/>

<img
className="img2"
src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=1200"
/>

<img
className="img3"
src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200"
/>

<img
className="img4"
src="https://pbblogassets.s3.amazonaws.com/uploads/2017/08/27130641/Photography-Cover.jpg"
/>

</div>

</section>

<section className="stats">

<div className="stat-box">

<h2>500+</h2>

<p>Projects</p>

</div>

<div className="stat-box">

<h2>200+</h2>

<p>Happy Clients</p>

</div>

<div className="stat-box">

<h2>5+</h2>

<p>Years Experience</p>

</div>

<div className="stat-box">

<h2>20+</h2>

<p>Awards</p>

</div>

</section>
</>
)

}

export default About