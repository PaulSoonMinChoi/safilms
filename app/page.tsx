"use client";
import Image from "next/image";
// core version + navigation, pagination modules:
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Mousewheel,
  Pagination,
  Scrollbar,
  Parallax,
} from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faX } from "@fortawesome/free-solid-svg-icons";

SwiperCore.use([Navigation]);

export default function Home() {
  const [showMobileBG, setShowMobileBG] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const swiperRef = useRef<SwiperCore | null>(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext?.();
    }
  };

  const handleSideMenuClose = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    // Add event listener to update screen width
    const handleResize = () => {
      setShowMobileBG(window.innerWidth <= 600);
    };

    // Initial check for screen width
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      className="w-[100vw] h-[100vh]"
      slidesPerView={1}
      // navigation
      // mousewheel={true}
      pagination={{ type: "bullets", clickable: true }}
      modules={[Navigation, Pagination, Mousewheel]}
      loop={true}
      speed={800}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}>
      {/* <SwiperSlide>
        <div className="w-[100vw] h-[100vh] relative">
          {!showMobileBG ? (
            <div className="hero-image" />
          ) : (
            <div className="hero-image-mobile" />
          )}

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
                  style={{ textDecoration: "none !important" }}>
                  Soul Assassins
                </Link>
              </div>
            </div>
          )}
        </div>
      </SwiperSlide> */}

      {/* SECOND HOME PAGE */}
      <SwiperSlide>
        <div className="w-[100vw] h-[100vh]">
          <video
            className="video-test"
            loop
            muted
            autoPlay
            playsInline
            controls={undefined}>
            <source src="/vid/vid2.mp4" type="video/mp4" />
          </video>

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
                  style={{ textDecoration: "none !important" }}>
                  Soul Assassins
                </Link>
                <Link className="home-link" href="/faq">
                  FAQ
                </Link>
              </div>
            </div>
          )}

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

          <span className="enter-text" onClick={handleNextSlide}>
            ENTER
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[100vw] h-[100vh] overflow-x-hidden overflow-y-scroll">
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
                  style={{ textDecoration: "none !important" }}>
                  Soul Assassins
                </Link>
                <Link className="home-link" href="/faq">
                  FAQ
                </Link>
              </div>
            </div>
          )}

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

          <div className="content-container flex  w-[100vw]">
            <div className="content-info flex flex-col  w-[50vw]">
              <div className=" flex justify-center flex-col gap-[5px] text-center items-center">
                <Image
                  className="logo-text mt-[30px] p-3"
                  src={"/deathvalleylogo.png"}
                  alt="SA logo"
                  width={500}
                  height={500}
                />
                <span
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    opacity: "0.8",
                    paddingBottom: "5px",
                  }}>
                  WATCH NOW
                </span>
                <div className="flex justify-center items-center">
                  <div className="vid-container w-[50vw]">
                    <iframe
                      className="w-[100%] h-[100%]"
                      src="https://player.vimeo.com/video/903023455?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      allow="autoplay; fullscreen; picture-in-picture"
                      title="DEATH VALLEY"></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider" />

            {/* {showMobileBG ? <div className="divider" /> : null} */}

            <div className="content-info flex flex-col justify-center items-center w-[50vw]">
              <div className="flex justify-center flex-col gap-[5px] text-center items-center">
                {/* <span className="info-text">DEATH VALLEY DELUXE CONTENT</span> */}
                <Image
                  // className="logo"
                  className="logo-text p-3"
                  // src={`${main ? "/icons/ov.svg" : "/icons/ovblack.svg"}`}
                  src={"/dvdeluxe.png"}
                  alt="SA logo"
                  width={500}
                  height={500}
                />
                <div className="flex justify-center items-center">
                  <div className="vid-container w-[50vw]">
                    <iframe
                      className="w-[100%] h-[100%]"
                      src="https://player.vimeo.com/video/876150152?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      allow="autoplay; fullscreen; picture-in-picture"
                      title="DEATH VALLEY DELUXE"></iframe>
                  </div>
                </div>
                {/* <span className="info-text">DEATH VALLEY DELUXE CONTENT</span> */}
                <a
                  className="button mt-[10px]"
                  href="https://vimeo.com/ondemand/sadeathvalley"
                  target="_blank">
                  Watch for 4.99
                </a>
                <div className="sub-info-container flex flex-col justify-center text-left">
                  <span className="sub-info-text">
                    - Introduction by DJ MUGGS
                  </span>
                  <span className="sub-info-text">
                    - 14 Min behind scenes extras
                  </span>
                  <span className="sub-info-text">- Promotional Art Slide</span>
                  <span className="sub-info-text">
                    - Two theatrical trailers for the film
                  </span>
                  <span className="sub-info-text-long">
                    - 5 Music Videos: Boldy James - Coming for the Safe
                    (Directors Cut) Meyhem Lauren - Ready for War Roc Marciano -
                    Crazy Horse (Directors Cut) Rome Streetz - Skeleton Bones
                    Jay Worthy - Check in (OG Version)
                  </span>
                  <span className="sub-info-text">
                    Log into your{" "}
                    <Link
                      className="home-link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://vimeo.com/">
                      Vimeo
                    </Link>{" "}
                    account to view the Deluxe Content
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bottom-info w-[100vw]">
            <small>
              © 2024,{" "}
              <Link className="home-link" href="https://soulassassins.com/">
                Soul Assassins
              </Link>
            </small>
          </div> */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
