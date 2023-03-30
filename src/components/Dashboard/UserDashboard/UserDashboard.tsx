import React, {useState} from 'react'
import { Button } from '@mui/material';
import MyDashboard from './MyDashboard';
import Subscription from './Subscription';
import PersonalDetail from './PersonalDetail';

const UserDashboard: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<Number>(1);

  const renderComponent = () => {
    switch(currentComponent) {
      case 1:
        return <MyDashboard />;
      case 2:
        return <Subscription />;
      case 3:
        return <PersonalDetail />;
      default:
        return <MyDashboard />;
    }
  }
  const onButtonClick = (props: Number) => {
    setCurrentComponent(props)
  }

  return (
    <div>
        <Button onClick={() => onButtonClick(1)}>My Dashboard</Button>
        <Button onClick={() => onButtonClick(2)}>Personal Detail</Button>
        <Button onClick={() => onButtonClick(3)}>Subscription</Button>
        <Button onClick={() => onButtonClick(4)}>Messages </Button>
        <Button onClick={() => onButtonClick(5)}>Logout</Button>
        <div>
          <h1>MY COMPONENT THAT NEED TO DISPLAY HERE</h1>
          {renderComponent()}
        </div>
    </div>
  )
}

export default UserDashboard