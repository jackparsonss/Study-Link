import React from "react";
import "./NavBar.css";
import { FaHome } from "react-icons/fa";
import { HiChat } from "react-icons/hi";
import { FiSettings } from "react-icons/fi"
import { GiNotebook } from "react-icons/gi"





function NavBar() {
  return <div className="nav">

    <div className="NavItem Home">
      <FaHome className="NavIcon" />
      <p>Study Link</p>
    </div>

    <div className="NavItem">
      <GiNotebook className="NavIcon" />
      <p>Classes</p>
    </div>

    <div className="NavItem">
      <HiChat className="NavIcon" />
      <p>Chat</p>

    </div>

    <div className="NavItem">
      <FiSettings className="NavIcon" />
      <p>Settings</p>
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
  </div>;
}

export default NavBar;
