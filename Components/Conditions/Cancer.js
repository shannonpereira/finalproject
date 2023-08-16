import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-router-dom"
import cancerImage from 'C:/Users/thahi/Desktop/Ecart/Ecart_shopping/Images/cancer.jpeg'; // Replace with the actual path to your image

function Cancer() {
  const cardStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headerStyle = {
    fontFamily: 'Cursive, sans-serif',
    color: '#4a90e2',
    marginBottom: '10px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const sectionStyle = {
    marginTop: '20px',
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={cardStyle}>
      <h1 style={headerStyle}>Understanding Cancer</h1>
      <img src={cancerImage} alt="Cancer" style={imageStyle} />
      <p>
        Cancer is a group of diseases characterized by the uncontrolled growth and division of abnormal cells. It can occur
        in various parts of the body and may lead to serious health complications.
      </p>
      <p>
        There are many types of cancer, each with its own specific characteristics and treatment approaches. Early detection,
        proper diagnosis, and timely treatment play a critical role in improving outcomes for individuals diagnosed with cancer.
      </p>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Common Symptoms</h2>
        <p>
          The symptoms of cancer can vary widely depending on the type and stage of the disease. Common signs include unexplained
          weight loss, fatigue, persistent pain, changes in the skin, and abnormal bleeding.
        </p>
      </section>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Risk Factors</h2>
        <p>
          Certain factors can increase the risk of developing cancer, including genetics, exposure to carcinogens, unhealthy
          lifestyle choices, and family history. Understanding and managing these risk factors can contribute to cancer prevention.
        </p>
      </section>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Treatment and Prevention</h2>
        <p>
          Cancer treatment options include surgery, chemotherapy, radiation therapy, immunotherapy, and targeted therapies.
          Prevention strategies often involve adopting a healthy lifestyle, regular screenings, and avoiding known risk factors.
        </p>
      </section>
    </div>
  );
}

export default Cancer;
