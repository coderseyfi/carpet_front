import React from "react";
import "./eventCard.scss";
import { IMAGE_URL } from "@/api";
import { Link } from "react-router-dom";

const EventCard = ({ data }) => {
  return (
    <Link>
      <div className="newscard-section">
        <div className="newscard-layout">
          <h3 className="title">{data?.title}</h3>

          <div className="news-content">
            <p className="category">{data?.news_categories?.name}</p>
            <p className="date">{data?.date}</p>
          </div>
        </div>

        <div className="news-img">
          <img src={IMAGE_URL + data?.base_image} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
