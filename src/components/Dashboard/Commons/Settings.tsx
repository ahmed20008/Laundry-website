import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { SettingsImg, settingLogo } from '../../../assets'
import Grid from '@mui/material/Grid';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LogoutIcon from '@mui/icons-material/Logout';
import './Settings.css'

const Settings: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <>
            <div>
                <button aria-describedby={id} onClick={handleClick} className='border-0 bg-transparent'>
                    <img src={settingLogo} />
                </button>
            </div>
            <div>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}>
                    <Typography sx={{ p: 2 }}>
                        <div className="close pb-4">
                            <div className="d-flex justify-content-between">
                                <div className='setting-heading'>
                                    Settings
                                </div>
                                <Grid item xs={8}>
                                    <button className='border-0 bg-transparent'>
                                        <ClearIcon onClick={handleClose}/>
                                    </button>
                                </Grid>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex profile-info pb-3">
                                <img src={SettingsImg} className='img-fluid' />
                                <div className='ms-2'>
                                    <h2>Frederick Jones</h2>
                                    <p>zizo.hamdy016@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <button className='bg-transparent border-0 setting-btn py-4'>
                                    My Addresses
                                </button>
                            </div>
                            <div>
                                <button className='bg-transparent border-0 setting-btn py-4 '>
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
                                <button className='bg-transparent border-0 setting-btn'>
                                    Log out
                                </button>
                                <div>
                                <Grid item xs={8}>
                                    <LogoutIcon />
                                </Grid>
                                </div>
                            </div>
                            <p className='version py-3'>Version <span>8.2.12</span></p>
                        </div>
                    </Typography>
                </Popover>
            </div>
        </>
    )
}

export default Settings