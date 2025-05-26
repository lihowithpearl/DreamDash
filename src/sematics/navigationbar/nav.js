import "./nav.css";
import defaultpfp from "./defaultpfp.png";
import TemplatePage from "../../pages/template/templatepage";
import Dashboard from "../../pages/dashboard/dashboard";
import Home from "../../pages/home/home";
import {Routes,Route, useNavigate} from 'react-router-dom';

const Nav = () =>{
    const navigate = useNavigate();
    const navigateHome = () =>{
        navigate("/");
    }
    const navigateTemplate = () =>{
        navigate("/template");
    }
        const navigateDashboard = () =>{
        navigate("/dashboard");
    }
    return (
        <div id = "navbar">
            <div class="navitem">
                <div id = "logo" >Logo</div>
            </div>
            <ul class="navitem navigationbar">
                <li>
                    <span onClick={navigateHome}>Home</span>
                </li>
                <li>
                    <span onClick={navigateTemplate}>TemplatePage</span>
                </li>
                <li>
                    <span onClick={navigateDashboard}>Dashboard </span>
                </li>
            </ul>
            <div class="navitem">
                <div class ="pfp"><img src={defaultpfp}></img></div>
                <div class="profile">
                    <div class="pname">
                    Your Name
                    </div>
                    <div class="pfpmenu">
                        <button class="pfpbtn">˅</button>
                        
                        <ul class="dropdown">
                            <li>
                                Profile
                            </li>
                            <li>
                                Notification
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    );
    
}

export default Nav;