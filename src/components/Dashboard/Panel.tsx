import React, { ReactNode, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

interface Props {
  children: ReactNode;
}

function Panel() {
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);
  const [pageName, setPageName] = useState<String>(() => {
    return isAdmin ? "Admin Dashboard" : "Hi Frederick, Welcome"
  })

  const changePageState = (props: String) => {
    setPageName(props)
  }

  return (
    <div>
      <Dashboard isAdmin={isAdmin} name={pageName}>
        {isAdmin ? <AdminDashboard isAdmin={isAdmin} changePageState={changePageState} /> : <UserDashboard isAdmin={isAdmin} changePageState={changePageState} />}
      </Dashboard>
    </div>
  );
}

export default Panel;
