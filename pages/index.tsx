"use client"
import 'globals.css';
import '../styles/style.css';
import Nav from '@/components/Nav';
import Layout from '@/components/layout';
import React, { useEffect, useState } from 'react';
import Hierarchy from '@/components/Hierarchy';
import axios from 'axios';
import { DEV_DB_URL } from "../config/config";

export default function Home() {
  const [staffData, setStaffData] = useState([]);
  console.log((staffData));
  

  useEffect(() => {
    axios.get(`${DEV_DB_URL}api/staff`)
      .then((response) => {
        setStaffData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching staff data', error);
      });
  }, []);
  return (
    <Layout>
     <main className="flex flex-col items-center bg-primary mt-28">
      <h1 className="text-2xl font-bold mb-4">Company Hierarchy</h1>
      <Hierarchy staff={staffData} setStaffData={setStaffData} />
    </main>
    </Layout>
  );
}
