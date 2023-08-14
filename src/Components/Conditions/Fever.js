import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-router-dom"
import feverImage from 'C:/Users/thahi/Desktop/Ecart/Ecart_shopping/Images/fever.jpeg'; // Replace with the actual path to your image

function Fever() {
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
      <h1 style={headerStyle}>Understanding Fever</h1>
      <img src={feverImage} alt="Fever" style={imageStyle} />
      <p>
        Fever is a common symptom characterized by an elevated body temperature, often resulting from infections, illnesses,
        or other underlying medical conditions. It's the body's natural response to fight off infections.
      </p>
      <p>
        While fever itself is not a disease, it can indicate the presence of an underlying issue. Most fevers are mild and can
        be managed at home with rest, hydration, and over-the-counter fever reducers.
      </p>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Common Causes</h2>
        <p>
          Fevers can be caused by a variety of factors, including viral or bacterial infections, inflammatory conditions,
          and certain medications. It's important to identify the underlying cause of the fever to determine appropriate treatment.
        </p>
      </section>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>When to Seek Medical Attention</h2>
        <p>
          While most fevers are harmless and resolve on their own, high or persistent fevers may require medical attention,
          especially if accompanied by severe symptoms. Seek medical care if you're concerned about the fever's duration or severity.
        </p>
      </section>
    </div>
  );
}

export default Fever;
