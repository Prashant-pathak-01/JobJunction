import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="bg-slate-900 text-white p-4 flex justify-between">
      <p>© 2024 All rights Reserved</p>
      <a
        className="hover:scale-125 transition-all hover:text-red-500 cursor-pointer"
        href="https://github.com/Prashant-pathak-01/JobJunction"
        target="_blank"
      >
        <GitHubIcon></GitHubIcon>
      </a>
      <p className="hover:scale-105 transition-all hover:text-red-500 cursor-pointer">
        Made by - Prashant Pathak
      </p>
    </div>
  );
}

export default Footer;
