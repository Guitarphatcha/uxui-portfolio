import React from 'react';
import { FaPhone, FaEnvelope, FaGithub } from 'react-icons/fa';

const Contact = () => (
  <div style={{ padding: "40px 20px", maxWidth: "800px",  textAlign: "left" }}>
    <h2 style={{ marginBottom: "30px", fontSize: "36px", color: "#0f172a" }}>Contact</h2>

    <div style={{ display: "flex", alignItems: "center", marginBottom: "25px", fontSize: "20px", color: "#0f172a" }}>
      <FaPhone style={{ marginRight: "15px", color: "#38bdf8", fontSize: "24px" }} />
      <span>061-545-7437</span>
    </div>

    <div style={{ display: "flex", alignItems: "center", marginBottom: "25px", fontSize: "20px", color: "#0f172a" }}>
      <FaEnvelope style={{ marginRight: "15px", color: "#38bdf8", fontSize: "24px" }} />
      <span>phatcharamaithongdee@gmail.com</span>
    </div>

    <div style={{ display: "flex", alignItems: "center", marginBottom: "25px", fontSize: "20px", color: "#0f172a" }}>
      <FaGithub style={{ marginRight: "15px", color: "#38bdf8", fontSize: "24px" }} />
      <a 
        href="https://github.com/Guitarphatcha" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: "none", color: "#0f172a" }}
      >
        github.com/Guitarphatcha
      </a>
    </div>
  </div>
);

export default Contact;
