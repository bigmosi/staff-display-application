import React from 'react';

interface StaffMemberProps {
  name: string;
  role: string;
}

const StaffMember: React.FC<StaffMemberProps> = ({ name, role }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-500">{role}</p>
      {/* Add icons and navigation links here if needed */}
    </div>
  );
};

export default StaffMember;
