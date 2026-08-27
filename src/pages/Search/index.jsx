import axiosInstance, { IMAGE_URL } from "@/api";
import PageHeader from "@/components/Cards/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams, Link } from "react-router-dom";
import { Input, Button, List, Typography, Pagination, Empty, Spin } from "antd";
import { SearchOutlined, ClockCircleOutlined } from "@ant-design/icons";
import "./search.scss";

const { Title, Text, Paragraph } = Typography;

export default function SearchPage() {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(searchParams.get("q") || "");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get("title") || "";

  const getResults = async (page = 1) => {
    if (!query) {
      setResults([]);
      setTotal(0);
      return;
    }

    try {
      setLoading(true);

      const res = await axiosInstance.get("/common/search", {
        params: {
          title: query,
          page,
        },
      });

      setResults(res.data.data || []);
      setCurrentPage(res.data.current_page || page);
      setPerPage(res.data.per_page || perPage);
      setTotal(res.data.total || 0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSearchValue(query);
    getResults(1);
  }, [query, lang]);

  const handleSearchSubmit = (value) => {
    const trimmed = (value ?? searchValue).trim();
    if (!trimmed) return;
    setSearchParams({ q: trimmed });
  };

  const handlePageChange = (page) => {
    getResults(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const generateLink = (type, item) => {
    switch (type) {
      //   case "projects":
      //     return `/projects/${item.id}`;
      //   case "announcements":
      //     return `/announcements/${item.id}`;
      case "events":
        return `/exhibitions/${item.id}`;
      case "news":
        return `/news/${item.id}`;
      default:
        return `/`;
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return "";

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  return (
    <div className="w-full bg-white search-page">
      <PageHeader title={t("search")} breadcrumbs={[{ label: t("search") }]} />

      <div className="max-w-[1740px] mx-auto px-5">
        <section className="pt-[32px]">
          <div className="search-filter-row">
            <Input
              size="large"
              placeholder={t("enterSearchTerm") || "Enter a search term..."}
              prefix={<SearchOutlined style={{ color: "#6b6b6b" }} />}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onPressEnter={() => handleSearchSubmit()}
              className="search-input"
              allowClear
            />

            <Button
              type="primary"
              size="large"
              className="search-submit-btn"
              onClick={() => handleSearchSubmit()}>
              {t("search") || "Search"}
            </Button>
          </div>
        </section>

        <section className="pt-[36px] pb-[80px]">
          {query && (
            <Text strong className="search-results-count">
              {`${t("onSearch") || "On search"} ${total} ${
                t("resultsFound") || "results found"
              }`}
            </Text>
          )}

          <Spin spinning={loading}>
            {!loading && query && results.length === 0 ? (
              <Empty
                className="py-[60px]"
                description={t("noResultsFound") || "No results found"}
              />
            ) : (
              <List
                itemLayout="horizontal"
                dataSource={results}
                className="search-result-list"
                renderItem={(item) => (
                  <List.Item key={item.id}>
                    <Link
                      to={generateLink(item.type, item)}
                      className="search-result-link">
                      <List.Item.Meta
                        avatar={
                          <div className="search-result-thumb">
                            <img
                              src={IMAGE_URL + item.image}
                              alt={item.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        }
                        title={
                          <Title level={5} className="search-result-title">
                            {item.title}
                          </Title>
                        }
                        description={
                          <>
                            {item.created_at && (
                              <Text
                                type="secondary"
                                className="search-result-date">
                                <ClockCircleOutlined />{" "}
                                {formatDate(item.created_at)}
                              </Text>
                            )}

                            {item.excerpt && (
                              <Paragraph
                                className="search-result-excerpt"
                                ellipsis={{ rows: 2 }}>
                                {item.excerpt}
                              </Paragraph>
                            )}

                            <Text className="search-result-more">
                              {t("more") || "More"} →
                            </Text>
                          </>
                        }
                      />
                    </Link>
                  </List.Item>
                )}
              />
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
