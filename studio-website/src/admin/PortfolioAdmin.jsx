// import { useState } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function PortfolioAdmin() {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState([]);

useEffect(() => {
  fetchPhotos();
}, []);

const fetchPhotos = async () => {

  try {

    const response = await axios.get(
      "http://127.0.0.1:8000/api/portfolio/"
    );

    setPhotos(response.data);

  } catch (error) {

    console.log(error);

  }

};

const deletePhoto = async (id) => {

  try {

    await axios.delete(
      `http://127.0.0.1:8000/api/portfolio/delete/${id}/`
    );

    fetchPhotos();

  } catch (error) {

    console.log(error);

  }

};

  const handleUpload = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("image", image);
    formData.append("category", category);
    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/portfolio/",
        formData
      );

      console.log(response.data);

      alert("Image Uploaded Successfully ✅");

      fetchPhotos();
      setTitle("");
      setImage(null);

    } catch (error) {

  alert(
    JSON.stringify(
      error.response.data
    )
  );

  console.log(
    error.response.data
  );

}
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        padding: "60px"
      }}
    >

      <h1
        style={{
          color: "#c89658",
          marginBottom: "30px"
        }}
      >
        Portfolio Management
      </h1>

      <form onSubmit={handleUpload}>

        <input
          type="text"
          placeholder="Image Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={{
            padding: "12px",
            width: "300px",
            marginBottom: "20px"
          }}
        />
        <select
  value={category}
  onChange={(e) =>
    setCategory(e.target.value)
  }
>
  <option value="">
    Select Category
  </option>

  <option value="Wedding">
    Wedding
  </option>

  <option value="PreWedding">
    Pre Wedding
  </option>

  <option value="Birthday">
    Birthday
  </option>

  <option value="Festival">
    Festival
  </option>

</select>

<br /><br />

        <br />

        <input
          type="file"
          onChange={(e) =>
            setImage(e.target.files[0])
          }
        />

        <br /><br />

        <button
          type="submit"
          style={{
            padding: "12px 25px",
            background: "#c89658",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}
        >
          Upload Image
        </button>

      </form>
<hr
  style={{
    margin: "40px 0",
    borderColor: "#333"
  }}
/>

<h2>Uploaded Images</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fill,minmax(250px,1fr))",
    gap: "20px"
  }}
>

  {photos.map((item) => (

    <div
      key={item.id}
      style={{
        background: "#1a1a1a",
        padding: "15px",
        borderRadius: "10px"
      }}
    >

      <img
        src={`https://res.cloudinary.com/dny7rrle6/${item.image}`}
        alt={item.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h3>{item.title}</h3>

      <p>{item.category}</p>

      <button
        onClick={() =>
          deletePhoto(item.id)
        }
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Delete
      </button>

    </div>

  ))}

</div>
    </div>

  );

}

export default PortfolioAdmin;