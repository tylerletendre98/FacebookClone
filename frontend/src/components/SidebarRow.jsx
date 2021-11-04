import React from 'react'
import { Avatar } from '@material-ui/core'
import './sidebarRow.css'

const SidebarRow = ({src,Icon, title})=>{
    return(
        <div>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}

            <p>{title}</p>
        </div>
    )
}

export default SidebarRow