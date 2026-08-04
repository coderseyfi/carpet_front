import React, { useState, useRef } from "react";
import "./museum.scss";
import { Row, Col } from "antd";
import Museum1 from "../../../assets/images/museum1.svg";
import Museum2 from "../../../assets/images/museum2.svg";
import Museum3 from "../../../assets/images/museum3.svg";
import Right from "../../../assets/images/right.svg";

export default function Museum() {
  const cardsData = [
    {
      image: Museum1,
      date: "19.06.2025",
      title: "Product name",
      category: "Beaded Long Necklace",
      price: "18",
    },
    {
      image: Museum2,
      date: "19.06.2025",
      title: "Product name",
      category: "Beaded Long Necklace",
      price: "18",
    },
    {
      image: Museum3,
      date: "19.06.2025",
      title: "Product name",
      category: "Beaded Long Necklace",
      price: "18",
    },
    {
      image: Museum2,
      date: "19.06.2025",
      title: "Product name",
      category: "Beaded Long Necklace",
      price: "18",
    },
  ];

  return (
    <div className="museum-home">
      <div className="main container">
        <h3 className="title">From the Museum Shop</h3>
        <p className="book">
          Shop now <img src={Right} alt="" />
        </p>
        <div className="cards">
          {cardsData.map((item, index) => (
            <div className="card" key={index}>
              <div className="img-card">
                <img src={item.image} alt="" />
              </div>
              <div className="content">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
                <h3>{item.price} $</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
