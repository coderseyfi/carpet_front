import React, { useState, useRef, useEffect } from "react";
import "./news.scss";
import NewsCard from "../../Cards/NewsCard";
import axiosInstance, { IMAGE_URL } from "@/api";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export default function News() {
  const { lang } = useLanguage();

  const [news, setNews] = useState([]);
  const { t } = useTranslation();

  const getNews = async () => {
    const res = await axiosInstance.get("/news");
    setNews(res.data.data);
  };

  useEffect(() => {
    getNews();
  }, [lang]);

  const mainNews = news?.[0];

  return (
    <div className="news">
      <div className="main container">
        <h1 className="slogan"> {t("news.title")}</h1>
        <div className="news-layout">
          <Link className="w-full" to={`/news/${mainNews?.id}`}>
            <div className="news-left w-full!">
              <div className="news-img w-full">
                <img className="w-full" src={IMAGE_URL + mainNews?.base_image} alt="" />
              </div>

              <h3 className="news-title">{mainNews?.title}</h3>

              <div className="news-content">
                <p className="category">{mainNews?.news_categories?.name}</p>
                <p className="date">{mainNews?.date}</p>
              </div>
            </div>
          </Link>

          <div className="news-right w-full">
            {news?.slice(0, 4).map((card, index) => (
              <NewsCard data={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
