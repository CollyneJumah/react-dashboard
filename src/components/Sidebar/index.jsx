import './sidebar.css'
import Logo from '../../images/tawi-logo.png'
import {UilSignOutAlt, UilExclamationCircle} from '@iconscout/react-unicons'

import { SidebarMenus } from '../../Data/menus'
import { useState } from 'react'

const Sidebar = ()=>{
    const [selected, setSelected] = useState(0)
    return (
        <div className='sidebar'>
            <div className="logo">
                <img src={Logo} alt="logo" />
                {/* <span>Tawi Design</span> */}
            </div>
            <div className="menus">
               {
                   SidebarMenus.map( (item,index) =>{
                       return (
                        <div 
                            className={selected === index?'menu-item active':'menu-item'} 
                            onClick={()=> setSelected(index)}
                            key={index}>
                            <item.icon />
                            <span>{item.heading}</span>
                        </div>
                       )
                   } )
               }

                <div className="menu-item center-menus">
                    <UilExclamationCircle />
                    <small>Help Center</small>
                </div>
                <div className="menu-item center-menus">
                    <UilSignOutAlt />
                    <span>Logout</span>
                </div>
            </div>
           
        </div>
    )
}

export default Sidebar