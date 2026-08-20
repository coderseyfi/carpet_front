import React, { useState, useEffect } from "react";
import "./newsDetail.scss";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/Cards/PageHeader";
import axiosInstance, { IMAGE_URL } from "@/api";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import parse from "html-react-parser";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function NewsDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [newsDetail, setNewsDetail] = useState({});
  const { lang } = useLanguage();

  const getNewsDetail = async () => {
    try {
      const res = await axiosInstance.get(`news/${id}`);
      setNewsDetail(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNewsDetail();
  }, [id, lang]);

  // Fancybox initialize
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      Thumbs: false,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, [newsDetail]);

  const text = newsDetail?.text || "";

  const firstPart = text.split(" ").slice(0, 250).join(" ");
  const secondPart = text.split(" ").slice(250).join(" ");

  const images = newsDetail?.images || [];

  const visibleSlides = Math.min(images.length || 1, 3);

  return (
    <div>
      <PageHeader
        title={t("news_detail")}
        breadcrumbs={[
          {
            label: t("navbar.news"),
            path: "/news",
          },
          {
            label: t("news_detail"),
          },
        ]}
      />

      <div className="news-detail">
        <div className="main container">
          <h2 className="news-detail-title text-center">{newsDetail?.title}</h2>

          {newsDetail?.base_image && (
            <img
              src={IMAGE_URL + newsDetail.base_image}
              alt={newsDetail?.title}
              className="news-detail-main-img"
            />
          )}

          <div className="news-detail-content text-justify md:text-start">
            <p>
              {firstPart && parse(firstPart)}
              {secondPart && "..."}
            </p>
          </div>

          {images.length > 0 && (
            <div style={{ margin: "35px 0" }}>
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: Math.min(images.length || 1, 2) },
                  1024: { slidesPerView: visibleSlides },
                }}>
                {images.slice(0, 3).map((item, index) => (
                  <SwiperSlide key={item.id || index}>
                    <div className="w-full overflow-hidden">
                      <a
                        href={IMAGE_URL + item.image_path}
                        data-fancybox="gallery"
                        className="w-full block">
                        <img
                          className="w-full hover:scale-[1.03] cursor-pointer transition h-full object-cover aspect-[16/11]"
                          src={IMAGE_URL + item.image_path}
                          alt={`Image ${index + 1}`}
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiperdə görünməyən digər şəkillər */}
              {images.slice(3).map((item, index) => (
                <a
                  key={item.id || `hidden-${index}`}
                  href={IMAGE_URL + item.image_path}
                  data-fancybox="gallery"
                  className="hidden"
                />
              ))}
            </div>
          )}

          {secondPart && (
            <div className="news-detail-content text-justify md:text-start">
              {parse(secondPart)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
