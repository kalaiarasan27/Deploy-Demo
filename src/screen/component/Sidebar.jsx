import { FaBars, FaUserFriends } from "react-icons/fa";
import { HiHome, HiUserGroup } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { AiOutlineProduct } from "react-icons/ai";
import logo from "../../assets/image/logotrans.png";
import {
  MdOutlineBookmarks,
  MdOutlineNotificationsActive,
  MdOutlineRateReview,
  MdOutlineSettings,
  MdPayment,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

function Sidebar({ children }) {
  const mentItem = [
    { path: "/", name: "Dashboard", icon: <HiHome /> },
    { path: "/Dealer", name: "Dealer", icon: <FaUserFriends /> },
    { path: "/User", name: "User", icon: <HiUserGroup /> },
    { path: "/Order", name: "Orders", icon: <AiOutlineProduct /> },
    { path: "/Payment", name: "Payment", icon: <MdPayment /> },
    { path: "/Pricelist", name: "Pricelist", icon: <CgNotes /> },
    { path: "/Setting", name: "General Settings", icon: <MdOutlineSettings /> },
    {
      path: "/Notification",
      name: "Push Notification",
      icon: <MdOutlineNotificationsActive />,
    },
    { path: "/Rating", name: "Review/Rating", icon: <MdOutlineRateReview /> },
    { path: "/Report", name: "Earning Report", icon: <TbReportAnalytics /> },
    { path: "/Booking", name: "Manual booking", icon: <MdOutlineBookmarks /> },
    { path: "/Logout", name: "Logout", icon: <IoLogInOutline /> }
  ];

  return (
    <div className="container-fluid p-0">
      <div className="sidebar col-2">
        <div className="top_section">
          <img
            src={logo}
            style={{ height: "35px", width: "35px" }}
            alt="Logo"
          />
          <span className="top_section_text">RECYCHBS</span>
        </div>
        <div className="sidebar-content">
          {mentItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) => `link ${isActive ? "active" : ""}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="icon">{item.icon}</div>
                <div className="icon-text">{item.name}</div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="content col-10">{children}</div>
    </div>
  );
}

export default Sidebar;
