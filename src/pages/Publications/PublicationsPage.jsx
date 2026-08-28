import axiosInstance, { IMAGE_URL } from "@/api";
import PageHeader from "@/components/Cards/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FileIcon from "@/assets/icons/file.svg";
import { Select } from "antd";

import "./public.scss";

export default function PublicationsPage() {
  const { t } = useTranslation();

  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState(null);
  const [year, setYear] = useState(null);

  const languageOptions = [
    { value: "az", label: "Azərbaycan" },
    { value: "en", label: "English" },
    { value: "ru", label: "Русский" },
  ];

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 15 }, (_, i) => {
    const y = currentYear - i;
    return { value: y, label: String(y) };
  });

  const { lang } = useLanguage();

  const getDocuments = async (page = 1) => {
    try {
      setLoading(true);

      const res = await axiosInstance.get("/documents", {
        params: {
          page,
          // lang: language || undefined,
          year: year || undefined,
        },
      });

      setDocuments(res.data);
      setCurrentPage(res.data.current_page);
      setPerPage(res.data.per_page);
      setTotal(res.data.total);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDocuments(1);
  }, [lang, year]);

  return (
    <>
      <div className="w-full bg-white">
        <PageHeader
          title={t("publications")}
          breadcrumbs={[{ label: t("publications") }]}
        />

        <div className="max-w-[1740px] mx-auto px-5">
          <section className="pt-[32px]">
            <div className="grid grid-cols-4 gap-[20px] border-b border-[#111] pb-[28px]">
              {/* <Select
                placeholder="Language"
                allowClear
                value={language}
                onChange={(value) => setLanguage(value)}
                options={languageOptions}
                className="publications-filter-select"
                suffixIcon={<span className="text-[10px]">▼</span>}
              /> */}

              <Select
                placeholder="Year"
                allowClear
                value={year}
                onChange={(value) => setYear(value)}
                options={yearOptions}
                className="publications-filter-select"
                suffixIcon={<span className="text-[10px]">▼</span>}
              />
            </div>
          </section>

          <section className="pt-[36px]">
            <div className="mb-[22px] flex items-baseline justify-between">
              <div className="font-roboto text-[14px] font-normal leading-none text-[#6B6B6B]">
                {documents?.length} {t("publication")}
              </div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-x-[48px] border-b border-[#E2DED6]">
              {documents?.map((doc) => (
                <a
                  key={doc?.id}
                  href={doc?.file ? doc?.file : doc?.link || "#"}
                  target={doc?.file || doc?.link ? "_blank" : undefined}
                  rel={
                    doc?.file || doc?.link ? "noopener noreferrer" : undefined
                  }
                  className="flex items-stretch gap-[20px] border-t border-[#E2DED6] py-[20px]">
                  {doc?.file || doc?.cover_image ? (
                    <div className="h-[128px] w-[96px] flex-none overflow-hidden">
                      <img
                        src={doc.cover_image}
                        alt={doc.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-[128px] w-[96px] flex-none items-center justify-center bg-[#FCF3E1]">
                      <img src={FileIcon} alt="file" />
                    </div>
                  )}

                  <div className="flex flex-col justify-center">
                    {doc.created_at && (
                      <div className="mb-[9px] font-['Roboto Mono',monospace] text-[11px] font-normal leading-none text-[#8E2B2B]">
                        {doc.year}
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
      </div>
    </>
  );
}
