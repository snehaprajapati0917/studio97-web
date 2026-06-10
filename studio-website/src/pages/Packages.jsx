import "../css/package.css"
import {useNavigate} from "react-router-dom"

function Packages(){

const navigate=useNavigate()

const packages=[

{
title:"Wedding Package",
price:"₹1,00,000",
details:[
"Full Day Shoot",
"300+ Edited Photos",
"Wedding Album",
"Cinematic Video"
]
},

{
title:"Pre-Wedding Package",
price:"₹80,000",
details:[
"Outdoor Locations",
"Drone Shots",
"2 Reels Included",
"100+ Edited Photos"
]
},

{
title:"Birthday Package",
price:"₹7,999",
details:[
"2–3 Hour Shoot",
"Family Moments",
"Decoration Photography",
"Edited Photos"
]
},

{
title:"Festival Package",
price:"₹9,999",
details:[
"Traditional Moments",
"Group Photography",
"Event Coverage",
"Edited Photos"
]
},

{
title:"Cinematic Reel Package",
price:"₹11,999",
details:[
"Professional Reel",
"Color Grading",
"Highlight Video",
"HD Quality"
]
}

]

return(

<div className="packages">

<p className="small-text">

OUR PACKAGES

</p>

<h1>

Choose Your Perfect Package

</h1>


<div className="package-grid">

{
packages.map((item,index)=>(

<div className="package-card" key={index}>

<h2>

{item.title}

</h2>

<h3>

{item.price}

</h3>

<ul>

{
item.details.map((detail,i)=>(

<li key={i}>

✓ {detail}

</li>

))
}

</ul>

<button
onClick={()=>navigate("/booking")}
>

Book Now

</button>

</div>

))
}

</div>

</div>

)

}

export default Packages