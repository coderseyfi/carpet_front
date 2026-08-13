import React from "react";
import "./eventcard.scss";
import { IMAGE_URL } from "@/api";

const EventCardOld = ({ event }) => {
  return (
    <div className="eventcard-section w-fullx] h-full">
      <div className="cursor-pointer">
        <div className="event-img-date">
          <div className="event-dates">
            <span>{event?.start_date}</span>
            <span className="line"></span>
            <span>{event?.end_date}</span>
          </div>

          <div className="event-images  ">
            <img
              className="max-h-[400px]"
              src={IMAGE_URL + event?.images[0]?.image_path}
              alt=""
            />
          </div>
        </div>
        <div className="event-text">
          <p className="card-title">{event?.title}</p>
          <p className="card-subtitle">{event?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCardOld;
