import React, { useEffect, useState } from "react";
import "./events.scss";
import PageHeader from "../../components/Cards/PageHeader";
import { Row, Col, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import axiosInstance, { IMAGE_URL } from "@/api";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import EventCard from "@/components/Cards/eventCard";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const getEvents = async (page = 1) => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/events", {
        params: { page },
      });
      setEvents(res.data.data);
      setCurrentPage(res.data.current_page);
      setPerPage(res.data.per_page);
      setTotal(res.data.total);
    } finally {
      setLoading(false);
    }
  };

  console.log(events);
  

  useEffect(() => {
    getEvents(currentPage);
  }, [currentPage, lang]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mainEvents = events?.[0];

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
      <div className="newspage">
        <div className="news">
          <div className="main container">
            {/* <h1 className="slogan eventspage-title">Populyar Xəbərlər</h1> */}
            <div className="news-layout">
              <div className="news-left w-full!">
                <div className="news-img w-full">
                  <img
                    className="w-full"
                    src={IMAGE_URL + mainEvents?.base_image}
                    alt=""
                  />
                </div>

                <h3 className="news-title">{mainEvents?.title}</h3>

                <div className="news-content">
                  <p className="category">
                    {mainEvents?.news_categories?.name}
                  </p>
                  <p className="date">{mainEvents?.date}</p>
                </div>
              </div>

              <div className="news-right w-full">
                {events?.slice(0, 4).map((card, index) => (
                  <div
                    key={card.id ?? index}
                    onClick={() => navigate(`/events/${card.id}`)}>
                    <EventCard data={card} />
                  </div>
                ))}
              </div>
            </div>

            <div className="news-card overflow-hidden">
              <h1 className="slogan allnews">{t("all_events")}</h1>
              <Row gutter={[60, 30]}>
                {events.map((card, index) => (
                  <Col
                    key={card.id ?? index}
                    xs={24}
                    sm={12}
                    lg={12}
                    className="card">
                    <div onClick={() => navigate(`/events/${card.id}`)}>
                      <EventCard data={card} />
                    </div>
                  </Col>
                ))}
              </Row>

              {total > perPage && (
                <div
                  className="news-pagination mb-[10px]"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 40,
                  }}>
                  <Pagination
                    current={currentPage}
                    pageSize={perPage}
                    total={total}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
