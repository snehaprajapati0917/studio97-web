import "../css/portfolio.css"


import { useState, useEffect } from "react"
import axios from "axios"

function Portfolio() {
const [category,setCategory]=useState("All")

const [photos,setPhotos]=useState([])

useEffect(()=>{

fetchPhotos()

},[])

const fetchPhotos = async()=>{

try{

const response = await axios.get(
"http://127.0.0.1:8000/api/portfolio/"
)

setPhotos(response.data)

}

catch(error){

console.log(error)

}

}

const filtered =

category === "All"

? photos

: photos.filter(
    item =>
      item.category === category
  )
return(

<div className="portfolio">

<p className="small-title">

OUR PORTFOLIO

</p>

<h1>

Moments That Last Forever

</h1>

<p className="sub">

Every picture has a story. We just capture emotions.

</p>


<div className="filter">
<button onClick={()=>setCategory("All")}>
All
</button>

<button onClick={()=>setCategory("Wedding")}>
Wedding
</button>

<button onClick={()=>setCategory("PreWedding")}>
Pre Wedding
</button>

<button onClick={()=>setCategory("Birthday")}>
Birthday
</button>

<button onClick={()=>setCategory("Festival")}>
Festival
</button>
</div>


<div className="gallery">


{
filtered.map((item,index)=>(
  <div className="gallery-card" key={index}>
    <img
src={`https://res.cloudinary.com/dny7rrle6/${item.image}`}
alt={item.title}
/>
    <div className="image-overlay">
     <h3>{item.title}</h3>
    </div>
  </div>
))
}

</div>


<p className="bottom-text">

We don’t just click photos, we freeze feelings.

</p>


</div>

)

}

export default Portfolio