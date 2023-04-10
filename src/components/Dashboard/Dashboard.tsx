import React, { ReactNode } from 'react';
import { dashboardBackground } from '../../assets';
import SearchForm from './Commons/SearchForm';
import Notification from './Commons/Notification';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';



interface DashboardProps {
  isAdmin: Boolean,
  name: String,
  children: ReactNode,
}

const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  return (
    <>
      <section style={{
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '335px',
          backgroundImage: `url(${dashboardBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
          zIndex: -1,
        }} />
        <div className="container" style={{
          position: 'relative',
          zIndex: 1,
        }}>
          <div className='pt-5'>
            <div className='d-flex justify-content-end py-2'>
              <Notification />
            </div>

            <div className='justify-content-between-sm'>
              <h1 style={{
                fontWeight: '700',
                fontSize: '35px',
                lineHeight: '52px',
                color: '#FFFFFF',
              }}>
                <button className='border-0 bg-transparent pe-3'>
                  <KeyboardBackspaceIcon style={{ color: '#fff', fontSize: '40px' }} />
                </button>
                {props.name}
              </h1>
              <SearchForm />
            </div>
          </div>
        </div>
      </section>
      <div className='container pb-5'>
        {props.children}
      </div>
    </>

  );
}


export default Dashboard;