import React from "react";
import { useTranslation } from "react-i18next";
import CarpetVideo from "../../../assets/videos/CarpetVideo.mp4";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-svh overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute h-full w-full object-cover z-[-1]">
        <source src={CarpetVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-6 text-4xl font-normal uppercase max-w-[800px] font-oswald! leading-tight sm:text-5xl md:text-6xl lg:text-[90px]">
          {t("hero.title")}
        </h1>
        {/* <img src={HeroText} alt="" /> */}

        <a
          href="https://iticket.az/events/museum/azerbaijan-national-carpet-museum"
          target="_blank"
          className="cursor-pointer bg-white px-6 py-3 text-base font-medium text-black">
          {t("hero.getTickets")}
        </a>
      </div>

      <div className="absolute inset-x-4 bottom-6 text-white sm:left-10 sm:max-w-[65%]">
        <h4 className="mb-2 text-lg font-bold sm:text-[22px]">
          {t("hero.bookTitle")}
        </h4>

        <p className="text-sm sm:text-base">{t("hero.bookDesc")}</p>
      </div>
    </div>
  );
}
