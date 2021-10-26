import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import  SupervisedUserCircleOutlined  from '@material-ui/icons/SupervisedUserCircleOutlined'
const Header = () => {
    return (
        <div className="header">   
            <div>
                <img src="https://tse1.mm.bing.net/th?id=OIP.aYVbqEFb2M-SWsBh_LafIQHaHa&pid=Api&rs=1&c=1&qlt=95&w=112&h=112" alt="facebook logo" />
            </div>
            <div className="header-input">
                <SearchIcon/>
                <input type="text" name="" placeholder='Search Facebook' />
            </div>
            <div className="header-center">
                <div className="header-option
                header-option--active">
                    <HomeIcon fontsize='large'/>
                </div>
                <div className="header-option">
                    <FlagIcon fontSize='large'/>       
                </div>
                <div className='header-option'>
                    <SubscriptionOutlinedIcon fontsize='large'/>
                </div>
                <div className="header-option">
                    <SupervisedUserCircleOutlined fontsize='large'/>
                </div>
            </div>
        </div>
    )
}

export default Header
