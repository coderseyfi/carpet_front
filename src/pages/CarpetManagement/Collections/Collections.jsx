import React, { useEffect, useState } from "react";
import PageHeader from "../../../components/Cards/PageHeader";
import CollectionCarpet from "@/assets/images/collections/collection-carpet.png";
import { useNavigate } from "react-router-dom";
import axiosInstance, { IMAGE_URL } from "@/api";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

const collections = [
  { id: 1, name: "Collection name", categories: 4, carpets: 85 },
  { id: 2, name: "Collection name", categories: 4, carpets: 85 },
  { id: 3, name: "Collection name", categories: 4, carpets: 85 },
  { id: 4, name: "Collection name", categories: 4, carpets: 85 },
  { id: 5, name: "Collection name", categories: 4, carpets: 85 },
  { id: 6, name: "Collection name", categories: 4, carpets: 85 },
  { id: 7, name: "Collection name", categories: 4, carpets: 85 },
];

export default function Collections() {
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);

  const getCollection = async () => {
    const response = await axiosInstance.get("/collections");
    setCollections(response.data);
  };

  useEffect(() => {
    getCollection();
  }, [lang]);

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader
        title={t("collection.title")}
        breadcrumbs={[{ label: t("navbar.collections") }]}
      />
      <div className="max-w-425 mx-auto py-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {collections?.map((collection) => (
            <div
              key={collection.id}
              onClick={() =>
                navigate(`/collections/${collection.id}`, {
                  state: { collectionId: collection.id },
                })
              }
              className="cursor-pointer group">
              <div className="overflow-hidden mb-0 aspect-3/4 flex items-center justify-center">
                <img
                  src={IMAGE_URL + collection.base_image}
                  alt={collection.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="bg-[#FFF6DD] px-5 py-5">
                <h3 className="text-[22px] font-normal text-[#000000]">
                  {collection.name}
                </h3>
                <p className="text-[20px] text-[#797979] mt-0.5">
                  {/* {collection.categories} categories &nbsp;•&nbsp; {collection.carpets} carpets */}
                </p>
                <div className="flex items-center gap-2 mt-0.5 text-[20px] text-[#797979]">
                  <span>
                    {collection?.categories?.length} {t("categories")}
                  </span>
                  <span>•</span>
                  <span>
                    {collection?.carpet_count} {t("carpets")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
