import React, { useEffect } from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaUserFriends, FaCheckCircle } from "react-icons/fa";
import { AiOutlineVideoCamera } from "react-icons/ai";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
} from "./MenuAvatarFileList";
import "../Menu/Menu.css";

const MenuAccountsSuggest = ({ avatarUrl, id, name, isVerified }) => {
  return (
    <>
      <div className="menu_account_suggest">
        <a href="#">
          <img
            className="menu_account_avatar"
            src={avatarUrl}
            alt="Avatar Account"
          />
        </a>
        <a className="menu_account_info">
          <div className="menu_account_id-wrapper">
            <span className="menu_account_id--des">{id}</span>
            {isVerified ? (
              <span className="menu_account_status-icon">
                <FaCheckCircle />
              </span>
            ) : null}
          </div>
          <p className="menu_account_name--des">{name}</p>
        </a>
      </div>
    </>
  );
};

export default function Menu() {
  const accountsData = [
    {
      avatar: avatar1,
      userName: "Phuong Nguyen",
      userId: "phuongcf1998",
      isVerified: true,
    },
    {
      avatar: avatar2,
      userName: "Minh Tâm",
      userId: "tam4360",
      isVerified: false,
    },
    {
      avatar: avatar3,
      userName: "Đào Xuân Hải",
      userId: "ngotranhai2115",
      isVerified: false,
    },
    {
      avatar: avatar4,
      userName: "vuaamthucduynen",
      userId: "Duy Nến Vua Ẩm Thực",
      isVerified: true,
    },
    {
      avatar: avatar5,
      userName: "Follow acc mới @huysexgaayf",
      userId: "heo_sei7en",
      isVerified: false,
    },
    {
      avatar: avatar6,
      userName: "Zombie World Z",
      userId: "zombieworldz.official",
      isVerified: false,
    },
    {
      avatar: avatar7,
      userName: "Ma Nhật Bản",
      userId: "dcgr",
      isVerified: true,
    },
  ];
  function offOverPlay() {
    document.getElementById("menu-bar").style.display = "none";
    document.getElementById("nav_overplay").style.display = "none";
  }
  return (
    <>
      <div id="menu-bar" className="menu_wrapper">
        <div className="close-menu">
          <svg
            onClick={offOverPlay}
            className="close-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            {" "}
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </div>
        <nav className="menu_suggest">
          <ul className="menu_suggest--list">
            <li className="menu_suggest--item">
              <a className="menu_suggest--item--link" href="#">
                <BsHouseDoorFill className="menu_suggest--item-icon" />{" "}
                <span>Dành cho bạn</span>
              </a>
            </li>
            <li className="menu_suggest--item">
              <a className="menu_suggest--item--link" href="#">
                <FaUserFriends className="menu_suggest--item-icon" />{" "}
                <span>Đang theo dõi</span>
              </a>
            </li>
            <li className="menu_suggest--item">
              <a className="menu_suggest--item--link" href="#">
                <AiOutlineVideoCamera className="menu_suggest--item-icon" />{" "}
                <span>LIVE</span>
              </a>
            </li>
          </ul>
        </nav>
        <h4>Tài khoản được để xuất</h4>
        <div className="account_wrapper">
          {accountsData.map((item, index) => (
            <MenuAccountsSuggest
              key={index}
              avatarUrl={item.avatar}
              id={item.userId}
              name={item.userName}
              isVerified={item.isVerified}
            />
          ))}
        </div>
      </div>
    </>
  );
}
