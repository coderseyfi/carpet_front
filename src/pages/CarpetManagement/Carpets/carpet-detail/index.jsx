import axiosInstance, { IMAGE_URL } from "@/api";
import PageHeader from "@/components/Cards/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";

const CarpetDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { lang } = useLanguage();

  const [carpet, setCarpet] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  const { collectionId, subcategoryId } = location.state || {};

  const getCarpet = async () => {
    const { data } = await axiosInstance.get(`/carpets/${id}`);
    const carpetData = data;

    setCarpet(carpetData);

    const images = carpetData?.images || [];
    setSelectedImage(images.length > 0 ? images[0] : null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) getCarpet();
  }, [id, lang]);

  return (
    <div className="min-h-screen">
      <PageHeader
        title={carpet?.name}
        breadcrumbs={[
          { label: t("navbar.collections"), path: "/collections" },
          // {
          //   label: t("categories"),
          //   path: collectionId ? `/collections/${collectionId}` : undefined,
          // },
          {
            label: t("carpets"),
            path: subcategoryId ? `/carpets/${subcategoryId}` : undefined,
            state: { collectionId },
          },
          { label: carpet?.name },
        ]}
      />

      <div className="max-w-[1700px] mx-auto py-[40px] px-5">
        {carpet && (
          <>
            {/* <h2 className="font-bold text-[45px] text-black mb-9">
              {carpet.name}
            </h2> */}

            <div className="flex gap-8 items-start">
              {/* Left */}
              <div className="max-w-[655px] w-full flex-shrink-0">
                <p className="text-[20px] leading-relaxed text-gray-600 font-serif">
                  {carpet.description}
                </p>
              </div>

              {/* Center */}
              <div className="flex-1 bg-[#F6F6F6] rounded flex items-center justify-center max-w-[730px] min-h-[720px] p-6">
                {selectedImage && (
                  <img
                    src={IMAGE_URL + selectedImage.image}
                    alt={carpet.name}
                    className="max-h-[440px] max-w-full object-contain transition-opacity duration-300"
                  />
                )}
              </div>

              {/* Right */}
              <div className="flex flex-col gap-3 flex-shrink-0">
                {carpet.images?.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => setSelectedImage(img)}
                    className={`h-[230px] w-[184px] bg-[#e8e2d8] rounded overflow-hidden cursor-pointer transition-all duration-200
                      ${selectedImage?.id === img.id ? "border-2 border-[#8B4513] opacity-100" : "border-2 border-transparent opacity-60 hover:opacity-100"}`}>
                    <img
                      src={IMAGE_URL + img.image}
                      alt={`${carpet.name} - ${img.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default CarpetDetail;
