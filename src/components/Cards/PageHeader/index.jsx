import React from "react";
import "./pageheader.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function PageHeader({ title, breadcrumbs = [] }) {
  const { t } = useTranslation();

  const allBreadcrumbs = [
    {
      label: t("navbar.home"),
      path: "/",
    },
    ...breadcrumbs,
  ];

  return (
    <div className="page-header">
      <div className="container">
        <div className="breadcrumb flex items-center flex-wrap text-sm mb-0">
          {allBreadcrumbs.map((item, index) => {
            const isLast = index === allBreadcrumbs.length - 1;

            return (
              <span key={index} className="flex items-center">
                {item.path && !isLast ? (
                  <Link
                    to={item.path}
                    state={item.state}
                    className="text-gray-500 hover:text-black transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-black" : ""}>
                    {item.label}
                  </span>
                )}

                {!isLast && <span className="mx-[2px] text-gray-400">/</span>}
              </span>
            );
          })}
        </div>

        <h1 className="title leading-[70px]">{title}</h1>
      </div>
    </div>
  );
}
