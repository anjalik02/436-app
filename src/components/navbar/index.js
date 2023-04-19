import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/brainstorm" activeStyle>
            Brainstorm
          </NavLink>
          <NavLink to="/generate" activeStyle>
            Generate
          </NavLink>
          <NavLink to="/notate" activeStyle>
            Notate
          </NavLink>
          <NavLink to="/check" activeStyle>
            Check
          </NavLink>
          <NavLink to="/share" activeStyle>
            Share
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;