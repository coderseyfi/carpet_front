import React, { useEffect, useState } from "react";
import PageHeader from "../../components/Cards/PageHeader";
import axiosInstance, { IMAGE_URL } from "@/api";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Teams() {
  const { t } = useTranslation();
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    try {
      const { data } = await axiosInstance.get("/team");
      setTeams(data?.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div className="pb-[clamp(50px,6vw,190px)]">
      <PageHeader
        title={t("navbar.museumTeams")}
        breadcrumbs={[
          {
            label: t("navbar.museumTeams"),
          },
        ]}
      />
      <div className="container">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
          {teams?.map((member) => (
            <Link to={`/teams/${member.id}`} key={member.id}>
              <div key={member.id} className="bg-white overflow-hidden transition-shadow">
                <img src={IMAGE_URL + member.image} alt={member.name} className="w-full aspect-9/11 h-full   object-cover" />
                <div className="pt-[14px]">
                  <h3 className="text-lg font-semibold text-black">{member.name}</h3>
                  <p className="text-sm text-black">{member.speciality}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
