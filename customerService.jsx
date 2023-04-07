import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
function CustomerService() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [bikeName, setBikeName] = useState('');
  const [bikeNumber, setBikeNumber] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission logic, such as sending data to the server
    alert('Your complaint/feedback registered successfully');
  };

  const handleClear = () => {
    setName('');
    setMobile('');
    setAddress('');
    setBikeName('');
    setBikeNumber('');
    setComplaint('');
  };

  return (
    <div id='cs'>
      <h2>Customer Service</h2>
      <form onSubmit={handleSubmit} id='form'>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Mobile Number:
          <input type="tel" value={mobile} onChange={(event) => setMobile(event.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <textarea value={address} onChange={(event) => setAddress(event.target.value)} />
        </label>
        <br />
        <label>
          Bike Name:
          <input type="text" value={bikeName} onChange={(event) => setBikeName(event.target.value)} />
        </label>
        <br />
        <label>
          Bike Number:
          <input type="text" value={bikeNumber} onChange={(event) => setBikeNumber(event.target.value)} />
        </label>
        <br />
        <label>
          Complaint:
          <textarea value={complaint} onChange={(event) => setComplaint(event.target.value)} />
        </label>
        <br />
        <button type="submit" class='btn btn-success'>Submit</button>
        <button type="button"  class='btn btn-danger' onClick={handleClear}>Clear</button>
        <Link to='/'><button type="button" class='btn btn-primary'>Go to Home</button></Link>
      </form>
    </div>
  );
}

export default CustomerService;
