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

export default function NewsDetail() {
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
          <div className="detail">
            <div className="img">
              <img
                src={IMAGE_URL + eventDetail?.images[0]?.image_path}
                alt=""
              />
            </div>

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
            <p>{parse(eventDetail?.text)}</p>
          </div>
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
