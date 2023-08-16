//C:/Users/thahi/Desktop/Ecart/Ecart_shopping/Images/migraine.jpeg
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-router-dom"
import migraineImage from 'C:/Users/thahi/Desktop/Ecart/Ecart_shopping/Images/migraine.jpeg'; // Replace with the actual path to your image

function Migraine() {
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
      <h1 style={headerStyle}>Understanding Migraine</h1>
      <img src={migraineImage} alt="Migraine" style={imageStyle} />
      <p>
        A migraine is more than just a headache. It's a complex neurological condition characterized by intense throbbing pain,
        usually on one side of the head. Along with the pain, it often brings along other symptoms such as nausea, vomiting,
        and extreme sensitivity to light and sound.
      </p>
      <p>
        Migraine attacks can last for hours to days, and the pain can be debilitating, interfering with daily activities.
        Some individuals experience a warning symptom known as an aura before the headache, which can include visual disturbances,
        tingling, and difficulty speaking.
      </p>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Common Symptoms</h2>
        <p>
          Migraine symptoms can vary from person to person, but common signs include an intense and pulsating headache, sensitivity
          to light and sound, nausea, and vomiting.
        </p>
      </section>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Possible Causes</h2>
        <p>
          While the exact causes of migraines aren't fully understood, they are believed to involve a combination of genetic and
          environmental factors. Triggers such as stress, certain foods, hormonal changes, and sensory stimuli can contribute to
          migraine attacks.
        </p>
      </section>
      <section style={sectionStyle}>
        <h2 style={headerStyle}>Managing Migraines</h2>
        <p>
          While there's no definitive cure for migraines, various treatment options are available. These include pain relievers,
          preventive medications, lifestyle changes, and relaxation techniques. Identifying and avoiding triggers can also help
          reduce the frequency and severity of migraine attacks.
        </p>
      </section>
    </div>
  );
}

export default Migraine;
