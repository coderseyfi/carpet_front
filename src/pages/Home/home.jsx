import React from "react";
import { motion } from "framer-motion";

import Hero from "../../components/Home/Hero/Hero";
import Events from "../../components/Home/Events/Events";
import NewsComponent from "../../components/Home/NewsComponent";
import Collection from "../../components/Home/Collection";
import Museum from "../../components/Home/MuseumShop";
import "./home.scss";
import LatifKarimov from "@/components/Home/LatifKarimov";

export default function Home() {
  return (
    <div className="container-home">
      <div className="home-sc">
        <Hero />
      </div>

      <div className="home-sc">
        <Events />
      </div>

      <div className="home-sc ">
        <Collection />
      </div>

      <div className="home-sc ">
        <NewsComponent />
      </div>

      <div>
        <LatifKarimov />
      </div>

      {/* <div className="home-sc ">
        <Museum />
      </div> */}
    </div>
  );
}
