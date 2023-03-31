import React, { ReactNode } from 'react';
import { dashboardBackground, notificationLogo, notify } from '../../assets';
import SearchForm from './Common/SearchForm';
import Notification from './Common/Notification';


interface Props {
  children: ReactNode;
}

export function Dashboard(props: Props) {
  return (
    <>
      <section style={{
        position: 'relative', /* make the section a positioned container for absolute positioning of its children */
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
              <Notification/>
            </div>
            
            <div className='d-flex justify-content-between'>
              <h1 style={{
                fontWeight: '700',
                fontSize: '35px',
                lineHeight: '52px',
                color: '#FFFFFF',
              }}>Hi Frederick, Welcome</h1>
              <SearchForm />
            </div>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className="row">
          {props.children}
        </div>
      </div>
    </>

  );
}
