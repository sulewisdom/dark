import "./Sidebar.css"
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import TimelineIcon from '@mui/icons-material/Timeline';
import PeopleIcon from '@mui/icons-material/People';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ForumIcon from '@mui/icons-material/Forum';
import SendIcon from '@mui/icons-material/Send';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReportIcon from '@mui/icons-material/Report';

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">DAshboard</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem active">
                                <DensitySmallIcon className="sidebaricon"/> 
                                HOME
                                
                            </li>
                            <li className="sidebarlistitem">
                                <TimelineIcon className="sidebaricon"/> 
                                Analitics
                                
                            </li>
                            <li className="sidebarlistitem">
                                <ShoppingCartIcon className="sidebaricon"/> 
                                Sales
                                
                            </li>
                        </ul>
                    
                </div>

                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Quick Menu</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem">
                                <PeopleIcon className="sidebaricon"/> 
                                User
                                
                            </li>
                            <li className="sidebarlistitem">
                                <ProductionQuantityLimitsIcon className="sidebaricon"/> 
                                Product
                                
                            </li>
                            <li className="sidebarlistitem">
                                <PaidIcon className="sidebaricon"/> 
                                Transactions
                                
                            </li>
                            <li className="sidebarlistitem">
                                <AssessmentIcon className="sidebaricon"/> 
                                Reports
                                
                            </li>
                        </ul>
                    
                </div>

                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Notifications</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem">
                                <MailOutlineIcon className="sidebaricon" /> 
                                Mail
                                
                            </li>
                            <li className="sidebarlistitem">
                                <ForumIcon className="sidebaricon"/> 
                                Feedback
                                
                            </li>
                            <li className="sidebarlistitem">
                                <SendIcon className="sidebaricon"/> 
                                Message
                                
                            </li>
                        </ul>
                    
                </div>

                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Staff</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem">
                                <ManageAccountsIcon className="sidebaricon" /> 
                                Manage
                                
                            </li>
                            <li className="sidebarlistitem">
                                <TimelineIcon className="sidebaricon"/> 
                                Analitics
                                
                            </li>
                            <li className="sidebarlistitem">
                                <ReportIcon className="sidebaricon"/> 
                                Reports
                                
                            </li>
                        </ul>
                    
                </div>
            </div>


        </div>
    )
}