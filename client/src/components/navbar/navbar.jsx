import React from "react";
import { useContext } from "react";
import SideNav from "./sideNav";
import NavbarTopIcon from "./navbarTopIcon";
import HelpButton from "./helpButton";

function Navbar(props){

  return (
    <div id="navbar">
      <div id="navbar-left">
        <SideNav/>
      </div>
      <div id="navbar-middle">
        <NavbarTopIcon/>
      </div>
      <div id="navbar-right">
        <HelpButton/>
      </div>
    </div>
  )
}

export default Navbar;