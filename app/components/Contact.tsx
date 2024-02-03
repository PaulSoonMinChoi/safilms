import React from "react";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex justify-center items-center w-[100vw] pt-6">
        <Link href="/">
          <Image
            className="logo"
            // src={`${main ? "/icons/ov.svg" : "/icons/ovblack.svg"}`}
            src={"/salogo.png"}
            alt="SA logo"
            width={80}
            height={80}
          />
        </Link>
      </div>

      <div className="nav-info-text flex justify-center items-center text-center flex-col gap-[50px] h-[80vh] p-[10px]">
        <h1>CONTACT US</h1>
        <span>Email: Help@SoulAssassins.com</span>
        <span>
          Our online customer service hours are: Monday – Friday 9:00am to
          5:00pm PST
        </span>
        <span>
          Or visit:{" "}
          <Link className="home-link" href="https://soulassassins.com/">
            soulassassins.com
          </Link>
        </span>
      </div>

      <div className="bottom-info w-[100vw]">
        <small>
          © 2024,{" "}
          <Link
            className="home-link"
            href="https://soulassassins.com/"
            style={{ textDecoration: "none !important" }}>
            Soul Assassins
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Contact;
