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
    <div className="bg-white p-4 rounded-lg shadow-md">
      {isUpdating ? (
        // Display the update form when isUpdating is true
        <div>
          <input
            type="text"
            placeholder="Name"
            value={updatedData.name}
            onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            value={updatedData.role}
            onChange={(e) => setUpdatedData({ ...updatedData, role: e.target.value })}
          />
          <input
            type="text"
            placeholder="Reports To"
            value={updatedData.reportsTo}
            onChange={(e) => setUpdatedData({ ...updatedData, reportsTo: e.target.value })}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        // Display staff member details when isUpdating is false
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-500">{role}</p>
          <p className="text-gray-500">{reportsTo}</p>

          {onDelete && (
            <button className="text-red-500 hover:text-red-700" onClick={onDelete}>
              Delete
            </button>
          )}
          <button
            className="text-blue-500 hover:text-blue-700"
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
