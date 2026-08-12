import React, { useState, useEffect } from "react";
import "./eventsDetail.scss";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/Cards/PageHeader";
import axiosInstance, { IMAGE_URL } from "@/api";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import parse from "html-react-parser";

export default function EventsDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [eventsDetail, setEventsDetail] = useState({});
  const { lang } = useLanguage();

  const getEventsDetail = async () => {
    const res = await axiosInstance.get(`events/${id}`);
    setEventsDetail(res.data);
  };

  useEffect(() => {
    getEventsDetail();
  }, [id, lang]);

  const text = eventsDetail?.text;

  const firstPart = text?.split(" ").slice(0, 250).join(" ");
  const secondPart = text?.split(" ").slice(250).join(" ");

  return (
    <div>
      <PageHeader
        title={t("event_detail")}
        breadcrumbs={[
          {
            label: t("navbar.events"),
            path: "/events",
          },
          {
            label: t("event_detail"),
          },
        ]}
      />
      <div className="news-detail">
        <div className="main container">
          <h2 className="news-detail-title text-center">
            {eventsDetail?.title}
          </h2>
          <img
            src={IMAGE_URL + eventsDetail?.base_image}
            alt=""
            className="news-detail-main-img"
          />
          <div className="news-detail-content text-justify md:text-start">
            <p>
              {firstPart && parse(firstPart)}
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
              grabCursor={true}>
              {eventsDetail?.images?.map((item, index) => (
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
          <div>{secondPart && parse(secondPart)}</div>
        </div>
      </div>
    </div>
  );
}
