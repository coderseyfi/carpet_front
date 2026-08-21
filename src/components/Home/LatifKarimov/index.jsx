import React from "react";
import LatifBg from "@/assets/images/latif/latif.png";
import arrowLeft from "@/assets/images/arrow-left.svg";
import { useTranslation } from "react-i18next";

const LatifKarimov = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${LatifBg})` }}>
      <div className="container mx-auto px-4 py-10!">
        <div className="max-w-[740px]">
          <h2 className="text-4xl font-beau! text-[clamp(32px,9vw,150px)] text-black mb-4">{t("latif.title")}</h2>

          <p className="text-black mb-[31px] leading-[140%] text-[24px]">{t("latif.description")}</p>

          <button className="text-black font-medium flex items-center underline">
            <span>{t("latif.readMore")}</span>
            <img src={arrowLeft} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatifKarimov;
