import React from "react";
import "./exhibitions.scss";
import PageHeader from "../../components/Cards/PageHeader";
// import EventCard from "../../components/Cards/EventCard";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useEvents } from "@/context/EventContext";
import { useTranslation } from "react-i18next";
import EventCardOld from "@/components/Cards/EventCardOld";

export default function Exhibitions() {
  const { t } = useTranslation();
  const { events } = useEvents();
  const navigate = useNavigate();

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
                  key={index}
                  xs={24}
                  sm={12}
                  lg={8}
                  className="card"
                  onClick={() => navigate(`/exhibitions/${card.id}`)}>
                  <EventCardOld event={card} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
