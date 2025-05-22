import React from "react";
import profilePic from "./assets/studentphoto (1).jpg";
import web from "./assets/Sephora.png"; 
import wireframe from "./assets/wireframe.png";
import compo from "./assets/compo.png";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { FaFacebookF, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Wireframe, UserFlow",
    description: "ออกแบบ Wireframe และ UserFlow สำหรับแอปติดตาม Task",
    image: wireframe,
    link: "https://www.figma.com/design/llvoZ4MgB8nzx6Qefs1w59/Intern-Design?node-id=629-2438",
  },
  {
    title: "Low Fi Prototype",
    description: "ออกแบบ Low Fi Prototype การยกเลิกออเดอร์จากเว็บ Sephora",
    image: web,
    link: "https://www.figma.com/design/llvoZ4MgB8nzx6Qefs1w59/Intern-Design?node-id=1-11",
  },
  {
    title: "Component Dashboard UX",
    description: "ออกแบบ component Dashboard UX",
    image: compo,
    link: "https://www.figma.com/design/llvoZ4MgB8nzx6Qefs1w59/Intern-Design?node-id=451-2440",
  },
];

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{
        fontSize: "32px",
        fontWeight: "bold",
        marginBottom: "30px",
        color: "#0f172a",
        backgroundColor: "rgba(255,255,255,0.8)",
        display: "inline-block",
        padding: "5px 10px",
        borderRadius: "8px",
      }}>
        ผลงานของฉัน
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px", flexGrow: 1 }}>
              <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
                {project.title}
              </h4>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#0ea5e9",
                color: "#fff",
                textAlign: "center",
                padding: "10px",
                textDecoration: "none",
              }}
            >
              ดูรายละเอียด
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// แก้ไข Layout ให้ใช้ useLocation เพื่อดูเส้นทางปัจจุบัน
function Layout({ children }) {
  const location = useLocation();

  // ฟังก์ชันเช็คว่า path ปัจจุบันตรงกับลิงก์ไหน
  const navStyle = (path) => ({
    display: "block",
    padding: "10px 15px",
    color: location.pathname === path ? "#38bdf8" : "#cbd5e1",
    textDecoration: "none",
  });

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          backgroundColor: "#0f172a",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 20px",
          flexShrink: 0,
        }}
      >
        <img
          src={profilePic}
          alt="Profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "15px",
            border: "2px solid #fff",
          }}
        />
        <h3 style={{ margin: "10px 0" }}>Phatcharamai</h3>

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
          <a
            href="https://github.com/Guitarphatcha"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "#1e293b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              color: "white",
              textDecoration: "none",
            }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/guita.taphat/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "#1e293b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              color: "white",
              textDecoration: "none",
            }}
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Navigation */}
        <nav style={{ marginTop: "30px", width: "100%" }}>
          <Link to="/" style={navStyle("/")}>• Home</Link>
          <Link to="/resume" style={navStyle("/resume")}>• Resume</Link>
          <Link to="/portfolio" style={navStyle("/portfolio")}>• Portfolio</Link>
          <Link to="/contact" style={navStyle("/contact")}>• Contact</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#ffffff" }}>
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/resume" element={<Layout><Resume /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
