import React, { ReactNode } from 'react';
import { dashboardBackground, notificationLogo, notify } from '../../assets';
import SearchForm from './Common/SearchForm';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

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
              <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <button className='border-0 bg-transparent' {...bindTrigger(popupState)}>
                  <img src={notificationLogo} />
                  </button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      <div className="row">
                        <div  style={{maxWidth: '300px'}}>
                        <h1 style={{fontSize: '18px', fontWeight: '500'}}>Notification</h1>
                          <div className="d-flex justify-content-between">
                            <img src={notify} className='img-fluid w-25 pe-1'/>
                            <p className='my-auto pe-1' style={{fontSize:'10px', color: '#464646'}}>Lorem ipsum dolor sit  consectetur. Lacus id arcu</p>
                            <div className="my-auto d-inline" style={{fontSize: '8px', color: '#9F9F9F',}}>24 hours ago</div>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
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
