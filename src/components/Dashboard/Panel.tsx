import React, { ReactNode } from 'react';
import {Dashboard} from '../Dashboard/Dashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

interface Props {
  children: ReactNode;
}

function Panel() {
  const isAdmin = false;

  return (
    <div>
      <Dashboard>
        {isAdmin ? <AdminDashboard /> : <UserDashboard />}
      </Dashboard>
    </div>
  );
}

export default Panel;
