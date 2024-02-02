"use client";
import Image from "next/image";
// core version + navigation, pagination modules:
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
import { useEffect, useState } from "react";

export default function Home() {
  const [showMobileBG, setShowMobileBG] = useState(false);

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
      // className="swiper-container"
      className="w-[100vw] h-[100vh]"
      slidesPerView={1}
      navigation
      // mousewheel={true}
      pagination={{ type: "bullets", clickable: true }}
      modules={[Navigation, Pagination, Mousewheel]}
      loop={true}
      speed={800}
    >
      <SwiperSlide>
        <div className="w-[100vw] h-[100vh]">
          {/* <video
            className="video-test"
            loop
            muted
            autoPlay
            playsInline
            controls={undefined}
          >
            <source src="/vid/deathvalleytrailer.mp4" type="video/mp4" />
          </video> */}
          {!showMobileBG ? (
            <div className="hero-image" />
          ) : (
            <div className="hero-image-mobile" />
          )}
          {/* <div className="hero-image" /> */}

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

          {/* <div className="flex justify-center items-center text-center w-[100vw] p-[100px]">
            <span>SA Films is a production of films by Soul Assassins</span>
          </div> */}

          <div className="bottom-info w-[100vw]">
            <small>
              <Link className="home-link" href="/contact">
                Contact
              </Link>
            </small>
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

          {/* <div className="flex justify-center items-center w-[50vw] h-[100vh]">
            <div className="w-[40vw] h-[100vh]">
              <iframe
                className="w-[100%] h-[100%]"
                src="https://player.vimeo.com/video/903023455?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                // frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="DEATH VALLEY"
              ></iframe>
            </div>
          </div> */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[100vw] h-[100vh] overflow-scroll">
          <div className="background-image"></div>

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

          {/* <div className="flex justify-center items-center w-[100vw]">
            <Image
              className="mt-[30px]"
              src={"/deathvalleylogo.png"}
              alt="SA logo"
              width={400}
              height={400}
            />
          </div> */}

          <div className="content-container flex  w-[100vw]">
            <div className="content-info flex flex-col  w-[50vw]">
              <div className="flex justify-center flex-col gap-[10px] text-center items-center">
                <Image
                  className="mt-[30px] p-3"
                  src={"/deathvalleylogo.png"}
                  alt="SA logo"
                  width={400}
                  height={400}
                />
                <span
                  className="mt-[20px] mb-[10px]"
                  style={{ color: "#fff", fontSize: "20px", opacity: '0.8' }}
                >
                  WATCH NOW
                </span>
                <div className="flex justify-center items-center">
                  <div className="vid-container w-[50vw]">
                    <iframe
                      className="w-[100%] h-[100%]"
                      src="https://player.vimeo.com/video/903023455?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      allow="autoplay; fullscreen; picture-in-picture"
                      title="DEATH VALLEY"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-info flex flex-col justify-center items-center w-[50vw]">
              <div className="flex justify-center flex-col gap-[10px] text-center items-center">
                {/* <span className="info-text">DEATH VALLEY DELUXE CONTENT</span> */}
                <Image
                  // className="logo"
                  className="m-[30px] p-3"
                  // src={`${main ? "/icons/ov.svg" : "/icons/ovblack.svg"}`}
                  src={"/dvdeluxe.png"}
                  alt="SA logo"
                  width={400}
                  height={400}
                />
                <div className="flex justify-center items-center">
                  <div className="vid-container w-[50vw]">
                    <iframe
                      className="w-[100%] h-[100%]"
                      src="https://player.vimeo.com/video/876150152?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      allow="autoplay; fullscreen; picture-in-picture"
                      title="DEATH VALLEY DELUXE"
                    ></iframe>
                  </div>
                </div>
                {/* <span className="info-text">DEATH VALLEY DELUXE CONTENT</span> */}
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
                      href="https://vimeo.com/"
                    >
                      Vimeo
                    </Link>{" "}
                    account to view the Deluxe Content
                  </span>
                </div>
                {/* <a
                  className="button"
                  href="https://vimeo.com/store/ondemand/popup/6617208?referrer=https%3A%2F%2Fvimeo.com%2F&ssl=1"
                  target="_blank"
                >
                  Purchase
                </a> */}
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
