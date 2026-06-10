import "../css/home.css"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"

import b1 from "../assets/b1.jpg"
import prewedding from "../assets/prewedding.jpg"
import wedding2 from "../assets/wedding2.jpg"


function Home(){

const images=[

b1,
prewedding,
wedding2,

]

const navigate=useNavigate()

const [current,setCurrent]=useState(0)

useEffect(()=>{

const slider=setInterval(()=>{

setCurrent((prev)=>(prev+1)%images.length)

},4000)

return()=>clearInterval(slider)

},[])

return(

<section
className="hero"
style={{
backgroundImage:`
linear-gradient(
rgba(0,0,0,.35),
rgba(0,0,0,.45)
),
url(${images[current]})
`
}}
>

<div className="hero-overlay">

<p className="small-text">

STUDIO 97 PHOTOGRAPHY

</p>

<h1 className="hero-title">

Timeless Moments <br/>

<span>Captured Beautifully</span>

</h1>

<p className="hero-subtitle">

Wedding • Engagement • Pre Wedding • Fashion Photography

</p>

<div className="hero-buttons">

<button
className="hero-btn"
onClick={()=>navigate("/portfolio")}
>

Explore Gallery

</button>


<button
className="hero-btn2"
onClick={()=>navigate("/booking")}
>

Book Session

</button>
</div>
</div>
</section>

)

}

export default Home