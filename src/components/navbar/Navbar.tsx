import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import "./navbar.css";
import {User} from 'lucide-react'
import { useState } from "react";

const Navbar = () => {
  const[menu ,setMenu]=useState('home');
  return (
    <div className="navbar">
      <p className="md:hidden">...</p>
      <img className="w-20 md:w-28" src="./src/assets/images/logo.png" alt="Logo" />

      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          صفحه اصلی
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          منوی غذا
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          ارتباط با ما
        </li>
      </ul>

      <div className="navbar-right">
        <SearchIcon className="icon" />
        <div className="relative">
          <ShoppingCartIcon className="icon" />
          <div className="dot"></div>
        </div>
        <button>
          <span className="flex flex-row items-center justify-center">
            <User />
            <span>ورود | ثبت نام</span>
          </span>
        </button>
        <User className="md:hidden"/>
      </div>
    </div>
  );
};

export default Navbar;
