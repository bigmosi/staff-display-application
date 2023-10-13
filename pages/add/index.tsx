"use client"
import React, { useState } from 'react';
import Nav from '@/components/Nav';
import axios from 'axios';
import '/globals.css';
import { DEV_DB_URL } from "../../config/config";

interface StaffMember {
  id: number;
  name: string;
  role: string;
  reportsTo: string | null;
}

const AddStaffPage: React.FC = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [successMessage, setSuccessMessage] = useState("");
  const [supervisorName, setSupervisorName] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };

  const handleSupervisorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    setSupervisorName(selectedName);
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const newStaffMember: Omit<StaffMember, 'id'> = {
      name,
      role,
      reportsTo: supervisorName,
    };
  
    axios.post(`${DEV_DB_URL}api/add`, newStaffMember)
      .then((response) => {
        setSuccessMessage('Staff member added successfully');
        console.log('Staff member added successfully', response.data);
      })
      .catch((error) => {
        console.error('Error adding staff member', error);
      });
  
    // Clear the form fields after submission
    setName('');
    setRole('');
    setSupervisorName(null);
  };  

  return (
    <div className="flex flex-col h-screen bg-primary">
      <Nav />
      <div className="flex-grow flex justify-center items-center">
        <form
          className="bg-white p-4 rounded-lg shadow-md w-96"
          onSubmit={handleSubmit}
        >
          <h2></h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name*:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
              placeholder="Please enter name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 font-bold">
              Role*:
            </label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={handleRoleChange}
              required
              placeholder="Please enter role"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="supervisor" className="block text-gray-700 font-bold">
              Reports To*:
            </label>
            <select
              id="supervisor"
              value={supervisorName || ''}
              onChange={handleSupervisorChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="">None</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="ane Smith">Jane Smith</option>
              <option value="David Jones">David Jones</option>
              <option value="Robert Brown">Robert Brown</option>
              <option value="William Davis">William Davis</option>

            </select>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Add Staff
            </button>
          </div>
          {successMessage && (
            <p className="text-green-500 mt-2">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddStaffPage;
