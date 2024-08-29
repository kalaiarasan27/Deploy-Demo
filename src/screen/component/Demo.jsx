import { useState } from "react";
import { FaBars, FaUserFriends } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import { IoLogInOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { AiOutlineProduct } from "react-icons/ai";
import logo from "../../assets/image/logotrans.png";


function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const mentItem = [
    { path: "/", name: "dashboard", icon: <HiHome /> },
    { path: "/Order", name: "Orders", icon: <AiOutlineProduct /> },
    { path: "/Pricelist", name: "Pricelist", icon: <CgNotes /> },
    { path: "/Dealer", name: "Dealer", icon: <FaUserFriends /> },
    { path: "/Logout", name: "Logout", icon: <IoLogInOutline /> },
  ];

  return (
    <div className="container-sidebar bg-info">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="col-3 bg-warning sidebar">
        <div
          className="top_section"
          style={{ justifyContent: isOpen ? "space-between" : "center" }}
        >
          <img src={logo} style={{display: isOpen ? "block" : "none"}} className="logosidebar"/>
          <div className="bars" onClick={toggle}>
            <FaBars style={{ color: "#fff", cursor: "pointer" }} />
          </div>
        </div>
  
        {mentItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => `link ${isActive ? "active" : ""}`}
            
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="icon-text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="bg-danger col-9">
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
