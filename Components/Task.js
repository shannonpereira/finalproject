import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function TaskManager() {
  const [patients, setPatients] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
    setEditIndex(-1);
  };

  const removePatient = (index) => {
    const updatedPatients = patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
  };

  const [newPatient, setNewPatient] = useState({
    name: '',
    disorder: '',
    medication: '',
    checkup: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPatient.name.trim()) {
      if (editIndex !== -1) {
        const updatedPatients = [...patients];
        updatedPatients[editIndex] = newPatient;
        setPatients(updatedPatients);
        setEditIndex(-1);
      } else {
        addPatient(newPatient);
      }
      setNewPatient({
        name: '',
        disorder: '',
        medication: '',
        checkup: '',
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Patient Task Manager</h1>
      <div style={formContainerStyle}>
        <h2 style={formHeaderStyle}>{editIndex !== -1 ? 'Edit Patient' : 'Add New Patient'}</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            value={newPatient.name}
            onChange={handleInputChange}
            placeholder="Patient Name"
            style={inputStyle}
          />
          <input
            type="text"
            name="disorder"
            value={newPatient.disorder}
            onChange={handleInputChange}
            placeholder="Disorder/Condition"
            style={inputStyle}
          />
          <input
            type="text"
            name="medication"
            value={newPatient.medication}
            onChange={handleInputChange}
            placeholder="Medication"
            style={inputStyle}
          />
          <input
            type="text"
            name="checkup"
            value={newPatient.checkup}
            onChange={handleInputChange}
            placeholder="Regular Checkup"
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            {editIndex !== -1 ? 'Save Changes' : 'Add Patient'}
          </button>
        </form>
      </div>
      <div style={listContainerStyle}>
        <ul style={listStyle}>
          {patients.map((patient, index) => (
            <li style={listItemStyle} key={index}>
              <div>
                <strong>Name:</strong> {patient.name}
              </div>
              <div>
                <strong>Disorder/Condition:</strong> {patient.disorder}
              </div>
              <div>
                <strong>Medication:</strong> {patient.medication}
              </div>
              <div>
                <strong>Regular Checkup:</strong> {patient.checkup}
              </div>
              <div style={buttonContainerStyle}>
                <button onClick={() => setEditIndex(index)} style={editButtonStyle}>
                  Edit
                </button>
                <button onClick={() => removePatient(index)} style={deleteButtonStyle}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
const formContainerStyle = {
  width: '100%',
  marginBottom: '20px',
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f7f7f7',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const headerStyle = {
  color: '#007bff',
  marginBottom: '15px',
  fontFamily: 'Roboto, sans-serif', // Updated font-family
};

const formHeaderStyle = {
  color: '#007bff',
  marginBottom: '10px',
  fontFamily: 'Roboto, sans-serif', // Updated font-family
};


const formStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  border: 'none',
  borderRadius: '8px',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  fontFamily: 'Roboto, sans-serif', // Updated font-family
};


const listContainerStyle = {
  width: '100%',
};

const listHeaderStyle = {
  color: '#007bff',
  marginBottom: '15px',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
};

const listItemStyle = {
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  fontFamily: 'Roboto, sans-serif', // Updated font-family
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
};

const deleteButtonStyle = {
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  padding: '8px 12px',
  borderRadius: '20px',
  fontFamily: 'Roboto, sans-serif', // Updated font-family
};

const editButtonStyle = {
  backgroundColor: '#ffc107',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  padding: '8px 12px',
  borderRadius: '20px',
  fontFamily: 'Roboto, sans-serif', // Updated font-family
};

const patientInfoStyle = {
  marginBottom: '5px',
};

const rootElement = document.getElementById('root');
ReactDOM.render(<TaskManager />, rootElement);

export default TaskManager;
