import "../css/services.css";
import { useNavigate } from "react-router-dom"
import prewedding2 from "../assets/prewedding2.jpg"

function Services(){

const navigate=useNavigate();

  const services = [
    {
      title: "Wedding Shoot",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200",
      text: "Capturing your beautiful wedding memories."
    },

{
title:"Pre Wedding",
img:prewedding2,
text:"Creative outdoor and cinematic pre wedding."
},

{
title:"Birthday Shoot",
img:"https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200",
text:"Memorable birthday celebrations."
},



{
title:"Festival Shoot",
img:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200",
text:"Celebrate colorful festivals."
},

{
title:"Fashion Shoot",
img:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200",

text:"Professional fashion photography."
},

{
title:"Cinematic Reels",
img:"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200",
text:"Luxury cinematic reels."
},

// {
// title:"Engagement Shoot",
// img:"https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200",
// text:"Capture engagement memories."
// }
]

return(

<div className="services">

<p className="service-small">
OUR SERVICES
</p>

<h1>
Photography Services
</h1>

<div className="service-grid">

{
services.map((item,index)=>(

<div
className="card"
key={index}
onClick={()=>navigate("/portfolio")}
>
<img
  src={item.img}
  alt={item.title}
/>

<div className="overlay">

<h2>{item.title}</h2>

<p>{item.text}</p>

<button
onClick={(e)=>{
  e.stopPropagation();
  navigate("/portfolio");
}}
>
View Gallery →
</button>


</div>

</div>

))
}

</div>

</div>

)

}

export default Services;