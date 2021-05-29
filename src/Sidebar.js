import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { BookmarkBorder, ListAlt, MailOutline, MoreHoriz, PermIdentity } from '@material-ui/icons';
import {Button} from "@material-ui/core"


function Sidebar() {
    return (
        <div className="sidebar">
                {/* Twitter icon*/}
                <TwitterIcon className="sidebar-twitterIcon" />
                {/* Sidebar Option*/}
                <SidebarOption active Icon={HomeIcon} text="Home" />
                <SidebarOption Icon={SearchIcon} text="Explore"/>
                <SidebarOption Icon={NotificationsNoneIcon} text="Notification"/>
                <SidebarOption Icon={MailOutline} text="MailOutline"/>
                <SidebarOption Icon={BookmarkBorder} text="Bookmark"/>
                <SidebarOption Icon={ListAlt} text="ListAlt"/>
                <SidebarOption Icon={PermIdentity} text="PermIdentity"/>
                <SidebarOption Icon={MoreHoriz} text="More"/>
                {/* Button -> Tweet */}
                <Button variant="outlined" fullWidth className="sidebar-tweet-button">Nice Day!</Button>
            
        </div>
    )
}

export default Sidebar
