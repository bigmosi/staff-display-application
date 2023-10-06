import React from 'react';
import Navigation from '@/components/Navigation';
import '../app/globals.css';

const AddStaffPage: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center bg-primary">
      <Navigation />
      <h1>Add Staff</h1>
      {/* Add your form or content for adding staff members here */}
    </div>
  );
};

export default AddStaffPage;
