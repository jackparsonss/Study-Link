import React from "react";
import "./NavBar.css";
import { FaHome } from "react-icons/fa";
import { HiChat } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { GiNotebook } from "react-icons/gi";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

function NavBar() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="nav">
      <div className="NavItem Home">
        <FaHome className="NavIcon" />
        <p className="navText">Study Link</p>
      </div>

      <div className="NavItem">
        <GiNotebook className="NavIcon" />
        <p className="navText">Classes</p>
      </div>

      <div className="NavItem">
        <HiChat className="NavIcon" />
        <p className="navText">Chat</p>
      </div>

      <div className="NavItem" onClick={handleLogout}>
        <FiSettings className="NavIcon" />
        <p className="navText">Settings</p>
      </div>

      {/* <ul class="nav__links">
      <li><a className="studylinks" href="#1">StudyLinks</a></li>
      <li>
        <div className="Classes">
          <FaHome className="ClassIcon" />
          <a href="#2">Classes</a>
        </div>


      </li>







      <li><a href="#3"><HiChat />Chat</a></li>
      <li><a href="#4"><FiSettings />Settings</a></li>
    </ul> */}
    </div>
  );
}

export default NavBar;
