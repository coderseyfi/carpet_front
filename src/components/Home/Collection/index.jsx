import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance, { IMAGE_URL } from "@/api";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import Right from "../../../assets/images/right.svg";
import arrowLeft from "../../../assets/images/arrow-left.svg";
import { useLanguage } from "@/context/LanguageContext";

export default function Collection() {
  const { lang } = useLanguage();
  const [collections, setCollections] = useState([]);
  const { t } = useTranslation();

  const getCollection = async () => {
    const response = await axiosInstance.get("/collections");
    setCollections(response.data);
  };

  useEffect(() => {
    getCollection();
  }, [lang]);

  return (
    <div className="collection py-14 lg:py-20 bg-[#f6f3ee] h-full">
      <div className="main flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-[50px]">
        {/* LEFT — normal container padding-i özü saxlayır */}
        <div className="collection-left w-full lg:w-[35%] pl-20">
          <p className="slogan text-[34px] leading-[1.15] lg:text-[65px] lg:leading-[76px] mb-5">
            {t("collection.discover")}
          </p>

          <p className="text text-base lg:text-xl text-[#727272] mb-6 lg:mb-[60px]">
            {t("collection.text")}
          </p>

          <p className="book text-lg lg:text-xl font-medium flex items-center gap-2.5">
            <a href="https://iticket.az/" target="_blank">{t("collection.book")}</a>
            <img src={Right} alt="" />
          </p>
        </div>

        {/* RIGHT — sağdan heç bir boşluq yoxdur, ekran kənarına söykənir */}
        <div className="collection-right w-full lg:w-[70%] overflow-hidden">
          <Swiper
            modules={[FreeMode, Autoplay]}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            spaceBetween={20}
            slidesPerView={"auto"}
            className="!w-full !pb-2.5 !pr-0 !mr-0"
          >
            {collections?.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-[clamp(260px,70vw,738px)] last:!mr-0"
              >
                <Link to={`/collections/${item.id}`}>
                  <div className="collection-card relative flex flex-col bg-white p-6 lg:p-[30px] w-full h-[clamp(420px,70vw,787px)]">
                    <h3 className="title text-2xl lg:text-[35px] font-normal mb-6 lg:mb-[50px]">
                      {item.name}
                    </h3>

                    <div className="carpet-img flex-1 flex justify-end overflow-hidden">
                      <img
                        src={IMAGE_URL + item.base_image}
                        alt=""
                        className="w-[min(100%,420px)] h-auto max-h-full object-contain"
                      />
                    </div>

                    <div className="open absolute bottom-6 lg:bottom-[30px] w-[64px] h-[64px] lg:w-[84px] lg:h-[84px] rounded-full bg-[#f6f3ee] flex items-center justify-center">
                      <img
                        src={arrowLeft}
                        alt=""
                        className="w-9 h-9 lg:w-[50px] lg:h-[50px] cursor-pointer transition-transform duration-300 hover:scale-[1.15]"
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}