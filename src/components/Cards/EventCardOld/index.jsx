import React from "react";
import "./eventcard.scss";
import { IMAGE_URL } from "@/api";

const EventCardOld = ({ event }) => {
  return (
    <div className="eventcard-section w-full h-full">
      <div className="cursor-pointer">
        <div className="event-img-date">
          <div className="event-dates">
            <span>{event?.start_date}</span>
            <span className="line"></span>
            <span>{event?.end_date}</span>
          </div>

          <div className="event-images  ">
            <img
              className="w-full aspect-16/14"
              src={IMAGE_URL + event?.images[0]?.image_path}
              alt=""
            />
          </div>
        </div>
        <div className="event-text">
          <p className="card-title">{event?.title}</p>
          <p className="card-subtitle">{event?.events_categories?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCardOld;
