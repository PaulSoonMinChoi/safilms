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

export default function Home() {
  return (
    <Swiper
      // className="swiper-container"
      slidesPerView={1}
      navigation
      mousewheel={true}
      pagination={{ type: "bullets", clickable: true }}
      modules={[Navigation, Pagination, Mousewheel]}
      loop={true}
      speed={800}
    >
      <SwiperSlide>
        <div className="w-[100vw] h-[100vh]">
          <video
            className="video-test"
            loop
            muted
            autoPlay
            playsInline
            controls={undefined}
          >
            <source src="/vid/deathvalleytrailer.mp4" type="video/mp4" />
          </video>
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

          <div className="flex justify-center items-center text-center w-[100vw] p-[100px]">
            <span>SA Films is a production of films by Soul Assassins</span>
          </div>

          <div className="bottom-info w-[100vw]">
            <small>
              © 2024,{" "}
              <Link className="home-link" href="https://soulassassins.com/">
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
        <div className="w-[100vw] h-[100vh]">
          <div className="background-image"></div>

          <div className="flex justify-center items-center w-[100vw] pt-6">
            <h1> DEATH VALLEY </h1>
          </div>

          <div className="info-text-container text-center">
            <span className="info-text">
              A new powder has hit the streets of Oakland by way of India, and
              every gang in the region wants a taste. From acclaimed music
              producer DJ Muggs and Soul Assassins comes Death Valley. Directed
              by legendary music video director Jason Goldwatch making his
              feature film debut. And sporting an Allstar hip-hop cast with
              appearances by Roc Marciano, Meyhem Lauren, Boldy James, and DJ
              Muggs himself.
            </span>
          </div>

          <div className="content-container flex justify-center items-center w-[100vw]">
            <div className="content-info flex flex-col justify-center items-center w-[50vw]">
              <div className="flex justify-center flex-col gap-[10px] text-center">
                <span className="p-[10px]">
                  Free preview of Death Valley. Purchase full version on the
                  right.
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
                <span className="">
                  To watch the entire Death Valley Video purchase the extended
                  video cut.
                </span>
                <a
                  className="button"
                  href="https://vimeo.com/store/ondemand/popup/6617208?referrer=https%3A%2F%2Fvimeo.com%2F&ssl=1"
                  target="_blank"
                >
                  Purchase
                </a>
                <div className="flex justify-center items-center">
                  <div className="vid-container w-[50vw]">
                    <iframe
                      className="w-[100%] h-[100%]"
                      src="https://player.vimeo.com/video/876150152?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      allow="autoplay; fullscreen; picture-in-picture"
                      title="DEATH VALLEY"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-info w-[100vw]">
            <small>
              © 2024,{" "}
              <Link className="home-link" href="https://soulassassins.com/">
                Soul Assassins
              </Link>
            </small>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
