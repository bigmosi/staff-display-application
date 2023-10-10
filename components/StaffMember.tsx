import React from 'react';

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
  return (
    <>
     <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-500">{role}</p>
      <p className="text-gray-500">{reportsTo}</p>

      {onDelete && (
        <button
          className="text-red-500 hover:text-red-700"
          onClick={onDelete}
        >
          Delete
        </button>
      )}
      {onUpdate && (
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={onUpdate}
        >
          Update
        </button>
      )}
    </div>
    </>
  );
};

export default StaffMember;
