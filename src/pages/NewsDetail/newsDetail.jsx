import React, { useState, useRef, useEffect } from "react";
import "./newsDetail.scss";
import { Row, Col } from "antd";
import News1 from "../../assets/images/news4.svg";
import News2 from "../../assets/images/news5.svg";
import News3 from "../../assets/images/news6.svg";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/Cards/PageHeader";
import NewsDetail1 from "../../assets/images/newsdetail.svg";
import axiosInstance, { IMAGE_URL } from "@/api";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
export default function NewsDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [newsDetail, setNewsDetail] = useState({});
  const { lang } = useLanguage();

  const getNewsDetail = async () => {
    const res = await axiosInstance.get(`news/${id}`);
    setNewsDetail(res.data);
  };

  useEffect(() => {
    getNewsDetail();
  }, [id, lang]);

  const images = [
    {
      image: News1,
    },
    {
      image: News2,
    },
    {
      image: News3,
    },
  ];

  const text = newsDetail?.text;

  const firstPart = text?.split(" ").slice(0, 250).join(" ");
  const secondPart = text?.split(" ").slice(250).join(" ");

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
          <img
            src={IMAGE_URL + newsDetail?.base_image}
            alt=""
            className="news-detail-main-img"
          />
          <div className="news-detail-content text-justify md:text-start">
            <p>
              {firstPart}
              {secondPart && "..."}
            </p>
          </div>

          <div style={{ margin: "35px 0" }}>
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
              navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
            >
              {newsDetail?.images?.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={IMAGE_URL + item.image_path}
                    alt=""
                    style={{
                      width: "500px",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="news-detail-content text-justify md:text-start">
            <p>{secondPart && secondPart}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
