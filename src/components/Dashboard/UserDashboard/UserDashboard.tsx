import React, { useState, useEffect } from 'react'
import MyDashboard from './MyDashboard';
import Subscription from './Subscription';
import PersonalDetail from './PersonalDetail';
import Messages from '../Commons/Messages';
import { dashboardBtn, messagesBtn, personalDetailBtn, subscriptionBtn } from '../../../assets';
import SideBar from '../Commons/SideBar';
import MyOrder from './MyOrder';
import Invoice from './Invoice';
import MyWallet from './MyWallet';
import { HelpCenter } from '@mui/icons-material';
import { helpCenter, invoice, myOrderBtn, myWallet } from '../../../assets';

interface UserDashboardProps {
  isAdmin: Boolean,
  changePageState: (name: String) => void;
}

const UserDashboard: React.FC<UserDashboardProps> = (props: UserDashboardProps) => {
  const [currentComponent, setCurrentComponent] = useState<Number>(0);
  const [name, setName] = useState<String>("Frederick Jones");
  const [email, setEmail] = useState<String>("frederickjones10@gmail.com");
  const [isAdmin, setIsAdmin] = useState<Boolean>(props.isAdmin);
  const TopMenuStartIndex = 5;

  const renderComponent = () => {
    switch (currentComponent) {
      case 0:
        return <MyDashboard onButtonClick={onButtonClick} buttons={topMenuButtons} menuStartIndex={TopMenuStartIndex} />;
      case 1:
        return <PersonalDetail />;
      case 2:
        return <Subscription />;
      case 3:
        return <Messages />;
      case 5:
        return <MyOrder />
      case 6:
        return <Invoice />
      case 7:
        return <MyWallet />
      case 8:
        return <HelpCenter />
      default:
        return <MyDashboard onButtonClick={onButtonClick} buttons={topMenuButtons} menuStartIndex={TopMenuStartIndex} />;
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
    }
  ]

  const topMenuButtons = [
    {
      name: "My Order",
      logo: myOrderBtn
    },
    {
      name: "Invoice",
      notify: "1",
      logo: invoice
    },
    {
      name: "My Wallet",
      logo: myWallet
    },
    {
      name: "Help Center",
      logo: helpCenter
    },
  ]

  const onButtonClick = (props: Number) => {
    setCurrentComponent(props)
  }

  useEffect(() => {
    const newPageState = currentComponent === 0 ? `Hi ${name}, Welcome` : (buttons[Number(currentComponent)] != undefined ? buttons[Number(currentComponent)].name : topMenuButtons[Number(currentComponent) - TopMenuStartIndex].name);
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