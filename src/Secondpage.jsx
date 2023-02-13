import { FaBriefcase } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUsers} from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { FaCoins } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { GiComputerFan } from "react-icons/gi";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaScroll } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { GoSettings } from "react-icons/go";
import { IoIosAddCircle } from "react-icons/io";
import { BiNotepad } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiTakeMyMoney } from "react-icons/gi";
import { BiAlignJustify } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from 'react-router-dom';
import img1 from "./image/logo.png";
import img2 from "./image/pp.jpeg";
import "./Sidebar.css"
const Secondpage = () => {
    return (
        <div>
            <div className="navbar">
                <nav className="Container">
                    <img src={img1} alt="logo" width={150} height={70} className='navnav-img'/>
                    <form action="/action_page.php" className='navnav-form'>
                        <input  className='input' type="text" placeholder="Search for anything" name="search"/>
                        <HiSearch style={{color: 'white', fontSize: '20px'}} className="navnav-sea"/>
                    </form>
                    <p className='nav-doc'>Docs</p>
                    <FaRegBell className="nav-bell"/>
                    <img src={img2} alt="profile" width={100} className='nav-profile'/>
                    <p className='nav-name'>Adedeji</p>
                    <IoMdArrowDropdown className="nav-drop"/>
                </nav>
                <div className="users">
                    <h2 className="u-name">Users</h2>
                    <div className="user-info">
                        <FaUsers style={{color: 'purple', fontSize: '30px', background: 'violet', borderRadius:'20px'}}/>
                        <p style={{fontSize: '10px', color: 'rgb(17, 17, 103)'}}>USERS</p>
                        <h4>2,453</h4>
                    </div>
                <div className="active">
                    <FaUsers style={{color: 'blue', fontSize: '30px', background: 'lightblue', borderRadius:'20px' }}/>
                    <p style={{fontSize: '10px', color: 'rgb(17, 17, 103)'}}>ACTIVE USERS</p>
                    <h4>2,453</h4>
                </div>
                <div className="user-loan">
                    <GiTakeMyMoney  style={{color: 'orange', fontSize: '30px', background: 'yellow', borderRadius:'20px' }}/>
                    <p style={{fontSize: '10px', color: 'rgb(17, 17, 103)'}}>USERS WITH LOANS</p>
                    <h4>12,453</h4> 
                </div>
                <div className="user-loann">
                    <FaCoins  style={{color: 'red', fontSize: '30px', background: 'pink', borderRadius:'20px' }}/>
                    <p style={{fontSize: '10px', color: 'rgb(17, 17, 103)'}}>USERS WITH SAVINGS</p>
                    <h4>120,453</h4> 
                </div>
            </div>
            <div className="s-bar" style={{position: 'relative', right: '1450px'}}>
                <FaBriefcase style={{fontSize: '20px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Switch Organization</li>
                <FaHome style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Dashboard</li>
                <p style={{fontSize: '12px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}>CUSTOMERS</p>
                < Link to='/thirdpage'><HiUsers style={{fontSize: '20px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li className="user-li">Users</li></Link>
                <FaUsers style={{fontSize: '20px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Guarantors</li>
                <GiMoneyStack style={{fontSize: '20px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Loans</li>
                <FaRegHandshake style={{fontSize: '20px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Decision Models</li>
                <FaPiggyBank style={{fontSize: '20px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Savings</li>
                <GiReceiveMoney style={{fontSize: '20px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/> <li>Loan Requests</li>
                <FaUserCheck style={{fontSize: '20px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li> Whitelist</li>
                <FaUserTimes style={{fontSize: '20px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Karma</li>
                <p style={{fontSize: '12px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}>BUSINESS</p>
                <FaBriefcase style={{fontSize: '20px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Organization</li>
                <GiMoneyStack style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Loan Products</li>
                <CiBank style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li> Savings Products</li>
                <FaCoins style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Fees and Charges</li>
                <BiTransfer style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Transactions</li>
                <GiComputerFan style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Services </li>
                <RiUserSettingsFill style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li> Service Account</li>
                <FaScroll style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li> Settlements</li>
                <GoGraph style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Reports</li>
                <p style={{fontSize: '12px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}>SETTINGS</p>
                <GoSettings style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li> Preferences</li>
                <IoIosAddCircle style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Fees and Pricing</li>
                <BiNotepad style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Audit Logs</li>   
            </div>
            <table style={{position: 'relative', right: '1380px'}}>
                <tr style={{height: '10px'}}>
                    <th className="header">
                        ORGANIZATION <BiAlignJustify style={{fontSize: '10px'}}/>
                    </th>
                    <th className="header2">
                        USERNAME<BiAlignJustify style={{fontSize: '10px'}}/>
                    </th>
                    <th className="header3">
                        EMAIL<BiAlignJustify style={{fontSize: '10px'}}/>
                    </th>
                    <th >
                        PHONE NUMBER<BiAlignJustify style={{fontSize: '10px'}}/>
                    </th>
                    <th style={{width: '250px'}}>
                        DATE JOINED<BiAlignJustify style={{fontSize: '10px'}}/>
                    </th>
                    <th className="header6">
                        STATUS<BiAlignJustify style={{fontSize: '10px'}}/>
                    </th>
                </tr>
                <tr style={{height: '10px'}}>
                    <td>
                        Lendsqr
                    </td>
                    <td>
                        Adedeji
                    </td>
                    <td>
                        adedeji@lendsqr.com
                    </td>
                    <td>
                        08078903721
                    </td>
                    <td >
                        May 15, 2020 10:00AM
                    </td>
                    <td style={{color: '#0047AC', background:'#A1CAF1', borderRadius:'25px',fontSize: '12px'}}>
                        Inactive
                    </td><br></br>
                    <td>
                        <BiDotsVerticalRounded/>
                    </td>
                </tr>
                <tr style={{height: '10px'}}>
                    <td>
                        Irorun
                    </td>
                    <td>
                        Debby Ogana
                    </td>
                    <td>
                        debby2@irorun.com
                    </td>
                    <td>
                        08160780928
                    </td>
                    <td>
                        Apr 30, 2020 10:00AM
                    </td>
                    <td style={{color: '#C8A951', background:'#F3EAAF', borderRadius:'25px', fontSize: '12px'}}>
                        Pending
                    </td><br/>
                    <td>
                        <BiDotsVerticalRounded/>
                    </td>
                </tr>
                <tr style={{height: '10px'}}>
                    <td>
                        Lendsqr
                    </td>
                    <td>
                        Grace Effiom
                    </td>
                    <td>
                        grace@lendsqr.com
                    </td>
                    <td>
                        07060780922
                    </td>
                    <td>
                        Apr 30, 2020 10:00AM
                    </td>
                    <td style={{color: '#7C0A02', background:'pink', fontSize: '12px', borderRadius:'25px'}}>
                        Blacklisted
                    </td><br/>
                    <td>
                        <BiDotsVerticalRounded/>
                    </td>
                </tr>
                <tr style={{height: '10px'}}>
                    <td>
                        Lendsqr
                    </td>
                    <td>
                        Tosin Dounmu
                    </td>
                    <td>
                        tosin@lendsqr.com
                    </td>
                    <td>
                        07003309226
                    </td>
                    <td>
                        Apr 30, 2020 10:00AM
                    </td>
                    <td style={{color: '#C8A951', background:'#F3EAAF', borderRadius:'25px', fontSize: '12px'}}>
                        Pending
                    </td><br></br>
                    <td>
                        <BiDotsVerticalRounded/>
                    </td>
                </tr>
                <tr style={{height: '10px'}}>
                    <td>
                        Lendsqr
                    </td>
                    <td>
                        Grace Effiom
                    </td>
                    <td>
                        grace@lendsqr.com
                    </td>
                    <td>
                        07060780922
                    </td>
                    <td>
                        Apr 30, 2020 10:00AM
                    </td>
                    <td style={{color: 'green', background:'#90EE90', borderRadius:'25px', fontSize: '12px'}}>
                        Active
                    </td><br></br>
                    <td>
                        <BiDotsVerticalRounded/>
                    </td>
                </tr>
                <tr style={{height: '10px'}}>
                    <td>
                        Lendsqr
                    </td>
                    <td>
                        Tosin Dounmu
                    </td>
                    <td>
                        tosin@lendsqr.ßom
                    </td>
                    <td>
                        07003309226
                    </td>
                    <td>
                        Apr 30, 2020 10:00AM
                    </td>
                    <td style={{color: 'green', background:'#90EE90', borderRadius:'25px', fontSize: '12px'}}>
                        Active
                    </td><br></br>
                    <td>
                        <BiDotsVerticalRounded/>
                    </td>
                </tr>
                <tr style={{height: '10px'}}>
                    <td>
                        Lendsqr
                    </td>
                    <td>
                        Grace Effiom
                    </td>
                    <td>
                        grace@lendsqr.com
                    </td>
                    <td>
                        07060780922
                    </td>
                    <td>
                        Apr 30, 2020 10:00AM
                    </td>
                    <td style={{color: '#7C0A02', background:'pink', borderRadius:'25px', fontSize: '12px'}}>
                        Blacklisted
                    </td><br></br>
                    <td>
                        <BiDotsVerticalRounded/>
                    </td>
                </tr>
                <tr style={{height: '10px'}}>
                    <td>
                        Lendsqr
                    </td>
                    <td>
                        Tosin Dounmu
                    </td>
                    <td>
                        tosin@lendsqr.ßom
                    </td>
                    <td>
                        07003309226
                    </td>
                    <td>
                        Apr 30, 2020 10:00AM
                    </td>
                    <td style={{color: '#0047AC', background:'#A1CAF1', borderRadius:'25px', fontSize: '12px'}}>
                        Inactive
                    </td><br></br>
                    <td>
                        <BiDotsVerticalRounded/>
                    </td>
                </tr>
                <tr style={{height: '10px'}}>
                    <td>
                        Lendsqr
                    </td>
                    <td>
                        Grace Effiom
                    </td>
                    <td>
                        grace@lendsqr.com
                    </td>
                    <td>
                        07060780922
                    </td>
                    <td>
                        Apr 30, 2020 10:00AM
                    </td>
                    <td style={{color: '#0047AC', background:'#A1CAF1', borderRadius:'25px', fontSize: '12px'}}>
                        Inactive
                    </td><br></br>
                    <td>
                        <BiDotsVerticalRounded/>
                    </td>
                </tr>
            </table><br></br>
            <div className="scroll-left">
                <div className="show">
                    <p className="p-show">Showing<span style={{ width: '100px', }}> 100<FaChevronDown style={{position: 'relative', left:'5px', top: '3px'}}/></span> </p><p className="pp-show"> out of 100</p>
                </div>
                <div className="left">
                    <p  className="p-left"><FaChevronLeft/>1 2 3 ... 15 16<FaChevronRight/></p>
                    
                </div>
            </div>
            <div className="form-2">
                <form action="#" method="get" >
                    <label htmlFor="organization">Organization</label><br/>
                    <input type="#" placeholder="Select" className="form22" /><FaChevronDown style={{position: 'relative', left:'140px', top: '3px'}}/><br/><br/>
                    <label htmlFor="username" >Username</label><br/>
                    <input type="text" placeholder="User" className="form22" /><br/><br/>
                    <label htmlFor="email">Email</label><br/>
                    <input type="email"  placeholder="Email" className="form22" /><br/><br/>
                    <label htmlFor="date">Date</label><br/>
                    <input type="date" name="date" id="#" placeholder="Date" className="form22"/><br/><br/>
                    <label htmlFor="date">Phone Number</label><br/>
                    <input type="#" name="date" id="#" placeholder="Phone Number" className="form22"/><br/><br/>
                    <label htmlFor="date">Status</label><br/>
                    <input type="text" name="date" id="#" placeholder="select" className="form22"/>
                    <button className="reset">Reset</button>
                    <button className="filter">Filter</button>
                </form>
            </div>  
        </div>
    </div>
    );
}
 
export default Secondpage;