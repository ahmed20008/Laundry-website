import React, { useState, useEffect } from 'react'
import MyDashboard from './MyDashboard';
import Subscription from './Subscription';
import PersonalDetail from './PersonalDetail';
import Messages from '../Commons/Messages';
import { dashboardBtn, logoutBtn, messagesBtn, personalDetailBtn, subscriptionBtn } from '../../../assets';
import SideBar from '../Commons/SideBar';
import Logout from '../Commons/Logout';

interface UserDashboardProps {
  isAdmin: Boolean,
  changePageState: (name: String) => void;
}

const UserDashboard: React.FC<UserDashboardProps> = (props: UserDashboardProps) => {
  const [currentComponent, setCurrentComponent] = useState<Number>(0);
  const [name, setName] = useState<String>("Frederick Jones");
  const [email, setEmail] = useState<String>("frederickjones10@gmail.com");
  const [isAdmin, setIsAdmin] = useState<Boolean>(props.isAdmin);

  const renderComponent = () => {
    switch (currentComponent) {
      case 0:
        return <MyDashboard />;
      case 1:
        return <PersonalDetail />;
      case 2:
        return <Subscription />;
      case 3:
        return <Messages />;
      case 4:
        return <Logout />;
      default:
        return <MyDashboard />;
    }
  }

  const buttons = [
    {
      name: "My Dashboard",
      logo: dashboardBtn
    },
    {
      name: "Personal Detail",
      logo: personalDetailBtn
    },
    {
      name: "Subscription",
      logo: subscriptionBtn
    },
    {
      name: "Messages",
      logo: messagesBtn
    },
    {
      name: "Logout",
      logo: logoutBtn
    },
  ]

  const onButtonClick = (props: Number) => {
    setCurrentComponent(props)
  }

  useEffect(() => {
    const newPageState = currentComponent === 0 ? `Hi ${name}, Welcome` : buttons[Number(currentComponent)].name;
    props.changePageState(newPageState)
  }, [currentComponent])

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

export default UserDashboard