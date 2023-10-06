
import React from 'react';
import { StaffMemberProps } from './types';
import StaffMember from './StaffMember';

interface HierarchyProps {
  staff: StaffMemberProps[];
}

const Hierarchy: React.FC<HierarchyProps> = ({ staff }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {staff.map((member, index) => (
        <StaffMember key={index} {...member} />
      ))}
    </div>
  );
};

export default Hierarchy;
