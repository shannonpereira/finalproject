//'C:/Users/thahi/Desktop/Ecart/Ecart_shopping/Images/allergy.jpeg'
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-router-dom"
import allergyImage from 'C:/Users/thahi/Desktop/Ecart/Ecart_shopping/Images/allergy.jpeg'; // Replace with the actual path to your image

function Allergies() {
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
    color: '#e74c3c',
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
      <h1 style={headerStyle}>Understanding Allergies</h1>
      <img src={allergyImage} alt="Allergies" style={imageStyle} />
      <p>
        Allergies are the body's immune system reacting to substances that are usually harmless. Common allergens include pollen,
        dust mites, pet dander, certain foods, and insect stings. When exposed to an allergen, the immune system releases chemicals
        that lead to various symptoms.
      </p>
      <p>
        Allergy symptoms can range from mild to severe and may include sneezing, runny nose, itchy or watery eyes, skin rashes,
        hives, and even life-threatening reactions known as anaphylaxis.
      </p>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Common Symptoms</h2>
        <p>
          Allergy symptoms can manifest differently depending on the allergen, but often include respiratory, skin, or digestive
          issues.
        </p>
      </section>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Triggers and Management</h2>
        <p>
          Avoiding allergens is key to managing allergies. Medications such as antihistamines and decongestants can provide relief
          from symptoms. In severe cases, allergen immunotherapy (allergy shots) may be recommended.
        </p>
      </section>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Living with Allergies</h2>
        <p>
          Understanding your triggers, keeping your living space clean, and having an action plan for severe reactions can help
          individuals with allergies lead a healthier and more comfortable life.
        </p>
      </section>
    </div>
  );
}

export default Allergies;
