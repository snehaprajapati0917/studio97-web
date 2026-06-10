import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      navigate("/dashboard");

    }

    else {

      alert("Invalid Username or Password");

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f7f3ed"
      }}
    >

      <form
        onSubmit={handleLogin}
        style={{
          background: "white",
          padding: "40px",
          width: "350px"
        }}
      >

        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          style={{width:"100%",padding:"12px",marginBottom:"15px"}}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{width:"100%",padding:"12px",marginBottom:"15px"}}
        />

        <button
          type="submit"
          style={{
            width:"100%",
            padding:"12px"
          }}
        >
          Login
        </button>

      </form>

    </div>

  );
}

export default AdminLogin;