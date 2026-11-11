import React, { useEffect, useState } from "react";
import "./exhibitions.scss";
import PageHeader from "../../components/Cards/PageHeader";
// import EventCard from "../../components/Cards/EventCard";
import { Row, Col, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/api";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import EventCardOld from "@/components/Cards/EventCardOld";

// 3 sütunlu grid üçün səhifədə 12 kart (API default-u 10-dur)
const PER_PAGE = 12;

export default function Exhibitions() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(PER_PAGE);
  const [total, setTotal] = useState(0);
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const getEvents = async (page = 1) => {
    const res = await axiosInstance.get("/events", {
      params: { page, per_page: PER_PAGE },
    });
    setEvents(res.data.data);
    setCurrentPage(res.data.current_page);
    setPerPage(res.data.per_page);
    setTotal(res.data.total);
  };

  useEffect(() => {
    getEvents(currentPage);
  }, [currentPage, lang]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <div className="exhibitions">
        <div className="container">
          <div className="cards-container">
            <Row gutter={[30, 30]}>
              {events?.map((card, index) => (
                <Col
                  key={card.id ?? index}
                  xs={24}
                  sm={12}
                  lg={8}
                  className="card"
                  onClick={() => navigate(`/exhibitions/${card.id}`)}>
                  <EventCardOld event={card} />
                </Col>
              ))}
            </Row>

            {total > perPage && (
              <div
                className="mb-[40px]"
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
  );
}
