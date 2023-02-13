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
// import { GiTakeMyMoney } from "react-icons/gi";
// import { BiAlignJustify } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
// import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg"
import { Link } from 'react-router-dom';
import img1 from "./image/logo.png";
import img2 from "./image/pp.jpeg";
// import "./Sidebar.css"
import "./Thirdpage.css"
const Thirdpage = () => {
    return (
        <div className="thirdpage">
            <div className="navbar">
                <nav className="Container">
                    <img src={img1} alt="logo" width={150} height={70} className='navnav-img'/>
                    <form action="/action_page.php" className='navnav-form'>
                        <input type="text" placeholder="Search for anything" name="search"/>
                        <HiSearch style={{color: 'white', fontSize: '20px'}} className="navnav-sea"/>
                    </form>
                    <p className='nav-doc'>Docs</p>
                    <FaRegBell className="nav-bell"/>
                    <img src={img2} alt="profile" width={100} className='nav-profile'/>
                    <p className='nav-name'>Adedeji</p>
                    <IoMdArrowDropdown className="nav-drop"/>
                </nav>
                <div className="s-bar" style={{position: 'relative', right: '800px'}}>
                    <FaBriefcase style={{fontSize: '20px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Switch Organization</li>
                    <FaHome style={{fontSize: '20px',position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li>Dashboard</li>
                    <p style={{fontSize: '12px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}>CUSTOMERS</p>
                    <Link to="/Secondpage"><HiUsers style={{fontSize: '20px', position:'relative', left: '10px', color: 'rgb(17, 17, 103)'}}/><li className="user-li">Users</li></Link>
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
                <div className="users">
                    <BiArrowBack className="arrow"/> 
                    <p className="user-p">Back to Users</p>
                    <div className=" users-1">
                        <h4>User Details</h4>
                        <button className="btn1">BLACKLISTED USER</button>
                        <button className="btn2">ACTIVATE USER</button>
                    </div>
                </div>
                <div className="info">
                    <div className="info-2">
                        <div className="info-3">
                            <CgProfile className="info-3hh" style={{fontSize: "50px"}}/>
                            <h4 className="info-3hg">Grace Effiom</h4>
                            <p className="info-3pg">LSQFf587g90</p>
                        </div>
                        <div className="info-3">
                            <h4 className="info-3hn">User's Tier</h4>
                            <AiFillStar className="info-3ps"/><AiOutlineStar className="info-3ps"/><AiOutlineStar className="info-3ps"/>
                        </div>
                        <div className="info-3">
                            <h4 className="info-3hj">#200,000</h4>
                            <p className="info-3ph">9912345678/Providus Bank</p>
                        </div>
                    </div>
                    <div className="general">
                        <p className="general-p" style={{color: 'rgb(0, 214, 229)'}}>General Details</p>
                        <p className="general-p">Documents</p>
                        <p className="general-p">Bank Details</p>
                        <p className="general-p">Loans</p>
                        <p className="general-p">savings</p>
                        <p className="general-p">App System</p>
                    </div>
                </div>
                <div>
                    <h5 className="title">Personal Information</h5>
                    <div className="personal">
                        <div>
                            <p>FULL NAME</p>
                            <h5>Grace Effiom</h5>
                        </div>
                        <div>
                            <p>PHONE NUMBER</p>
                            <h5>07060780922</h5>
                        </div>
                        <div>
                            <p>EMAIL ADDRESS</p>
                            <h5>grace@gmail.com</h5>
                        </div>
                        <div>
                            <p>BVN</p>
                            <h5>07060780922</h5>
                        </div>
                        <div>
                            <p>GENDER</p>
                            <h5>Female</h5>
                        </div><br/>
                        <div className="personal-p">
                            <div>
                                <p>BVN</p>
                                <h5>07060780922</h5>
                            </div>
                            <div>
                                <p>MARITAL STATUS</p>
                                <h5>Single</h5>
                            </div>
                            <div>
                                <p>CHILDREN</p>
                                <h5>None</h5>
                            </div>
                            <div>
                                <p>TYPE OF RESIDENCE</p>
                                <h5>Parent's Apartment</h5>
                            </div>
                        </div>
                        
                    </div>
                    <h5 className="title" id="title-edu">Education and Employment</h5>
                    <div className="edu">
                        <div>
                            <p>LEVEL OF EDUCATION</p>
                            <h5>Bsc</h5>
                        </div>
                        <div>
                            <p>EMPLOYMENT STATUS</p>
                            <h5>Employed</h5>
                        </div>
                        <div>
                            <p>SECTOR OF EMPLOYMENT</p>
                            <h5>Fintech</h5>
                        </div>
                        <div>
                            <p>DURATION OF EMPLOYMENT</p>
                            <h5>2 years</h5>
                        </div>
                        <div><br/>
                            <p>OFFICE EMAIL</p>
                            <h5>grace@lendsqr.com</h5>
                        </div>
                        <div>
                            <p>MONTHLY INCOME</p>
                            <h5>#200,000 - #400,000</h5>
                        </div>
                        <div>
                            <p>LOAN REPAYMENT</p>
                            <h5>40,000</h5>
                        </div>
                    </div>
                    <h5 className="title">Socials</h5>
                    <div className="socials">
                        <div>
                            <p>TWITTER</p>
                            <h5>@grace_effiom</h5>
                        </div>
                        <div>
                            <p>FACEBOOK</p>
                            <h5>Grace Effiom</h5>
                        </div>
                        <div>
                            <p>INSTAGRAM</p>
                            <h5>@grace_effiom</h5>
                        </div>
                    </div> 
                    <h5 className="title">Guarantor</h5>
                    <div className="guarantor">
                        <div>
                            <p>FULL NAME</p>
                            <h5>Debby Ogana</h5>
                        </div>
                        <div>
                            <p>PHONE NUMBER</p>
                            <h5>07060780922</h5>
                        </div>
                        <div>
                            <p>EMAIL ADDRESS</p>
                            <h5>debby@gmail</h5>
                        </div>
                        <div>
                            <p>RELATIONSHP</p>
                            <h5>Sister</h5>
                        </div>
                    </div>
                    <div className="guarantor-2">
                        <div>
                            <p>FULL NAME</p>
                            <h5>Debby Ogana</h5>
                        </div>
                        <div>
                            <p>PHONE NUMBER</p>
                            <h5>07060780922</h5>
                        </div>
                        <div>
                            <p>EMAIL ADDRESS</p>
                            <h5>debby@gmail</h5>
                        </div>
                        <div>
                            <p>RELATIONSHP</p>
                            <h5>Sister</h5>
                        </div>
                        
                    </div>
                </div>
                <div className="scroll-left">
                    <div className="show">
                        <p className="p-show">Showing<span style={{ width: '100px', }}> 100<FaChevronDown style={{position: 'relative', left:'5px', top: '3px'}}/></span> </p><p className="pp-show"> out of 100</p>
                    </div>
                    <div className="left">
                        <p  className="p-left"><FaChevronLeft/>1 2 3 ... 15 16<FaChevronRight/></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Thirdpage;