import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          {/* <NavLink to="/home" activeStyle>
            Home
          </NavLink> */}
          <NavLink to="/intro" activeStyle>
            Intro
          </NavLink>
          <NavLink to="/promo" activeStyle>
            Promo
          </NavLink>
          <NavLink to="/slides" activeStyle>
            Slides
          </NavLink>
          <NavLink to="/insights" activeStyle>
            Insights
          </NavLink>
          <NavLink to="/conclusions" activeStyle>
            Conclusions
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;