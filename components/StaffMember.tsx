"use client"
import React, { useState } from 'react';

interface StaffMemberProps {
  name: string;
  role: string;
  reportsTo: string;
  onDelete?: () => void;
  onUpdate?: () => void;
}

const StaffMember: React.FC<StaffMemberProps> = ({
  name,
  role,
  reportsTo,
  onDelete,
  onUpdate,
}) => {

  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedData, setUpdatedData] = useState({ name: '', role: '', reportsTo: '' });

  const handleUpdateClick = () => {
    setIsUpdating(true);
  }

  const handleCancelClick = () => {
    setIsUpdating(false);
  }

  const handleSaveClick = () => {
    if (onUpdate) {
      onUpdate(updatedData);
    }
    setIsUpdating(false);
  }


  return (
    <div className="bg-white p-4 rounded-lg shadow-md" style={{ width: '400px' }}>
      {isUpdating ? (
        <div>
    <input
    type="text"
    placeholder="Name"
    value={updatedData.name}
    onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
    className="border border-gray-300 p-2 rounded mb-2 focus:outline-none focus:border-blue-500"
  />
  <input
    type="text"
    placeholder="Role"
    value={updatedData.role}
    onChange={(e) => setUpdatedData({ ...updatedData, role: e.target.value })}
    className="border border-gray-300 p-2 rounded mb-2 focus:outline-none focus:border-blue-500"
  />
  <input
    type="text"
    placeholder="Reports To"
    value={updatedData.reportsTo}
    onChange={(e) => setUpdatedData({ ...updatedData, reportsTo: e.target.value })}
    className="border border-gray-300 p-2 rounded mb-2 focus:outline-none focus:border-blue-500"
  />
  <button className="bg-blue-500 text-white rounded p-2 m-2" onClick={handleSaveClick}>Save</button>
  <button className="bg-gray-500 text-white rounded p-2 m-2" onClick={handleCancelClick}>Cancel</button>
</div>

      ) : (
        <div>
          <h2 className="text-lg font-semibold">Name: {name}</h2>
          <p className="text-gray-500">Role: {role}</p>
          <p className="text-gray-500">Report To: {reportsTo}</p>

          {onDelete && (
            <button className="text-red-500 hover:text-red-700" onClick={onDelete}>
              Delete
            </button>
          )}
          <button
            className="bg-blue-500 text-white rounded p-2 m-2 hover:bg-blue-700"
            onClick={handleUpdateClick}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default StaffMember;
