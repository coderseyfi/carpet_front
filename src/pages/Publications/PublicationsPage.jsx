import axiosInstance, { IMAGE_URL } from "@/api";
import PageHeader from "@/components/Cards/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function PublicationsPage() {
  const { t } = useTranslation();

  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const { lang } = useLanguage();

  const getDocuments = async (page = 1) => {
    try {
      setLoading(true);

      const res = await axiosInstance.get("/documents", {
        params: { page },
      });

      console.log("API RESPONSE:", res);

      setDocuments(res);
      setCurrentPage(res.data.current_page);
      setPerPage(res.data.per_page);
      setTotal(res.data.total);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDocuments(currentPage);
  }, [lang]);

  const getYear = (dateStr) => {
    if (!dateStr) return "";

    const d = new Date(dateStr);

    return Number.isNaN(d.getTime()) ? "" : d.getFullYear();
  };

  return (
    <>
      <div className="w-full bg-white">
        <PageHeader
          title={t("publications")}
          breadcrumbs={[{ label: t("publications") }]}
        />

        <section className="px-[40px] pt-[32px]">
          <div className="grid grid-cols-4 gap-[20px] border-b border-[#111] pb-[28px]">
            <div className="flex items-center justify-between border border-[#111] px-[16px] py-[14px] font-roboto text-[15px] font-normal leading-none">
              Language
              <span className="text-[10px]">▼</span>
            </div>

            <div className="flex items-center justify-between border border-[#111] px-[16px] py-[14px] font-roboto text-[15px] font-normal leading-none">
              Year
              <span className="text-[10px]">▼</span>
            </div>
          </div>
        </section>

        <section className="px-[40px] pt-[36px]">
          <div className="mb-[22px] flex items-baseline justify-between">
            <div className="font-roboto text-[14px] font-normal leading-none text-[#6B6B6B]">
              {total} {t("publications")}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-[48px] border-b border-[#E2DED6]">
            {documents.map((doc) => (
              <a
                key={doc.id}
                href={doc.link || "#"}
                target={doc.link ? "_blank" : undefined}
                rel={doc.link ? "noopener noreferrer" : undefined}
                className="flex items-stretch gap-[20px] border-t border-[#E2DED6] py-[20px]">
                {doc.file ? (
                  <div className="h-[128px] w-[96px] flex-none overflow-hidden">
                    <img
                      src={doc.file}
                      alt={doc.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-[128px] w-[96px] flex-none items-center justify-center bg-[#FCF3E1]">
                    <div className="flex h-[48px] w-[38px] flex-col justify-center gap-[5px] border-[1.5px] border-[#8E2B2B] px-[8px]">
                      <div className="h-[1.5px] bg-[#8E2B2B]" />
                      <div className="h-[1.5px] bg-[#8E2B2B]" />
                      <div className="h-[1.5px] w-[60%] bg-[#8E2B2B]" />
                    </div>
                  </div>
                )}

                <div className="flex flex-col justify-center">
                  {doc.created_at && (
                    <div className="mb-[9px] font-['Roboto Mono',monospace] text-[11px] font-normal leading-none text-[#8E2B2B]">
                      {getYear(doc.created_at)}
                    </div>
                  )}

                  <div className="mb-[8px] font-['Playfair Display',Georgia,serif] text-[19px] font-medium leading-[1.3] text-[#111] [text-wrap:pretty]">
                    {doc.title}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {documents.length < total && (
            <div className="flex justify-center px-0 pb-[90px] pt-[56px]">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  getDocuments(currentPage + 1);
                }}
                className="border border-[#111] px-[26px] py-[13px] font-roboto text-[15px] font-normal leading-none text-[#111]">
                Load more
              </a>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
