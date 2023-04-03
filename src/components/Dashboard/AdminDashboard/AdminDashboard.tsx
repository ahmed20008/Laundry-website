import React, { useState, useEffect } from 'react'
import { dashboardBtn, financialBtn, logout, manageOrderBtn, messagesBtn, myCostumersBtn } from '../../../assets';
import SideBar from '../Commons/SideBar';
import { AdminDashboardPage, MyCostumers, ManageOrders, Financials, Messages } from './index';

interface AdminDashboardProps {
  isAdmin: Boolean,
  changePageState: (name: String) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = (props: AdminDashboardProps) => {
  const [currentComponent, setCurrentComponent] = useState<Number>(0);
  const [name, setName] = useState<String>("ADMIN");
  const [email, setEmail] = useState<String>("support@laundry24.ng");
  const [isAdmin, setIsAdmin] = useState<Boolean>(props.isAdmin)

  const renderComponent = () => {
    switch (currentComponent) {
      case 0:
        return <AdminDashboardPage />;
      case 1:
        return <MyCostumers />;
      case 2:
        return <ManageOrders />;
      case 3:
        return <Financials />;
      case 4:
        return <Messages />;
      default:
        return <AdminDashboardPage />;
    }
  }
  const onButtonClick = (props: Number) => {
    setCurrentComponent(props)
  }

  useEffect(() => {
    const newPageState = currentComponent === 0 ? `Admin Dashboard` : buttons[Number(currentComponent)].name;
    props.changePageState(newPageState)
  }, [currentComponent])


  const buttons = [
    {
      name: "Admin Dashboard",
      logo: dashboardBtn
    },
    {
      name: "My Customer",
      logo: myCostumersBtn
    },
    {
      name: "Manage order",
      logo: manageOrderBtn
    },
    {
      name: "Financials",
      logo: financialBtn
    },
    {
      name: "Message",
      logo: messagesBtn
    }
  ]

  return (
    <>
      <div className="row mt-4">
        <div className="col-lg-3 col-md-12 px-1">
          <SideBar onButtonClick={onButtonClick} name={name} email={email} buttons={buttons} isAdmin={isAdmin} />
        </div>
        <div className="col-lg-9 col-md-12">
          {renderComponent()}
        </div>
      </div >
    </>

  )
}

export default AdminDashboard