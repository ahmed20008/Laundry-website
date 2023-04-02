import React, { useState } from 'react'
import Avatar from './Avatar'
import { Button } from '@mui/material';
import { Settings } from '@mui/icons-material';
import Logout from "./Logout";
import { logoutBtn } from '../../../assets';

interface Button {
    name: string;
    logo: string;
}
interface SideBarProps {
    onButtonClick: (id: Number) => void,
    name: String,
    email: String,
    buttons: Button[],
    isAdmin: Boolean,
}

const SideBar: React.FC<SideBarProps> = ({ onButtonClick, name, email, buttons, isAdmin }: SideBarProps) => {
    const [open, setOpen] = useState(false);
    const onLogoutPress = () => {
        setOpen(true)
    }
    return (
        <>
            <Logout open={open} setOpen={setOpen} />
            <div className='bg-white p-3'
                style={{
                    boxShadow: '0px 4px 14px 2px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                }}>
                <div>
                    <Settings />
                </div>
                <div>
                    <Avatar />
                </div>
                <div className='pb-3'>
                    <h2 className='text-center'
                        style={{
                            fontWeight: '600',
                            fontSize: '22px',
                            color: '#464646',
                        }}>
                        {name}
                    </h2>
                    <p className='text-center'
                        style={{
                            fontSize: '12px',
                            lineHeight: '31px',
                            letterSpacing: '0.045em',
                            color: '#9F9F9F',
                        }}>
                        {email}</p>
                    <div className='text-center pt-3'>
                        {
                            !isAdmin ? (
                                <>
                                    <Button
                                        variant="outlined"
                                        className='me-1'
                                        style={{
                                            borderColor: '#35A7FF',
                                            color: '#35A7FF',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            borderRadius: '10px',
                                        }}>
                                        N4,500
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className='ms-1 px-5'
                                        style={{
                                            background: '#35A7FF',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            textTransform: 'capitalize',
                                            borderRadius: '10px'
                                        }}>
                                        Top-up
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        variant="contained"
                                        className='ms-1 px-5'
                                        style={{
                                            background: '#35A7FF',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            textTransform: 'capitalize',
                                            borderRadius: '10px'
                                        }}>
                                        New Admin User
                                    </Button>
                                </>
                            )
                        }
                    </div>
                </div>
                <hr />
                <div className='py-3 px-2'>
                    {
                        buttons.map((btn, index) => (
                            <div className='py-2 text-start' key={index}>
                                <Button
                                    onClick={() => onButtonClick(index)}
                                    style={{ color: '#818181', fontSize: '15px', fontWeight: '600', textTransform: 'capitalize', }}>
                                    <img src={btn.logo} className='pe-3' />
                                    {btn.name}
                                </Button>
                            </div>
                        ))}
                    {/* button for logout */}
                    <div className='py-2 text-start'>
                        <Button
                            onClick={() => onLogoutPress()}
                            style={{ color: '#818181', fontSize: '15px', fontWeight: '600', textTransform: 'capitalize', }}>
                            <img src={logoutBtn} className='pe-3' />
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar