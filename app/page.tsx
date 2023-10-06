import React from 'react';
import Hierarchy from '../components/Hierarchy';

const staffData = [
  { name: 'John Doe', role: 'CEO' },
  { name: 'Jane Smith', role: 'CFO' },
  { name: 'Alice Johnson', role: 'CTO' },
];

const Home: React.FC = () => {
  return (
    <main className="flex h-screen flex-col items-center bg-primary">
      <h1 className="text-2xl font-bold mb-4">Company Hierarchy</h1>
      <Hierarchy staff={staffData} />
    </main>
  );
};

export default Home;
