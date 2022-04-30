import React, { useState, useEffect, useRef } from "react";
import "./Scroll.css";
import { BiArrowToTop } from "react-icons/bi";

export default function Scroll() {
  const btnScroll = useRef(null);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      btnScroll.current.style.display = "block";
    } else {
      btnScroll.current.style.display = "none";
    }
  }

  return (
    <div className="scroll-wrapper">
      <a href="#" className="btn_scroll">
        Tải ứng dụng
      </a>
      <span ref={btnScroll} className="btn_scroll-icon" onClick={topFunction}>
        <BiArrowToTop className="btn_scroll-icon__symbol" />
      </span>
    </div>
  );
}
