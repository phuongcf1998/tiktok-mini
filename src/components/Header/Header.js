import React, { useEffect, useRef } from "react";
import logo from "../Header/logo.png";
import avatar from "../Header/avatar-user.jpg";
import "../Header/Header.css";
import {
  AiOutlineCloudUpload,
  AiOutlineMessage,
  AiOutlineNotification,
  AiOutlineSearch,
} from "react-icons/ai";
export default function Header() {
  const overplayRef = useRef();
  const menubarRef = useRef();
  // useEffect(() => {
  //   const menu = document.getElementById("menu-bar");
  //   if (window.screen.width > 1023) {
   
  //     menu.style.display = "block";
  //   }
  // }, [window.screen.width]);

  const showMenuMobile = () => {
    const menu = document.getElementById("menu-bar");
    const overlay = document.getElementById("nav_overplay");
    menu.style.backgroundColor = "#fff";
    if (menu.style.display == "block") {
      // if is menu displayed, hide it
      menu.style.display = "none";
      overlay.style.display = "none";
    } else {
      // if is menu hidden, display it
      menu.style.display = "block";
      overlay.style.display = "block";
    }
  };

  function offOverPlay() {
    document.getElementById("menu-bar").style.display = "none";
    document.getElementById("nav_overplay").style.display = "none";
  }

  return (
    <>
      {" "}
      <div className="header">
        <svg
          ref={menubarRef}
          onClick={showMenuMobile}
          className="menu-bars"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
        </svg>

        <a href="/">
          <img src={logo} className="header_logo" alt="Logo" />
        </a>
        <div className="header_search-bar">
          <input
            placeholder="Tìm kiếm tài khoản và video"
            type="text"
            className="header_search-bar-input"
          />
          <button type="submit" className="">
            {" "}
            <span className="header_search-bar-icon">
              {" "}
              <AiOutlineSearch />
            </span>
          </button>
        </div>
        <div className="header_icon-wrapper">
          <span className="header_icon_img">
            <AiOutlineCloudUpload />
          </span>
          <span className="header_icon_img">
            <AiOutlineMessage />
          </span>
          <span className="header_icon_img">
            <AiOutlineNotification />
          </span>
          <img className="header_icon_avatar" alt="Avatar" src={avatar} />
        </div>
      </div>
      <div id="nav_overplay" onClick={offOverPlay}></div>
    </>
  );
}
