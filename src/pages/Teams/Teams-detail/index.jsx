import axiosInstance, { IMAGE_URL } from "@/api";
import PageHeader from "@/components/Cards/PageHeader";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeamDetail = () => {
  const { id } = useParams();
  const [teamDetail, setTeamDetail] = useState(null);

  const getTeamDetail = async () => {
    const res = await axiosInstance.get(`/team/${id}`);
    setTeamDetail(res?.data);
  };

  useEffect(() => {
    getTeamDetail();
  }, [id]);

  return (
    <section className="team-detail-page">
      <PageHeader title="Team Detail" breadcrumb={`Home / Teams / Detail`} />

      <div className="container">
        <div className="flex flex-col lg:flex-row  justify-between gap-16 py-20">
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{teamDetail?.name}</h1>
            <p className="text-black leading-8 text-[20px]">{teamDetail?.description}</p>
          </div>

          <div className="w-full lg:w-1/2">
            <img src={IMAGE_URL + teamDetail?.image} alt="detail" className="w-full max-h-[700px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetail;
