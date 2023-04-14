import React, { useState } from 'react';
import { SettingsImg } from '../../../assets'
import Grid from '@mui/material/Grid';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import './Settings.css';
import Logout from './Logout';
import ConfirmAddress from '../../SchedulePickup/ConfirmAddress';

interface SettingProps {
    isAdmin: Boolean;
};


const Settings: React.FC<SettingProps> = ({ isAdmin }) => {

    const navigate = useNavigate();
    function handleButtonClick(): void {
        navigate('/change-password');
    }

    const [open, setOpen] = useState(false);
    const onLogoutPress = () => {
        setOpen(true)
    }
    const handleGoBackClick = () => {
        window.location.reload();
    };
    return (
        <>
            <div>
                <Logout open={open} setOpen={setOpen} />
                <div className="close pb-4">
                    <div className="d-flex justify-content-between">
                        <div className='setting-heading py-2'>
                            Settings
                        </div>
                        <button className='border-0 bg-transparent'
                            onClick={() => { handleGoBackClick(); }}
                        >
                            <ClearIcon />
                        </button>
                    </div>
                </div>
                <div>
                    <div className="d-flex profile-info pb-4">
                        {!isAdmin ? (
                            <>
                                <img src={SettingsImg} className='img-fluid' />
                                <div className='ms-2'>
                                    <h2>Frederick Jones</h2>
                                    <p>zizo.hamdy016@gmail.com</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <img src={SettingsImg} className='img-fluid' />
                                <div className='ms-2'>
                                    <h2>ADMIN</h2>
                                    <p>support@laundry24.ng</p>
                                </div>
                            </>
                        )}
                    </div>
                    {!isAdmin ? (
                        <div>
                            <button className='bg-transparent border-0 setting-btn py-4'>
                                My Addresses
                            </button>
                        </div>
                    ) : (null)
                    }
                    <div>
                        <button className='bg-transparent border-0 setting-btn py-4' onClick={handleButtonClick}>
                            Change Password
                        </button>
                    </div>
                    <div className='d-flex justify-content-between align-items-center py-4'>
                        <button className='bg-transparent border-0 setting-btn'>
                            Help
                        </button>
                        <div>
                            <Grid item xs={8}>
                                <KeyboardArrowRightIcon />
                            </Grid>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center py-4'>
                        <button className='bg-transparent border-0 setting-btn'
                            onClick={() => onLogoutPress()}
                        >
                            Log out
                        </button>
                        <div>
                            <Grid item xs={8}>
                                <LogoutIcon />
                            </Grid>
                        </div>
                    </div>
                    <p className='version pt-4 pb-5'>Version <span>8.2.12</span></p>
                </div>
            </div>
        </>
    )
}

export default Settings