import React from 'react'
import './alertBox.css'

const AlertBox = ({ setShow, setLogout }) => {
    return (
        <div className='box'>
            <div className='content'>
                <h1 className='heading'>Are you sure you want to logout?</h1>
                <div className='option'>
                    <span onClick={() => setLogout(true)}>YES</span>
                    <span onClick={() => setShow(false)}>NO</span>
                </div>
            </div>
        </div>
    )
}

export default AlertBox