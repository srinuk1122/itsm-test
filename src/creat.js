import React, { useState } from 'react';

const CreateData =({displayData}) => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    address: '',
    dob: '',
    phone: '',
    gender: '',
  });

  const [dataArray, setDataArray] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [theArray, setTheArray] = useState(displayData);


  const handleSubmit = (e) => {
    e.preventDefault();
    setDataArray([...dataArray, formData]);
    setFormData({
      name: '',
      subject: '',
      address: '',
      dob: '',
      phone: '',
      gender: '',
    });
   setTheArray(prevArray => [...prevArray, dataArray])
    console.log(dataArray)
  };

  return (



    <center><div>
      <h1>Student Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          /><br/>
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          /><br/>
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          /><br/>
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          /><br/>
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Array of Data:</h2>
        <ul>
          {dataArray.map((data, index) => (
            <li key={index}>
              Name: {data.name}, Subject: {data.subject}, Address: {data.address}, DOB: {data.dob}, Phone: {data.phone}, Gender: {data.gender}
            </li>
          ))}
        </ul>
      </div>
    </div></center>
  );
}

export default CreateData;
