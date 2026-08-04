import React, { useEffect, useState } from "react";
import PageHeader from "../../components/Cards/PageHeader";
import axiosInstance, { IMAGE_URL } from "@/api";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Artists() {
  const { t } = useTranslation();
  const [artists, setArtists] = useState([]);

  const getArtists = async () => {
    try {
      const { data } = await axiosInstance.get("/artists");
      setArtists(data?.data);
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  };

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <div className="pb-[clamp(50px,6vw,190px)]">
      <PageHeader
        title={t("navbar.artists")}
        breadcrumbs={[
          {
            label: t("navbar.artists"),
          },
        ]}
      />
      <div className="container">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
          {artists?.map((member) => (
            <Link to={`/artists/${member.id}`} key={member.id}>
              <div className="bg-white overflow-hidden transition-shadow">
                <img src={IMAGE_URL + member.image} alt={member.name} className="w-full  object-cover" />
                <div className="pt-[14px]">
                  <h3 className="text-lg font-semibold text-black">{member.name}</h3>
                  <p className="text-sm text-black">{member.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
