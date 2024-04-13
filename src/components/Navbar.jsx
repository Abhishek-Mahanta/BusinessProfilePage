import React from "react";
import NavbarButton from "../utility/NavbarButton";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isProfileActive = location.pathname === "/" || location.pathname === "/step2";
  const isBuisnessInfoActive = location.pathname === "/step2";

  return (
    <div className="flex flex-col md:flex-row justify-between bg-navBg h-[100px] md:h-[60px] rounded-md relative">
      <NavbarButton isActive={isProfileActive} isZeroBorder={isBuisnessInfoActive} number="1">Your Profile</NavbarButton>
      <NavbarButton isActive={isBuisnessInfoActive} number="2">Business Information</NavbarButton>
      <NavbarButton number="3">Additional Users</NavbarButton>
    </div>
  );
};

export default Navbar;
