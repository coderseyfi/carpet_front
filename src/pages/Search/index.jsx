import axiosInstance, { IMAGE_URL } from "@/api";
import PageHeader from "@/components/Cards/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams, Link } from "react-router-dom";
import { Input, Button,  Typography, Pagination, Empty, Spin } from "antd";
import { SearchOutlined, ClockCircleOutlined } from "@ant-design/icons";
import "./search.scss";
import parse from "html-react-parser";

const { Title, Text, Paragraph } = Typography;

export default function SearchPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(
    searchParams.get("title") || "",
  );

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get("title") || "";

  const getResults = async (page = 1, searchTitle = query) => {
    try {
      setLoading(true);

      const res = await axiosInstance.get("/common/search", {
        params: {
          title: searchTitle,
          page,
        },
      });

      setResults(res.data.data || []);
      setCurrentPage(res.data.current_page || page);
      setPerPage(res.data.per_page || 10);
      setTotal(res.data.total || 0);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSearchValue(query);
    getResults(1);
  }, [query, lang]);

  const handleSearchSubmit = () => {
    const trimmed = searchValue.trim();

    setCurrentPage(1);

    // URL parametrini dəyişirik
    if (trimmed) {
      setSearchParams({
        title: trimmed,
      });
    } else {
      // Boş input olanda title parametrini silirik
      setSearchParams({});
    }

    // Əgər query artıq boşdursa, useEffect yenidən trigger olmayacaq.
    // Ona görə bütün nəticələri birbaşa gətiririk.
    if (!trimmed && !query) {
      getResults(1, "");
    }
  };

  const handlePageChange = (page) => {
    getResults(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const generateLink = (type, item) => {
    switch (type) {
      // case "projects":
      //   return `/projects/${item.id}`;

      // case "announcements":
      //   return `/announcements/${item.id}`;

      case "events":
        return `/exhibitions/${item.id}`;

      case "news":
        return `/news/${item.id}`;

      default:
        return "/";
    }
  };

  return (
    <div className="w-full bg-white search-page">
      <PageHeader
        title={t("search")}
        breadcrumbs={[
          {
            label: t("search"),
          },
        ]}
      />

      <div className="max-w-[1740px] mx-auto px-5">
        <section className="pt-[32px]">
          <div className="search-filter-row">
            <Input
              size="large"
              placeholder={t("search")}
              prefix={
                <SearchOutlined
                  style={{
                    color: "#6b6b6b",
                  }}
                />
              }
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onPressEnter={handleSearchSubmit}
              className="search-input"
              allowClear
            />

            <Button
              type="primary"
              size="large"
              className="search-submit-btn"
              onClick={handleSearchSubmit}>
              {t("search") || "Search"}
            </Button>
          </div>
        </section>

        <section className="pt-[36px] pb-[80px]">
          {total > 0 && (
            <Text strong className="search-results-count">
              {`${t("onSearch") || "On search"} ${total} ${
                t("resultsFound") || "results found"
              }`}
            </Text>
          )}

          <Spin spinning={loading}>
            {!loading && results.length === 0 ? (
              <Empty
                className="py-[60px]"
                description={t("noResultsFound") || "No results found"}
              />
            ) : (
              <div className="search-result-list">
                {results.map((item) => (
                  <div
                    key={`${item.type}-${item.id}`}
                    className="search-result-item">
                    <Link
                      to={generateLink(item.type, item)}
                      className="search-result-link">
                      <div className="search-result-content flex gap-5 justify-center items-center md:items-start md:flex-row flex-col pb-5">
                        <div className="search-result-thumb">
                          <img
                            src={IMAGE_URL + item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="search-result-info">
                          <h3 className="search-result-title font-roboto">
                            {item.title}
                          </h3>

                          {item.created_at && (
                            <div className="search-result-date font-roboto">
                              <ClockCircleOutlined />
                              <span>{item.created_at}</span>
                            </div>
                          )}

                          {item.excerpt && (
                            <div className="search-result-excerpt font-roboto">
                              {parse(item.excerpt)}
                            </div>
                          )}

                          <span className="search-result-more font-roboto">
                            {t("more") || "More"} →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </Spin>

          {total > perPage && (
            <div className="flex justify-center pt-[56px]">
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
  );
}
