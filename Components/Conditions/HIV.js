import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-router-dom"
import hivImage from 'C:/Users/thahi/Desktop/Ecart/Ecart_shopping/Images/hiv.jpeg'; // Replace with the actual path to your image

function HIV() {
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
      <h1 style={headerStyle}>Understanding HIV</h1>
      <img src={hivImage} alt="HIV" style={imageStyle} />
      <p>
        HIV (Human Immunodeficiency Virus) is a virus that attacks the immune system, making it harder for the body to fight off
        infections and diseases. Without proper treatment, HIV can lead to AIDS (Acquired Immunodeficiency Syndrome).
      </p>
      <p>
        HIV is primarily transmitted through unprotected sexual contact, sharing needles, and from mother to child during pregnancy,
        childbirth, or breastfeeding. Early detection and appropriate medical care are essential for managing the virus.
      </p>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Common Symptoms</h2>
        <p>
          The symptoms of HIV can vary, but they often include flu-like symptoms such as fever, fatigue, body aches, and swollen
          lymph nodes. It's important to note that not everyone with HIV will experience symptoms.
        </p>
      </section>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Prevention and Treatment</h2>
        <p>
          HIV can be prevented by practicing safe sex, using clean needles, and taking pre-exposure prophylaxis (PrEP) if at
          risk. Antiretroviral therapy (ART) is the standard treatment for HIV and helps control the virus, allowing individuals
          to live healthier lives.
        </p>
      </section>
    </div>
  );
}

export default HIV;
