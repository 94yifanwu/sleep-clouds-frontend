import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
//import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
//import { BookmarkBorder, ListAlt, MailOutline, MoreHoriz, PermIdentity } from '@material-ui/icons';
import { Button } from "@material-ui/core"


function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon*/}

            {/* Sidebar Option*/}
            <SidebarOption active Icon={SearchIcon} text="Story Clouds" />
            <SidebarOption Icon={HomeIcon} text="Live Clouds" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Morning Clouds" />


            {/* Button -> Tweet */}
            <Button variant="outlined" fullWidth className="sidebar-tweet-button">
                <span >Request to MQTT</span>
            </Button>

        </div>
    )
}

export default Sidebar
