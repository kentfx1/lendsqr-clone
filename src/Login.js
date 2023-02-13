import React,{useState} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import img1 from "./image/logo.png";
import img2 from './image/lendsqr.png';
import { Link } from "react-router-dom";

const Login = () => {
    const [passwordType,SetPasswordType] = useState("password")
    const [passwordIcon,SetPasswordIcon] = useState(<FaEyeSlash/>)
    const handleToggle = () =>{
        if(passwordType === "password"){
            SetPasswordType('text');
            SetPasswordIcon(FaEye);
        }else{
            SetPasswordType('password');
            SetPasswordIcon(FaEyeSlash);
        }
    }
    return(
        <div className="firstpage">
            <img className="img-navbar" src={img1} alt="logo" width={200} />
            <div className="container"> 
                <img className="content-img" src={img2} alt="" />
                <div className="login-form">
                    <h1 className="wel">Welcome!</h1>
                    <p className="enter">Enter details to login.</p>
                    <input type="text" placeholder="Email"/><br/><br/>
                    <input type={passwordType} placeholder="Password" />
                    <span className="icon-eye" onClick={handleToggle}>
                        {passwordIcon}
                    </span>
                    <p className="forgot-p">FORGOT PASSWORD?</p>
                    <Link to="/Sidebar"><button>LOG IN</button></Link>
                </div>
            </div>
        </div>
    );
}
 
export default Login;