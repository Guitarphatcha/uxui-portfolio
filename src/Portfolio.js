import React from 'react';

const Portfolio = () => (
  <div style={{ padding: "20px" }}>
    <h2>Portfolio</h2>
    <p>ดูไฟล์ PDF ด้านล่าง:</p>
    <iframe 
      src="/Portfolio_phatcharamai.pdf" 
      width="100%" 
      height="600px"
      style={{ border: "1px solid #ccc" }}
      title="Portfolio PDF"
    />
  </div>
);

export default Portfolio;
