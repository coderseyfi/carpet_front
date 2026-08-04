import axiosInstance, { IMAGE_URL } from "@/api";
import PageHeader from "@/components/Cards/PageHeader";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtistDetail = () => {
  const { id } = useParams();
  const [artistDetail, setArtistDetail] = useState(null);

  const getArtistDetail = async () => {
    const res = await axiosInstance.get(`/artists/${id}`);
    setArtistDetail(res?.data);
  };

  useEffect(() => {
    getArtistDetail();
  }, [id]);

  return (
    <section className="artist-detail-page">
      <PageHeader title="Artist Detail" breadcrumb={`Home / Artists / Detail`} />

      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-20">
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{artistDetail?.name}</h1>
            <p className="text-black leading-8 text-[20px]">{artistDetail?.description}</p>
          </div>

          <div className="w-full lg:w-1/2">
            <img src={IMAGE_URL + artistDetail?.image} alt="detail" className="w-full max-h-[700px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistDetail;
