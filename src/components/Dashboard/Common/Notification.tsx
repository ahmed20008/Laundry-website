import React from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { notificationLogo, notify } from '../../../assets';

const Notification: React.FC = () => {
    return (
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
                                <div style={{ maxWidth: '300px' }}>
                                    <h1 style={{ fontSize: '18px', fontWeight: '500' }}>Notification</h1>
                                    <div className="d-flex justify-content-between">
                                        <img src={notify} className='img-fluid w-25 pe-1' />
                                        <p className='my-auto pe-1' style={{ fontSize: '10px', color: '#464646' }}>Lorem ipsum dolor sit  consectetur. Lacus id arcu</p>
                                        <div className="my-auto d-inline" style={{ fontSize: '8px', color: '#9F9F9F', }}>24 hours ago</div>
                                    </div>
                                </div>
                            </div>
                        </Typography>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
};

export default Notification;
