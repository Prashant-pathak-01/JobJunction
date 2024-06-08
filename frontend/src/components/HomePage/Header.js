import React from "react";
import Button from "@mui/material/Button";
import Logo from "./../../data/Logo.png";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
function Header() {
  return (
    <div className="z-50 h-20 w-full justify-between bg-secondaryColorB flex flex-row items-center p-10 fixed shadow-md">
      <div>
        <Link to="/">
          <img
            alt="logo"
            src={Logo}
            className="w-40 rounded hover:scale-95 cursor-pointer transition-all"
          ></img>
        </Link>
      </div>
      <div className="flex flex-row space-x-6">
        <SignedIn>
          <Link to="/dashboard">
            <Button variant="contained">Dashboard</Button>
          </Link>
          <UserButton></UserButton>
        </SignedIn>
        <SignedOut>
          <Link to="/student/login">
            <Button variant="outlined">LogIn</Button>
          </Link>
          <Link to="/student/signup">
            <Button variant="contained">SignUp</Button>
          </Link>
          <Link to="/recruiter/login">
            <Button>Recruiter</Button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;
