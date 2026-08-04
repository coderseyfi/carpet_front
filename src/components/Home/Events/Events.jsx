import React from "react";
import "./Events.scss";
import EventCard from "../../Cards/EventCard";
import { useNavigate } from "react-router-dom";
import { useEvents } from "@/context/EventContext";
import { useTranslation } from "react-i18next";

export default function Events() {
  const { events } = useEvents();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="events">
      <div className="main container">
        <h1 className="slogan">{t("events.title")}</h1>

        <div className="cards-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events?.slice(0, 3).map((card) => (
              <div key={card.id} onClick={() => navigate(`/exhibitions/${card.id}`)}>
                <EventCard event={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
