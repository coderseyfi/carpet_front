import axiosInstance from "@/api";
import PageHeader from "@/components/Cards/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FileIcon from "@/assets/icons/file.svg";
import { Select, Pagination } from "antd";

import "@/pages/Publications/public.scss";

export default function ReportsPage() {
  const { t } = useTranslation();

  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState(null);

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 15 }, (_, i) => {
    const y = currentYear - i;
    return { value: y, label: String(y) };
  });

  const { lang } = useLanguage();

  const getReports = async (page = 1) => {
    try {
      setLoading(true);

      const res = await axiosInstance.get("/reports", {
        params: {
          page,
          year: year || undefined,
        },
      });

      const responseData = Array.isArray(res) ? res : (res?.data ?? []);
      const list = Array.isArray(responseData)
        ? responseData
        : (responseData?.data ?? []);
      const pagination = Array.isArray(res) ? {} : (res ?? {});

      setDocuments(list);
      setCurrentPage(pagination.current_page ?? page);
      setPerPage(pagination.per_page);
      setTotal(pagination.total);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReports(currentPage);
  }, [currentPage, lang, year]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full bg-white">
        <PageHeader
          title={t("reports")}
          breadcrumbs={[{ label: t("reports") }]}
        />

        <div className="max-w-[1740px] mx-auto px-5">
          <section className="pt-[32px]">
            <div className="grid grid-cols-4 gap-[20px] border-b border-[#111] pb-[28px]">
              <Select
                placeholder={t("year")}
                allowClear
                value={year}
                onChange={(value) => {
                  setYear(value);
                  setCurrentPage(1);
                }}
                options={yearOptions}
                className="publications-filter-select"
                suffixIcon={<span className="text-[10px]">▼</span>}
              />
            </div>
          </section>

          <section className="pt-[36px]">
            <div className="mb-[22px] flex items-baseline justify-between">
              <div className="font-roboto text-[14px] font-normal leading-none text-[#6B6B6B]">
                {!loading && documents?.length} {t("report")}
              </div>
            </div>

            {loading ? (
              <div className="flex min-h-[200px] items-center justify-center border-t border-[#E2DED6] pt-[20px] text-[14px] text-[#6B6B6B]">
                {t("loading") || "Loading..."}
              </div>
            ) : documents?.length === 0 ? (
              <div className="flex min-h-[200px] items-center justify-center border-t border-[#E2DED6] pt-[20px] text-[14px] text-[#6B6B6B]">
                {t("noData") || "No reports found"}
              </div>
            ) : (
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
            )}

            {!loading && total > perPage && (
              <div
                className="news-pagination mb-[10px]"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 40,
                  paddingBottom: 90,
                }}>
                <Pagination
                  current={currentPage}
                  pageSize={perPage}
                  total={total}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                />
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
