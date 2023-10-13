"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { StaffMemberProps } from './types';
import StaffMember from './StaffMember';
import { useRouter } from 'next/router';
import { DEV_DB_URL } from "../config/config";
import  hasCycle  from '../utils/hierarchyUtils';


interface HierarchyProps {
  staff: StaffMemberProps[];
  setStaffData: (staffData: StaffMemberProps[]) => void;
}

const Hierarchy: React.FC<HierarchyProps> = ({ staff, setStaffData }) => {
  console.log(staff);
  const router = useRouter();
  const { _id } = router.query;

  console.log('ds data', staff);

  const handleDelete = async (_id: number) => {
    console.log('Deleting staff member with ID:', _id);
    try {
      await axios.delete(`${DEV_DB_URL}api/delete/${_id}`);
      console.log(`Staff member with ID ${_id} deleted successfully`);

      // Update the state to remove the deleted staff member
      setStaffData((prevStaffList) =>
        prevStaffList.filter((staffMember) => staffMember._id !== _id)
      );
    } catch (error) {
      console.error('Error deleting staff member', error);
    }
  };

  const handleUpdate = async (_id: string, updatedStaffMember: StaffMemberProps) => {
    try {
      // Check for cycles before updating
      if (hasCycle(staff, _id, updatedStaffMember.reportsTo)) {
        console.error('Error: Updating staff member would create a cycle.');
        return;
      }
  
      await axios.put(`${DEV_DB_URL}api/update/${_id}`, updatedStaffMember);
      console.log(`Staff member with ID ${_id} updated successfully`);
    } catch (error) {
      console.error('Error updating staff member', error);
    }
  };

  return (
    <>
      {staff.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {staff.map((member, index) => (
            <StaffMember
              key={index}
              {...member}
              onDelete={() => handleDelete(member._id)}
              onUpdate={(updatedStaff: any) => handleUpdate(member._id, updatedStaff)}
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
