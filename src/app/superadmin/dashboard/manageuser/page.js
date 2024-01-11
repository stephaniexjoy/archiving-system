"use client"
import React, { useState } from 'react'
import axios from 'axios'

export default function page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const [designation, setDesignation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [license, setLicense] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation and submit the data
    try {
      console.log(name, email, password, position, designation, specialization, license)
      const response = await axios.post('/api/users/create-user', { name, email, password, position, designation, specialization, license });
      // Assuming your API returns a success message
      console.log(response.data.message);
      // Perform any additional actions or show a success message to the user
    } catch (error) {
      // Handle error responses from the API
      console.error(error);
      // Show an error message to the user
    }

    /* setName('');
    setEmail('');
    setPassword('');
    setPosition('');
    setDesignation('');
    setSpecialization('');
    setLicense(''); */
  };


  return (
    <div className="flex flex-col w-auto h-screen">
      <h1>Test</h1>

      <div className="flex bg-[#AD5606] backdrop-filter backdrop-blur-md w-screen h-screen items-center justify-center">
        <div className="bg-[#D9BA9C] backdrop-filter backdrop-blur-md w-[1100px] h-[600px] mx-auto my-auto">
          {/* List All Files */}
          <div>
            <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name:
                </label>
                <input

                  type="text"
                  id="name"
                  className="w-full p-2 border rounded-md text-gray-700"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-md text-gray-700"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 border rounded-md text-gray-700"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="position" className="block text-gray-700 text-sm font-bold mb-2">
                  Position:
                </label>
                <select
                  id="position"
                  className="w-full p-2 border rounded-md text-gray-700"

                  value={position}
                  onChange={(e) => { setPosition(e.target.value) }}
                >
                  <option value="" disabled>Select your Position</option>
                  <option value="Associate Dean">Associate Dean</option>
                  <option value="Secretary">Secretary</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Unit Head">Unit Head</option>
                  <option value="Coordinator">Coordinator</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="designation" className="block text-gray-700 text-sm font-bold mb-2">
                  Designation:
                </label>
                <select
                  id="designation"
                  className="w-full p-2 border rounded-md text-gray-700"
                  value={designation}
                  onChange={(e) => { setDesignation(e.target.value) }}
                >
                  <option value="" disabled>Select your Designation</option>
                  <option value="Dean">Dean</option>
                  <option value="Regular">Regular</option>
                  <option value="Faculty-Regular">Faculty (Regular)</option>
                  <option value="Faculty-PartTime">Faculty (Part Time)</option>
                  <option value="JobOrder">Job Order</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="specialization" className="block text-gray-700 text-sm font-bold mb-2">
                  Specialization:
                </label>
                <input
                  type="text"
                  id="specialization"
                  className="w-full p-2 border rounded-md text-gray-700"
                  placeholder="Enter your Specialization"
                  value={specialization}
                  onChange={(e) => { setSpecialization(e.target.value) }}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="license" className="block text-gray-700 text-sm font-bold mb-2">
                  Eligibility/Professional License:
                </label>
                <input
                  type="text"
                  id="license"
                  className="w-full p-2 border rounded-md text-gray-700"
                  placeholder="Enter your license"
                  value={license}
                  onChange={(e) => { setLicense(e.target.value) }}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='mt-3 flex grid-cols-3 space-x-40 place-content-stretch justify-center h-16 md:h-20 font-bold font-[Times New Roman]'>
        <div className='text-center'>

        </div>

      </div>
    </div>
  )
}
