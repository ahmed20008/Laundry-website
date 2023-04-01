import React from 'react'
import { avatar, editAvatar } from '../../../assets'

const Avatar: React.FC = () => {
    return (
        <>
            <div className='text-center pt-3'>
                <img src={avatar} alt="Avatar" />
                <div style={{
                    position: 'relative',
                    top: '-30px',
                    left: '35px'
                }}>
                    <button className='border-0 bg-transparent'>
                        <img src={editAvatar} />
                    </button>
                </div>
            </div>

        </>

    )
}

export default Avatar
