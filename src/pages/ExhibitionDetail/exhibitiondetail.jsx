import React, { useState, useRef, useEffect } from "react";
import "./exhibitiondetail.scss";
import { Link, useParams } from "react-router-dom";
import PageHeader from "../../components/Cards/PageHeader";
// import location from "../../assets/images/location.svg";
// import calendar from "../../assets/images/calendar.svg";
// import ticket from "../../assets/images/ticket.svg";
import axiosInstance, { IMAGE_URL } from "@/api";
import { useEvents } from "@/context/EventContext";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import EventCardOld from "@/components/Cards/EventCardOld";
import parse from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function ExhibitionDetail() {
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const { id } = useParams();
  const [eventDetail, setEventDetail] = useState(null);
  const { events } = useEvents();

  const getEventDetail = async () => {
    const res = await axiosInstance.get(`/events/${id}`);
    setEventDetail(res?.data);
  };

  useEffect(() => {
    getEventDetail();
  }, [id, lang]);

  useEffect(() => {
    Fancybox.bind('[data-fancybox="event-gallery"]', {
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
  }, [eventDetail]);

  const coverImage =
    eventDetail?.base_image || eventDetail?.images?.[0]?.image_path;
  const images = eventDetail?.images || [];
  const visibleSlides = Math.min(images.length || 1, 3);

  return (
    <div>
      <PageHeader
        title={t("navbar.events")}
        breadcrumbs={[
          {
            label: t("navbar.events"),
          },
        ]}
      />

      <div className="exhibitions-detail">
        <div className="main container">
          <p className="text-center mt-10 text-[32px] font-medium">{eventDetail?.title}</p>
          <div className="detail">
            <div className="text-center"></div>
            {coverImage && (
              <div className="img mb-10">
                <img src={IMAGE_URL + coverImage} alt={eventDetail?.title} />
              </div>
            )}

            {/* <div>
              <p className="title">{eventDetail?.title}</p>
              <p className="prag">{eventDetail?.description}</p>
              <div className="event-info">
                <div className="event-info-item">
                  <img src={calendar} alt="date" />
                  <p className="event-info-text">
                    {eventDetail?.start_date} - {eventDetail?.end_date}
                  </p>
                </div>

                <div className="event-info-item">
                  <img src={location} alt="location" />
                  <p className="event-info-text">{eventDetail?.location}</p>
                </div>

                <div className="event-info-item">
                  <img src={ticket} alt="price" />
                  <p className="event-info-text">{eventDetail?.price}$</p>
                </div>
                <button className="ticket">{t("hero.getTickets")}</button>
              </div>
            </div> */}
          </div>

          <div className="text-center">
            <p>{eventDetail?.text && parse(eventDetail.text)}</p>
          </div>

          {images.length > 0 && (
            <div style={{ margin: "35px 0" }}>
              <Swiper
                modules={[Autoplay]}
                loop={images.length > visibleSlides}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: Math.min(images.length, 2) },
                  1024: { slidesPerView: visibleSlides },
                }}>
                {images.map((item, index) => (
                  <SwiperSlide key={item.id || index}>
                    <div className="w-full overflow-hidden">
                      <a
                        href={IMAGE_URL + item.image_path}
                        data-fancybox="event-gallery"
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
            </div>
          )}
          <div className="cards-container">
            {/* <p className="title">Now live</p> */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events?.slice(0, 3).map((card) => (
                  <Link key={card.id} to={`/exhibitions/${card.id}`}>
                    <EventCardOld event={card} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
