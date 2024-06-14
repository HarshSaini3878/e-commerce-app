
import React, { Children, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast  from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { token } from "morgan";
const Login = () => {

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    const [Auth,SetAuth]=useAuth()
     
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const apiUrl = process.env.REACT_APP_API || "http://localhost:8080";
          const response = await axios.post(`${apiUrl}/api/v1/auth/login`, {
         
            email,
            password,
           
          });
          if (response && response.data.success) {
            toast.success(response.data.message);
            localStorage.setItem('Auth',JSON.stringify(res.data));
            SetAuth({
                ...Auth,
                user:response.data.user,
                token:response.data.token
            })
            navigate("/");
          } else {
            toast.error(response.data.message);
          }
    
          console.log("Registration successful:", response.data);
          // Handle success: display success message, redirect user, etc.
        } catch (error) {
          console.error("Registration failed:", error);
          // Handle error: display error message to user, log error details, etc.
        }
      };
      const size = 100;
      // Define your size value
      const lightYellow = "rgba(250, 56, 56, 0.8)"; // Light yellow with 50% opacity
      const lightBlack = "rgba(0, 0, 0, 1)";

  return (
    <>
      <Layout>
        <div
          className="register"
          style={{
            background: `
    radial-gradient(circle farthest-side at 0% 50%, ${lightYellow} 23.5%, transparent 0) ${
              size * 0.7
            }px ${size}px,
    radial-gradient(circle farthest-side at 0% 50%, ${lightBlack} 24%, transparent 0) ${
              size * 0.6129
            }px ${size}px,
    linear-gradient(${lightYellow} 14%, transparent 0, transparent 85%, ${lightYellow} 0) 0 0,
    linear-gradient(150deg, ${lightYellow} 24%, ${lightBlack} 0, ${lightBlack} 26%, transparent 0, transparent 74%, ${lightBlack} 0, ${lightBlack} 76%, ${lightYellow} 0) 0 0,
    linear-gradient(30deg, ${lightYellow} 24%, ${lightBlack} 0, ${lightBlack} 26%, transparent 0, transparent 74%, ${lightBlack} 0, ${lightBlack} 76%, ${lightYellow} 0) 0 0,
    linear-gradient(90deg, ${lightBlack} 2%, ${lightYellow} 0, ${lightYellow} 98%, ${lightBlack} 0) 0 0 ${lightYellow}
  `,
            backgroundSize: `${size * 1.333}px ${size * 2}px`,
            padding: "20px",
            opacity: 0.8, // Overall opacity of the background
          }}
        >
            <h1 style={{
        color: 'white', // Text color
        fontWeight: 'bold', // Bold weight
        fontSize:'50px',
        wordSpacing:'3px',
        letterSpacing:'2px',
        textShadow: '2px 2px 4px black', 
        margin:'20px'// Black shadow for text depth
      }}>LOGIN FORM</h1>
          <form onSubmit={handleSubmit} className="register-form">
           
            <div className="mb-3">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                placeholder="Email address"
                style={{ width: "300px", height: "2.75rem" }}
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Password"
                style={{ width: "300px", height: "2.75rem" }}
                required
              />
            </div>
           
       
            {/* <div className="mb-3">
    <select className="form-select" placeholder="Role">
      <option value="">Select Role</option>
      <option value="customer">Customer</option>
      <option value="vendor">Vendor</option>
      <option value="admin">Admin</option>
    </select>
  </div> */}

            <button type="submit" class="btn btn-dark btn-lg">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default Login
