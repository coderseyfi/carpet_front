import React, { useEffect, useRef, useState } from "react";
import PageHeader from "../../../components/Cards/PageHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance, { IMAGE_URL } from "@/api";
import CarpetDetailImg from "@/assets/images/collections/collection-detail.png";
import { useTranslation } from "react-i18next";

export default function CollectionDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const subcategoryRef = useRef(null);
  const [collectionDetail, setCollectionDetail] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const getCollectionDetail = async () => {
    const response = await axiosInstance.get(`/collections/${id}`);
    setCollectionDetail(response.data);
  };

  const getSubcategories = async (categoryId) => {
    try {
      if (selectedCategoryId === categoryId) return;

      const { data } = await axiosInstance.get(`/subcategories?category_id=${categoryId}&type=site`);

      setSubcategories(data.data);
      setSelectedCategoryId(categoryId);

      setTimeout(() => {
        subcategoryRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollectionDetail();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader
        title={t("categories")}
        breadcrumbs={[
          {
            label: t("categories"),
          },
        ]}
      />

      <div className="bg-[#7D2829]">
        <div className="flex justify-center">
          <div className="text-white w-full py-[60px] max-w-[827px] pl-[110px] pr-[36px]">
            <h1 className="text-[55px] font-normal mb-3">{collectionDetail?.name}</h1>
            <p className="text-[18px] font-normal leading-[35px]">{collectionDetail?.description}</p>
          </div>

          <div className="w-full max-w-[1093px]">
            <img className="w-full h-full object-cover" src={CarpetDetailImg} alt="Collection Detail" />
          </div>
        </div>
      </div>

      <div className="max-w-425 mx-auto py-10 px-5">
        {/* Categories Section */}
        <div>
          <h3 className="text-[28px] tracking-widest text-black uppercase mb-5">{t("categories")}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {collectionDetail?.categories?.map((category) => (
              <div key={category.id} onClick={() => getSubcategories(category.id)} className={`cursor-pointer group border transition-all duration-300 ${selectedCategoryId === category.id ? "border-[#7D2829]" : "border-transparent"}`}>
                {/* Image area */}
                <div className="overflow-hidden mb-0 aspect-3/4 flex items-center justify-center">
                  <img src={category.image ? `${IMAGE_URL}/${category.image}` : categoryCarpet} alt={category.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                {/* Info area */}
                <div className={`px-5 py-5 transition-all duration-300 ${selectedCategoryId === category.id ? "bg-[#7D2829]" : "bg-[#FFF6DD]"}`}>
                  <h3 className={`text-[28px] font-normal transition-all duration-300 ${selectedCategoryId === category.id ? "text-white" : "text-[#000000]"}`}>{collectionDetail?.name}</h3>

                  <div className="flex items-center gap-2 mt-0.5 text-[20px] text-[#797979]">
                    <span>{collectionDetail?.carpet_count} carpets</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {subcategories.length > 0 && (
        <div ref={subcategoryRef} className="max-w-425 mx-auto py-10 px-5">
          <div>
            <h3 className="text-[28px] tracking-widest text-black uppercase mb-5">{t("subcategories")}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {subcategories.map((subcategory) => (
                <Link to={`/carpets/${subcategory.id}`} className="cursor-pointer group block">
                  <div className="overflow-hidden mb-0 aspect-3/4 flex items-center justify-center">
                    <img src={subcategory.image ? `${IMAGE_URL}/${subcategory.image}` : categoryCarpet} alt={subcategory.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  <div className="bg-[#FFF6DD] px-5 py-5">
                    <h3 className="text-[28px] font-normal text-[#000000]">{subcategory.name}</h3>

                    <div className="flex items-center gap-2 mt-0.5 text-[20px] text-[#797979]">
                      {/* <span>{subcategories?.category?.length} categories</span> */}
                      <span>
                        {subcategory?.images_count} {t("carpets")}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
