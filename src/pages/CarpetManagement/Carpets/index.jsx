import axiosInstance, { IMAGE_URL } from "@/api";
import PageHeader from "@/components/Cards/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

const Carpets = () => {
  const { lang } = useLanguage();
  const location = useLocation();
  const { collectionId } = location.state || {};

  const { t } = useTranslation();
  const { id } = useParams();
  const [carpets, setCarpets] = useState([]);

  const getCarpets = async () => {
    const { data } = await axiosInstance.get(`/carpets?subcategory_id=${id}`);
    setCarpets(data.data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getCarpets();
  }, [id, lang]);

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader
        title={t("carpets")}
        breadcrumbs={[
          { label: t("navbar.collections"), path: "/collections" },
          // {
          //   label: t("categories"),
          //   path: collectionId ? `/collections/${collectionId}` : undefined,
          // },
          {
            label: t("carpets"),
            path: collectionId ? `/collections/${collectionId}` : undefined,
          },
        ]}
      />

      <div className="max-w-[1700px] mx-auto py-[40px] px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
          {carpets?.map((carpet) => (
            <Link
              to={`/carpet-detail/${carpet.id}`}
              state={{ collectionId, subcategoryId: id }}>
              <div key={carpet.id} className="cursor-pointer group">
                <div className="overflow-hidden bg-white mb-0 aspect-3/4 flex items-center justify-center">
                  <img
                    src={IMAGE_URL + carpet?.images[0]?.image}
                    alt={carpet.name}
                    className="w-[60%] h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="bg-[#FFF6DD] px-5 py-5">
                  <h3 className="text-[22px] font-normal text-[#000000]">
                    {carpet.name}
                  </h3>
                  <p className="text-[20px] text-[#797979] mt-0.5">
                    {carpet.images_count} {t("carpets")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carpets;
