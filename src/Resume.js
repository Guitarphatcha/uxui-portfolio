import React from 'react';
import ResumeImage from './assets/Phatcharamai.png'; // แก้ path ให้ถูกตามที่เก็บรูป

const Resume = () => (
  <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
    <img 
      src={ResumeImage} 
      alt="Phatcharamai Resume" 
      style={{ 
        width: "100%", 
        maxWidth: "794px", // A4 ความกว้างที่ 96 DPI
        height: "auto", 
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "4px"
      }} 
    />
  </div>
);

export default Resume;
