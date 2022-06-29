import React from 'react'
import "./Topbar.css"
//import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
//import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar(){
    return(
        <div className='topbar'>
            <div className='topbarwrapper'>
                <div className='topleft'>
                    <span className='logo'>Wiseravel</span>
                    </div>
                <div className='topright'>
                    <div className="topbariconcontainer">                    
                        <NotificationsActiveIcon />                        
                        <span className='topiconbadge'>2</span>
                        </div>
                        <div className="topbariconcontainer">       
                        <LanguageIcon />                    
                        <span className='topiconbadge'>2</span>
                        </div>
                        <div className="topbariconcontainer">                    
                        <SettingsIcon />                        
                        <span className='topiconbadge'>2</span>
                    </div>
                    <img src="img1.JPG" alt="" className="topavatar" />
                </div>
            </div>
            
        </div>
    );

}