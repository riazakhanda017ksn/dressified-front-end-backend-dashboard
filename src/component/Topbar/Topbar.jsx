import { NotificationsNone, Language , Settings} from '@material-ui/icons'
import React from 'react'
import './Topbar.css'

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className='logo'>
                        Dressified
                    </span>
                </div>
                <div className="topbarRight">
                    <div className="topBarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">
                          2
                        </span>
                    </div>
                    <div className="topBarIconContainer">
                        <Language/>
                        <span className="topIconBadge">
                          2
                        </span>
                    </div>
                    <div className="topBarIconContainer">
                        <Settings/>
                        
                    </div>
                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='topAvatar' />
                </div>
            </div>
        </div>
    )
}
