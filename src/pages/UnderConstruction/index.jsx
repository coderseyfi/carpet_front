import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./underconstruction.scss";

export default function UnderConstruction() {
  const { t } = useTranslation();

  return (
    <main className="under-construction" aria-labelledby="construction-title">
      <div className="container">
        <section className="under-construction__panel">
          <div className="under-construction__art" aria-hidden="true">
            <div className="under-construction__emblem">
              <svg viewBox="0 0 64 64" fill="none" focusable="false">
                <path d="M15 41v-7a17 17 0 0 1 11-16m12 0a17 17 0 0 1 11 16v7M26 31V15a6 6 0 0 1 12 0v16M10 41h44v9H10zM19 50v5m26-5v5" />
              </svg>
            </div>
          </div>
          <div className="under-construction__content">
            <p className="under-construction__eyebrow">{t("planVisit.pageTitle")}</p>
            <h1 id="construction-title">{t("planVisit.underConstruction.title")}</h1>
            <p className="under-construction__description">{t("planVisit.underConstruction.description")}</p>
            <p className="under-construction__thanks">{t("planVisit.underConstruction.thanks")}</p>
            <Link className="under-construction__link" to="/">
              {t("navbar.home")}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
