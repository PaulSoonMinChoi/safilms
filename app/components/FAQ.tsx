'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faX } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleSideMenuClose = () => {
    setShowMenu(false);
  };
  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex justify-center items-center w-[100vw] pt-6">
        <Link href="/">
          <Image
            className="logo"
            // src={`${main ? "/icons/ov.svg" : "/icons/ovblack.svg"}`}
            src={"/salogo.png"}
            alt="SA logo"
            width={65}
            height={65}
          />
        </Link>
      </div>

      <FontAwesomeIcon
        className={"menu-icon"}
        icon={faBarsStaggered}
        onClick={() => setShowMenu(true)}
      />

      {showMenu && (
        <div className="side-navigation-container">
          <div>
            <FontAwesomeIcon
              className="menu-icon"
              icon={faX}
              onClick={() => handleSideMenuClose()}
            />
          </div>
          <div className="side-navigation">
            <Link className="home-link" href="/contact">
              Contact
            </Link>
            <Link
              className="home-link"
              href="https://soulassassins.com/"
              style={{ textDecoration: "none !important" }}
            >
              Soul Assassins
            </Link>
            <Link className="home-link" href="/faq">
              FAQ
            </Link>
          </div>
        </div>
      )}

      <div className="nav-info-text flex justify-center items-center text-center flex-col gap-[50px] h-[80vh] p-[10px]">
        <h1>FAQ</h1>
        <span>How to purchase Death Valley Deluxe?</span>
        {/* <span>
          Our online customer service hours are: Monday – Friday 9:00am to
          5:00pm PST
        </span> */}
        {/* <span>
          Or visit:{" "}
          <Link className="home-link" href="https://soulassassins.com/">
            soulassassins.com
          </Link>
        </span> */}
      </div>

      <div className="bottom-info w-[100vw]">
        <small>
          © 2024,{" "}
          <Link
            className="home-link"
            href="https://soulassassins.com/"
            style={{ textDecoration: "none !important" }}
          >
            Soul Assassins
          </Link>
        </small>
      </div>
    </div>
  );
};

export default FAQ;
