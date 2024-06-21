import React, { Children, useState } from "react";
import Layout from "../../components/Layout/Layout";

import toast  from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Only allow numeric input and restrict length to 10 characters
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = process.env.REACT_APP_API || "http://localhost:8080";
      const response = await axios.post(`${apiUrl}/api/v1/auth/register`, {
        username,
        email,
        password,
        phone,
        address,
        answer
      });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
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
  const lightYellow = "rgba(249, 161, 18 , 0.8)"; // Light yellow with 50% opacity
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
        fontSize:'40px',
        wordSpacing:'3px',
        letterSpacing:'1px',
        textShadow: '2px 2px 4px black', 
        textAlign: 'center' ,
        margin:'20px'// Black shadow for text depth
      }}>REGISTRATION FORM</h1>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={username}
                style={{ width: "300px", height: "2.75rem" }}
                aria-describedby="nameHelp"
                required
              />
            </div>
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
            <div className="mb-3">
              <input
                value={phone}
                type="tel"
                onChange={handlePhoneChange}
                className="form-control"
                placeholder="Phone Number"
                required
                style={{ width: "300px", height: "2.75rem" }}
                maxLength="10"
                pattern="\d*"
                aria-describedby="phoneHelp"
              />
            </div>
            <div className="mb-3">
              <input
                value={address}
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                style={{ width: "300px", height: "2.75rem" }}
                placeholder="Address"
                required
              />
            </div>
            <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              style={{ width: "300px", height: "2.75rem" }}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What is Your Favorite animal ?"
              required
            />
          </div>

            <button type="submit" class="btn btn-dark btn-lg">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
