"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { StaffMemberProps } from './types';
import StaffMember from './StaffMember';
import { useRouter } from 'next/router';

interface HierarchyProps {
  staff: StaffMemberProps[];
}

const Hierarchy: React.FC<HierarchyProps> = ({ staff }) => {
  const router = useRouter();
  const { _id } = router.query;

  const [staffList, setStaffList] = useState<StaffMemberProps[]>(staff);

  const handleDelete = async (_id: number) => {
    console.log('Deleting staff member with ID:', _id);
    try {
      await axios.delete(`http://localhost:8080/api/delete/${_id}`);
      console.log(`Staff member with ID ${_id} deleted successfully`);

      // Update the state to remove the deleted staff member
      setStaffList((prevStaffList) =>
        prevStaffList.filter((staffMember) => staffMember._id !== _id)
      );
    } catch (error) {
      console.error('Error deleting staff member', error);
    }
  };

  const handleUpdate = async (id: number, updatedStaffMember: StaffMemberProps) => {
    try {
      await axios.put(`/api/update-staff/${id}`, updatedStaffMember);
      console.log(`Staff member with ID ${id} updated successfully`);
    } catch (error) {
      console.error('Error updating staff member', error);
    }
  };

  return (
    <>
      {staffList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {staffList.map((member, index) => (
            <StaffMember
              key={index}
              {...member}
              onDelete={() => handleDelete(member._id)}
              onUpdate={(updatedStaff: any) => handleUpdate(member.id, updatedStaff)}
            />
          ))}
        </div>
      ) : (
        <p>No Staff members available</p>
      )}
    </>
  );
};

export default Hierarchy;
