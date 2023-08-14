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

  return (
    <div style={containerStyle}>
      <h1>Patient Task Manager</h1>
      <PatientForm
        addPatient={addPatient}
        editIndex={editIndex}
        patients={patients}
        setPatients={setPatients}
        setEditIndex={setEditIndex}
      />
      <PatientList
        patients={patients}
        removePatient={removePatient}
        setEditIndex={setEditIndex}
      />
    </div>
  );
}

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f7f7f7',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

function PatientForm({ addPatient, editIndex, patients, setPatients, setEditIndex }) {
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
  );
}

function PatientList({ patients, removePatient, setEditIndex }) {
  return (
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
  );
}
const updatedListItemStyle = {
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  padding: '20px', // Increase the padding for a larger box
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column', // Stack items vertically
  gap: '10px', // Add vertical gap between elements
};
const formStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '8px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  padding: '8px 12px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
};

const listItemStyle = {
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  padding: '15px',
  marginBottom: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px', // Adding gap between buttons
  alignItems: 'center', // Vertically align buttons
};

const deleteButtonStyle = {
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  padding: '8px 12px', // Adjusting padding for better spacing
};

const editButtonStyle = {
  backgroundColor: '#ffc107',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  padding: '8px 12px', // Adjusting padding for better spacing
};

const patientInfoStyle = {
  marginBottom: '5px', // Adding space between patient info elements
};

export default TaskManager;

const rootElement = document.getElementById('root');
ReactDOM.render(<TaskManager />, rootElement);
