import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState(true);

  const navigationItems = [
    { label: "Home", path: "#home" },
    { label: "About", path: "#about" },
    { label: "Projects", path: "#projects" },
    { label: "Contact", path: "#contact" },
  ];

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const closeMenu = () => {
    setActive(true);
    document.body.classList.remove("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <a className="navbar-brand nav_ac" href="#home">
              {logotext}
            </a>
            <nav className="desktop__navigation" aria-label="Primary navigation">
              {navigationItems.map((item) => (
                <a key={item.path} href={item.path}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="d-flex align-items-center">
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  {navigationItems.map((item) => (
                    <li key={item.path} className="menu_item">
                      <a onClick={closeMenu} href={item.path} className="my-3">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              {Object.entries(socialprofils).map(([platform, url]) => (
                <a key={platform} href={url}>
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              ))}
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
