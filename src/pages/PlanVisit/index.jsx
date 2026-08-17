import React from "react";
import PageHeader from "../../components/Cards/PageHeader";
import MuseumImg from "@/assets/images/plan_visit/museum.png";
import ShushaImg from "@/assets/images/plan_visit/shusha.png";
import LocationIco from "@/assets/images/plan_visit/location.svg";
// import EventCard from "../../components/Cards/EventCard";
import ArrowUp from "@/assets/images/plan_visit/arrow-r-up.svg";
import { useEvents } from "@/context/EventContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EventCardOld from "@/components/Cards/EventCardOld";

export default function PlanVisit() {
  const { events } = useEvents();
  const { t } = useTranslation();

  const museums = [
    {
      title: t("planVisit.bakuTitle"),
      address: t("planVisit.address"),
      image: MuseumImg,
      link: "https://maps.app.goo.gl/d7Q2oxM2NsoUDyjx6",
    },
    {
      title: t("planVisit.shushaTitle"),
      address: t("planVisit.address"),
      image: ShushaImg,
      link: "https://maps.app.goo.gl/2Z4S9b7MzBhfpEpe8",
    },
  ];

  const days = [
    t("planVisit.workingHours.sunday"),
    t("planVisit.workingHours.monday"),
    t("planVisit.workingHours.tuesday"),
    t("planVisit.workingHours.wednesday"),
    t("planVisit.workingHours.thursday"),
    t("planVisit.workingHours.friday"),
    t("planVisit.workingHours.saturday"),
  ];

  return (
    <div className="pb-[clamp(50px,6vw,190px)]">
      <PageHeader
        title={t("planVisit.pageTitle")}
        breadcrumbs={[
          {
            label: t("planVisit.breadcrumb"),
          },
        ]}
      />
      <div className="container pt-[42px]! mb-[133px]!">
        {museums.map((museum, i) => (
          <div key={i} className="mb-[90px] last:mb-0">
            <h2 className="text-[28px] md:text-[35px] mb-2.5">
              {museum.title}
            </h2>

            <div className="flex flex-col lg:flex-row gap-[22px]">
              <div>
                <img className="w-full" src={museum.image} alt="museum" />
              </div>

              <div className="w-full lg:max-w-[553px]">
                <div className="mb-[64px]">
                  {/* Open status */}
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                    </span>
                    <p className="text-[#008A15] font-medium">
                      {t("planVisit.openNow")}
                    </p>
                  </div>

                  {/* Address */}
                  <div className="mb-5 flex items-center gap-1">
                    <img src={LocationIco} alt="location" />
                    <p>{museum.address}</p>
                  </div>

                  {/* Map */}
                  <div className="mb-[30px] flex items-center ">
                    <a
                      href={museum.link}
                      target="_blank"
                      className="font-semibold">
                      {t("planVisit.viewOnMap")}
                    </a>
                    <img src={ArrowUp} alt="arrow" />
                  </div>

                  {/* Button */}
                  <a
                    href="https://iticket.az/events/museum/azerbaijan-national-carpet-museum"
                    target="_blank">
                    <button className="text-black px-5 py-[10px] border cursor-pointer">
                      {t("planVisit.getTickets")}
                    </button>
                  </a>
                </div>

                {/* Working hours */}
                <div>
                  {days.map((day, index) => (
                    <div
                      key={index}
                      className="flex mb-[10px] border-b pb-1.5 items-center justify-between">
                      <p>{day}</p>
                      <div>10:00 AM - 5:00 PM</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#F6F3EE] pt-[33px] pb-[50px] mb-[100px] pl-[20px] pr-[20px]">
        <div className=" px-5 mx-auto">
          <h3 className="text-[32px] md:text-[40px] lg:text-[50px] mb-2.5 font-bold">
            {t("planVisit.visitTitle")}
          </h3>

          <div
            className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4 
      gap-[20px] sm:gap-[30px] lg:gap-[50px]
    ">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i}>
                <h2 className="text-[20px] md:text-[24px] lg:text-[30px] font-bold mb-[5px]">
                  {t("planVisit.accessTitle")}
                </h2>
                <p className="text-[14px] md:text-[16px]">
                  {t("planVisit.accessDescription")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="events">
        <div className="main container">
          <h1 className="slogan">{t("planVisit.nowLive")}</h1>
          <div className="cards-container">
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
  );
}
