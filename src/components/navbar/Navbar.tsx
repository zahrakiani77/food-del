import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const[menu ,setMenu]=useState('home');
  return (
    <div className="navbar">
      <img className="w-24" src="./src/assets/images/logo.png" alt="Logo" />

      <ul className="navbar-menu">
        <li onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</li>
        <li onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>Menu</li>
        <li onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</li>
      </ul>

      <div className="navbar-right">
        <SearchIcon className="icon" />
        <div className="relative">
          <ShoppingCartIcon className="icon" />
          <div className="dot"></div>
        </div>
        <button className=""> Sign in </button>
      </div>
    </div>
  );
};

export default Navbar;
