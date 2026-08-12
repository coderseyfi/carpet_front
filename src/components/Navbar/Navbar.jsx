import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Logo2 from "../../assets/images/logo_main.svg";
import { Dropdown } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import LogoWhite from "@/assets/images/header/logo_white.svg";
import { useLanguage } from "@/context/LanguageContext";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import BurgerIco from "@/assets/images/header/burger.svg";
import { CloseOutlined } from "@ant-design/icons";
import arrowDown from "../../assets/images/arrow-down.svg";
import axiosInstance from "@/api";

import LogoRU from "@/assets/images/header/logo_ru.svg";
import LogoAZ from "@/assets/images/header/logo_az.svg";
import LogoEn from "@/assets/images/header/logo_en.svg";

const Navbar = () => {
  const [collections, setCollections] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const { lang, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const languageOptions = [
    { value: "az", label: "AZ" },
    { value: "en", label: "EN" },
    { value: "ru", label: "RU" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState({});

  // Logo komponentlərini dilə görə map edirik
  const logoByLang = {
    az: LogoAZ,
    en: LogoEn,
    ru: LogoRU,
  };

  const LangLogo = logoByLang[lang] || LogoEn;

  const getCollections = async () => {
    try {
      const response = await axiosInstance.get("/collections");
      setCollections(response.data);
    } catch (err) {
      console.error("Failed to fetch collections", err);
    }
  };

  useEffect(() => {
    getCollections();
  }, [lang]);

  useEffect(() => {
    const onScroll = () => {
      const triggerPoint = window.innerHeight - 50;
      setIsScroll(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenAccordions({});
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((v) => !v);
  };

  const toggleAccordion = (name) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const getDropdownItems = (children) =>
    children.map((child) => ({
      key: child.key,
      label: <span>{child.label}</span>,
      onClick: () => {
        if (child.path) {
          navigate(child.path);
        }
      },
    }));

  const menu = [
    {
      name: t("navbar.visit"),
      children: [
        {
          label: t("navbar.planVisit"),
          key: "1",
          path: "/plan-your-visit",
        },
      ],
    },
    {
      name: t("navbar.collections"),
      path: "/collections",
      children: collections.map((collection) => ({
        key: `collection-${collection.id}`,
        label: collection.name,
        path: `/collections/${collection.id}`,
      })),
    },
    {
      name: t("navbar.learn"),
      children: [
        {
          label: t("navbar.artists"),
          key: "5",
          path: "/artists",
        },
      ],
    },
    {
      name: t("navbar.about"),
      children: [
        {
          label: t("navbar.ourStory"),
          key: "7",
          path: "/our-story",
        },
        {
          label: t("navbar.museumTeams"),
          key: "8",
          path: "/teams",
        },
        {
          label: t("navbar.news"),
          key: "9",
          path: "/news",
        },
      ],
    },
    {
      name: t("navbar.events"),
      path: "/events",
      children: [],
    },
  ];

  const isHome = location.pathname === "/";

  const isTransparent = isHome && !isScroll;

  return (
    <>
      <header
        className={`navbar ${isHome && !isScroll ? "navbar-transparent" : "navbar-solid"}`}>
        <div className="navbar-inner">
          <div className="navbar-left" onClick={() => navigate("/")}>
            <img
              src={LangLogo}
              alt="Logo"
              className={`logo w-[130px] sm:w-auto ${isTransparent ? "logo-white" : ""}`}
            />
          </div>

          <nav className="navbar-right" aria-label="Primary">
            <div
              className={`lg:hidden ${isMobileMenuOpen ? "is-open" : ""}`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={handleMobileMenuToggle}>
              {isMobileMenuOpen ? (
                <CloseOutlined style={{ fontSize: "28px" }} />
              ) : (
                <img src={BurgerIco} alt="burger-ico" />
              )}
            </div>

            <ul
              className={`desktop-menu ${isHome && !isScroll ? "menu-white" : ""}`}>
              {menu.map((item) => {
                if (item.children && item.children.length > 0) {
                  return (
                    <Dropdown
                      key={item.name}
                      menu={{
                        items: getDropdownItems(item.children),
                        className: "navbar-dropdown-menu",
                      }}
                      trigger={["hover"]}>
                      <li className="has-dropdown ">
                        <span onClick={() => item.path && navigate(item.path)}>
                          {item.name}
                        </span>

                        <img
                          src={arrowDown}
                          alt="arrow"
                          className={`arrow-icon ${!isTransparent ? "arrow-black" : ""}`}
                        />
                      </li>
                    </Dropdown>
                  );
                }
                return (
                  <li key={item.name} onClick={() => navigate(item.path)}>
                    {item.name}
                  </li>
                );
              })}
            </ul>

            <div
              className={`hidden lg:block! lang-select ${isTransparent ? "lang-white" : ""}`}>
              <Select
                value={lang}
                onChange={(value) => changeLanguage(value)}
                options={languageOptions}
                suffixIcon={false}
                popupClassName="navbar-lang-dropdown"
                size="small"
                style={{
                  width: 30,
                }}
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${isMobileMenuOpen ? "is-visible" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-label="Mobile menu"
        aria-modal="true">
        <div className="mobile-menu-header">
          <img src={LangLogo} alt="Logo" className="logo" />
        </div>

        <ul>
          {menu.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isOpen = openAccordions[item.name];

            return (
              <li
                key={item.name}
                className={`mobile-menu-item ${hasChildren ? "has-children" : ""}`}>
                <div
                  className="mobile-menu-row"
                  onClick={() => {
                    if (hasChildren) {
                      toggleAccordion(item.name);
                    } else if (item.path) {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }
                  }}>
                  <span>{item.name}</span>
                  {hasChildren && (
                    <img
                      src={arrowDown}
                      alt=""
                      className={`accordion-icon ${isOpen ? "rotated" : ""}`}
                    />
                  )}
                </div>

                {hasChildren && (
                  <ul className={`mobile-submenu ${isOpen ? "is-open" : ""}`}>
                    {item.children.map((child) => (
                      <li
                        key={child.key}
                        onClick={() => {
                          if (child.path) {
                            navigate(child.path);
                            setIsMobileMenuOpen(false);
                          }
                        }}>
                        {child.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className="pl-5 pb-[50px]">
          <Select
            value={lang}
            onChange={(value) => changeLanguage(value)}
            options={languageOptions}
            suffixIcon={false}
            popupClassName="navbar-lang-dropdown"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
