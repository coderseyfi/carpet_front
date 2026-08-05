import "./ourStory.scss";
import PageHeader from "../../components/Cards/PageHeader";
import NewsCard from "../../components/Cards/NewsCard";

import OurStoryHeroImg from "../../assets/images/OurStoryHeroImgWOpacity.png";
import OurStoryVideoCoverImg from "../../assets/images/OurStoryVideoCoverImg.png";
import PlayBtn from "../../assets/images/PlayBtn.png";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axiosInstance, { IMAGE_URL } from "@/api";
import { useLanguage } from "@/context/LanguageContext";

export default function OurStory() {
  const [news, setNews] = useState([]);
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const getNews = async () => {
    const res = await axiosInstance.get("/news");
    setNews(res.data.data);
  };

  useEffect(() => {
    getNews();
  }, [lang]);

  const mainNews = news?.[0];

  const datas = [
    {
      id: 1,
      title: t("ourStory.missionTitle"),
      context: t("ourStory.missionText"),
    },
    {
      id: 2,
      title: t("ourStory.visionTitle"),
      context: t("ourStory.visionText"),
    },
    {
      id: 3,
      title: t("ourStory.roleTitle"),
      context: t("ourStory.roleText"),
    },
  ];

  return (
    <div>
      <PageHeader
        title={t("ourStory.pageTitle")}
        breadcrumbs={[
          {
            label: t("ourStory.pageTitle"),
          },
        ]}
      />
      <div className="our-story">
        <div className="hero-img">
          <img
            src={OurStoryHeroImg}
            alt=""
            className="w-full our-story-hero-img"
          />
        </div>

        <div className="main container">
          <div className="our-story-content">
            <h4>{t("ourStory.historyTitle")}</h4>

            <p>{t("ourStory.historyText")}</p>
          </div>

          <div className="video">
            <img
              src={OurStoryVideoCoverImg}
              alt=""
              className="our-story-main-img"
            />

            <img className="play-btn" src={PlayBtn} alt="" />
          </div>

          <div className="our-story-cards">
            {datas.map((item) => (
              <div className="story-card" key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.context}</p>
              </div>
            ))}
          </div>

          <div className="our-story-trending">
            <h1 className="slogan newspage-title">{t("ourStory.trending")}</h1>

            <div className="news-layout">
              <Link className="w-full" to={`/news/${mainNews?.id}`}>
                <div className="news-left w-full!">
                  <div className="news-img w-full">
                    <img
                      className="w-full"
                      src={IMAGE_URL + mainNews?.base_image}
                      alt=""
                    />
                  </div>

                  <h3 className="news-title">{mainNews?.title}</h3>

                  <div className="news-content">
                    <p className="category">
                      {mainNews?.news_categories?.name}
                    </p>

                    <p className="date">{mainNews?.date}</p>
                  </div>
                </div>
              </Link>

              <div className="news-right w-full">
                {news?.slice(0, 4).map((card) => (
                  <div key={card.id}>
                    <NewsCard data={card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
