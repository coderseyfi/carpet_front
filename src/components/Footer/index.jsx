import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Youtube from "../../assets/images/youtube.svg";
import Twitter from "../../assets/images/twitter.svg";
import Instagram from "../../assets/images/instagram.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Fb from "../../assets/images/fb.svg";
import Logo1White from "../../assets/images/footer/footer_logo.svg";

import Rules from "@/assets/files/qaydalar.pdf";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="main max-w-465 px-5 mx-auto">
        <div className="footer-inner  flex-col xl:flex-row">
          <div className="footer-left">
            <img className="w-full md:w-auto " src={Logo1White} alt="Logo" />
          </div>

          <div className="footer-right flex-col lg:flex-row">
            {/* Navigation */}
            <div>
              <Link to="/our-story">
                <p>{t("footer.aboutMuseum")}</p>
              </Link>

              <Link to="/exhibitions">
                <p>{t("footer.events")}</p>
              </Link>

              <Link to="/collections">
                <p>{t("footer.collections")}</p>
              </Link>

              <Link to="/exhibitions">
                <p>{t("footer.exhibitions")}</p>
              </Link>

              <p>
                <p>{t("footer.research")}</p>
              </p>

              <p>
                <p>{t("footer.contact")}</p>
              </p>
            </div>

            {/* Social */}
            <div>
              <a
                className="icon"
                href="https://www.facebook.com/AzerbaycanMilliXalcaMuzeyi/?locale=ru_RU"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Fb} alt="Instagram" />
                <p className="mb-0!">Facebook</p>
              </a>

              <a
                className="icon"
                href="https://www.instagram.com/azerbaijannationalcarpetmuseum/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
                <p className="mb-0!">{t("footer.instagram")}</p>
              </a>

              <a
                className="icon"
                href="https://www.youtube.com/@AzerbaijanNationalCarpetMuseum"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Youtube} alt="YouTube" />
                <p className="mb-0!">{t("footer.youtube")}</p>
              </a>

              <a
                className="icon"
                href="https://x.com/AzCarpetMuseum"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" />
                <p className="mb-0!">{t("footer.twitter")}</p>
              </a>

              <a
                className="icon"
                href="https://www.linkedin.com/company/azerbaijan-carpet-museum/about/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" />
                <p className="mb-0!">{t("footer.linkedin")}</p>
              </a>
            </div>

            {/* Addresses */}
            <div>
              <div className="address">
                <h3 style={{ color: "#7D2829" }}>{t("footer.baku")}</h3>

                <a
                  href="https://maps.app.goo.gl/d7Q2oxM2NsoUDyjx6"
                  target="_blank"
                  rel="noopener noreferrer">
                  <p>{t("footer.bakuAddress")}</p>
                </a>

                <a href="tel:+994124972016">
                  <p>{t("footer.phone")}: (+994) 12-497-20-16</p>
                </a>
              </div>

              <div>
                <h3 style={{ color: "#7D2829" }}>{t("footer.shusha")}</h3>

                <a
                  href="https://maps.app.goo.gl/2Z4S9b7MzBhfpEpe8"
                  target="_blank"
                  rel="noopener noreferrer">
                  <p>{t("footer.shushaAddress")}</p>
                </a>

                <a href="tel:+994124972016">
                  <p>{t("footer.phone")}: (+994) 12-497-20-16</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <a href={Rules} target="_blank">
          <p>{t("footer.terms")}</p>
        </a>

        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
