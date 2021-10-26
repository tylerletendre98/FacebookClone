import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
    return (
        <div className="header">   
            <div>
                <img src="https://tse1.mm.bing.net/th?id=OIP.aYVbqEFb2M-SWsBh_LafIQHaHa&pid=Api&rs=1&c=1&qlt=95&w=112&h=112" alt="facebook logo" />
            </div>
            <div className="header-input">
                <SearchIcon/>
                <input type="text" name="" placeholder='Search' />
            </div>
        </div>
    )
}

export default Header
