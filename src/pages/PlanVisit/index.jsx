import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MuseumImg from "@/assets/images/plan_visit/museum.png";
import ShushaImg from "@/assets/images/plan_visit/shusha.png";
import { useEvents } from "@/context/EventContext";
import EventCardOld from "@/components/Cards/EventCardOld";

const TICKET_URL =
  "https://iticket.az/events/museum/azerbaijan-national-carpet-museum";
const PHONE = "(+994) 12-497-20-16";
const PHONE_HREF = "tel:+994124972016";

// App.scss sets font-family on `*`, so the serif font needs `!` to win.
const SERIF = "font-['Crimson_Pro',Georgia,serif]!";

const LOCATIONS = [
  {
    key: "baku",
    image: MuseumImg,
    mapUrl: "https://maps.app.goo.gl/d7Q2oxM2NsoUDyjx6",
  },
  {
    key: "shusha",
    image: ShushaImg,
    mapUrl: "https://maps.app.goo.gl/2Z4S9b7MzBhfpEpe8",
  },
];

// `on` holds JS weekday numbers (0 = Sunday) used for the "today" badge.
const HOURS = [
  {
    title: "cashDesk",
    rows: [
      { days: "tueFri", time: "10:00 – 18:00", on: [2, 3, 4, 5] },
      { days: "satSun", time: "11:00 – 19:00", on: [6, 0] },
    ],
  },
  {
    title: "exposition",
    rows: [
      { days: "tueFri", time: "10:00 – 19:00", on: [2, 3, 4, 5] },
      { days: "satSun", time: "11:00 – 20:00", on: [6, 0] },
    ],
  },
  {
    title: "jewelry",
    rows: [
      { days: "tueThu", time: "10:00 – 16:00", on: [2, 4] },
      { days: "sat", time: "11:00 – 16:00", on: [6] },
    ],
  },
];

const TICKETS = [
  { label: "locals", single: 7, group: 5 },
  { label: "foreigners", single: 10, group: 7 },
  { label: "students", single: 3 },
  { label: "jewelry", single: 3 },
];

const GUIDE = [
  { label: "guideService", price: 12 },
  { label: "guideGroup", price: 15 },
  { label: "guideStudents", price: 5 },
];

const SECTIONS = ["locations", "hours", "prices", "free"];

// Exposition opening status in Baku time (UTC+4), independent of the visitor's timezone.
function getBakuStatus(now) {
  const baku = new Date(now + 4 * 3600e3);
  const day = baku.getUTCDay();
  const minutes = baku.getUTCHours() * 60 + baku.getUTCMinutes();
  const weekend = day === 6 || day === 0;
  const [open, close] = weekend ? ["11:00", "20:00"] : ["10:00", "19:00"];
  const toMin = (time) => parseInt(time, 10) * 60;

  if (day === 1) {
    return { day, open: false, label: "closedToday", detail: ["opensTomorrow", "10:00"] };
  }
  if (minutes >= toMin(open) && minutes < toMin(close)) {
    return { day, open: true, label: "openNow", detail: ["openUntil", close] };
  }
  if (minutes < toMin(open)) {
    return { day, open: false, label: "closedNow", detail: ["opensToday", open] };
  }
  if (day === 0) {
    return { day, open: false, label: "closedNow", detail: ["opensTuesday", "10:00"] };
  }
  const nextOpen = day === 5 || day === 6 ? "11:00" : "10:00";
  return { day, open: false, label: "closedNow", detail: ["opensTomorrow", nextOpen] };
}

const scrollToSection = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const SectionTitle = ({ children }) => (
  <h2
    className={`${SERIF} mb-8 text-[clamp(30px,3.4vw,44px)] font-medium tracking-[-0.01em]`}>
    {children}
  </h2>
);

const Eyebrow = ({ children, className = "text-[#7B2627]" }) => (
  <h3 className={`text-[13px] font-bold tracking-[0.09em] ${className}`}>
    {children}
  </h3>
);

const Price = ({ value, currency }) => (
  <span className={`${SERIF} whitespace-nowrap text-[22px]`}>
    {value}{" "}
    <span className="text-[13px] text-[#6b6b6b]">{currency}</span>
  </span>
);

const PriceRow = ({ children, last }) => (
  <div
    className={`flex items-baseline justify-between gap-4 py-4 text-base ${
      last ? "" : "border-b border-[#e6dccb]"
    }`}>
    {children}
  </div>
);

const StatusCell = ({ label, children, first }) => (
  <div
    className={`flex flex-col gap-1.5 pt-[18px] pb-5 ${
      first
        ? "sm:pr-6"
        : "border-t border-[#e2d3b0] sm:border-t-0 sm:border-l sm:px-6"
    }`}>
    <span className="text-xs font-medium tracking-[0.08em] text-[#7a6f5c]">
      {label}
    </span>
    {children}
  </div>
);

export default function PlanVisit() {
  const { t } = useTranslation();
  const { events } = useEvents();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(timer);
  }, []);

  const status = getBakuStatus(now);
  const statusColor = status.open ? "text-[#1E7A36]" : "text-[#7B2627]";
  const currency = t("planVisit.prices.currency");
  // returnObjects gives back the key string until translations have loaded.
  const toList = (value) => (Array.isArray(value) ? value : []);
  const freeList = toList(t("planVisit.free.list", { returnObjects: true }));
  const guideLanguages = toList(
    t("planVisit.prices.languages", { returnObjects: true }),
  );
  const ticketGrid = "grid grid-cols-[minmax(0,1fr)_80px_96px] gap-x-3";

  return (
    <div className="bg-white text-[#141414] antialiased">
      {/* Page header */}
      <section className="bg-[#fff6dd] pt-[110px]">
        <div className="container">
          <nav className="flex flex-wrap gap-1.5 text-sm text-[#6b6b6b]">
            <Link to="/" className="transition-colors hover:text-black">
              {t("navbar.home")}
            </Link>
            <span>/</span>
            <span className="text-[#141414]">{t("planVisit.breadcrumb")}</span>
          </nav>

          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6 pt-5 pb-10">
            <div className="max-w-[620px]">
              <h1
                className={`${SERIF} text-[clamp(38px,5vw,64px)] leading-[1.05] font-semibold tracking-[-0.015em]`}>
                {t("planVisit.pageTitle")}
              </h1>
              <p className="mt-[18px] text-[17px] leading-[1.55] text-pretty text-[#3d3a35]">
                {t("planVisit.intro")}
              </p>
            </div>
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 bg-[#7B2627] px-[30px] py-[15px] font-medium text-[#FFF4DC] transition-colors hover:bg-[#5f1c1d]">
              {t("planVisit.getTickets")} <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 border-t border-[#e2d3b0] sm:grid-cols-3">
            <StatusCell label={t("planVisit.status.today")} first>
              <span
                className={`flex items-center gap-[9px] text-[17px] font-medium ${statusColor}`}>
                <span className="relative flex size-[9px]">
                  {status.open && (
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-60" />
                  )}
                  <span className="relative inline-flex size-[9px] rounded-full bg-current" />
                </span>
                {t(`planVisit.status.${status.label}`)}
              </span>
            </StatusCell>
            <StatusCell label={t("planVisit.status.exposition")}>
              <span className="text-[17px]">
                {t(`planVisit.status.${status.detail[0]}`, {
                  time: status.detail[1],
                })}
              </span>
            </StatusCell>
            <StatusCell label={t("planVisit.status.dayOff")}>
              <span className="text-[17px]">{t("planVisit.hours.monday")}</span>
            </StatusCell>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav (top = fixed navbar height) */}
      <div className="sticky top-[89px] z-10 border-b border-[#e6dfd2] bg-white/95 backdrop-blur-md">
        <div className="container flex gap-8 overflow-x-auto text-[15px] font-medium">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className="border-b-2 border-transparent py-4 whitespace-nowrap transition-colors hover:border-[#7B2627] hover:text-[#7B2627]">
              {t(`planVisit.nav.${id}`)}
            </a>
          ))}
        </div>
      </div>

      <main>
        {/* Locations */}
        <section id="locations" className="container scroll-mt-[150px] pt-20">
          <SectionTitle>{t("planVisit.nav.locations")}</SectionTitle>
          <div className="flex flex-col gap-[72px]">
            {LOCATIONS.map((loc) => {
              const title = t(`planVisit.locations.${loc.key}.title`);
              const details = [
                [
                  t("planVisit.locations.address"),
                  t(`planVisit.locations.${loc.key}.address`),
                ],
                [
                  t("planVisit.locations.contact"),
                  <a
                    href={PHONE_HREF}
                    className="transition-colors hover:text-[#7B2627]">
                    {PHONE}
                  </a>,
                ],
                [
                  t("planVisit.locations.hours"),
                  <a
                    href="#hours"
                    onClick={(e) => scrollToSection(e, "hours")}
                    className="underline! underline-offset-[3px] transition-colors hover:text-[#7B2627]">
                    {t("planVisit.locations.seeSchedule")}
                  </a>,
                ],
              ];

              return (
                <div
                  key={loc.key}
                  className="flex flex-col gap-7 lg:flex-row lg:items-stretch lg:gap-12">
                  <div className="group overflow-hidden lg:flex-[3_1_0%]">
                    <img
                      src={loc.image}
                      alt={title}
                      className="block aspect-video size-full min-h-[240px] object-cover transition-transform duration-[600ms] group-hover:scale-[1.03] lg:min-h-[340px]"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-7 py-2 lg:flex-[2_1_0%]">
                    <div>
                      <span className="text-xs font-bold tracking-[0.09em] text-[#7B2627]">
                        {t(`planVisit.locations.${loc.key}.tag`)}
                      </span>
                      <h3
                        className={`${SERIF} mt-3 text-[clamp(28px,3vw,40px)] leading-[1.15] font-medium tracking-[-0.01em] text-pretty`}>
                        {title}
                      </h3>
                    </div>

                    <div className="border-b border-[#e6dccb]">
                      {details.map(([label, value]) => (
                        <div
                          key={label}
                          className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 border-t border-[#e6dccb] py-3.5 text-base">
                          <span className="text-sm text-[#7a6f5c]">{label}</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                      <a
                        href={TICKET_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#7B2627] px-[26px] py-[13px] text-[15px] font-medium text-[#FFF4DC] transition-colors hover:bg-[#5f1c1d]">
                        {t("planVisit.getTickets")}
                      </a>
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[15px] font-medium transition-colors hover:text-[#7B2627]">
                        {t("planVisit.viewOnMap")} ↗
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Hours */}
        <section id="hours" className="container scroll-mt-[150px] pt-[104px]">
          <SectionTitle>{t("planVisit.nav.hours")}</SectionTitle>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {HOURS.map((block) => (
              <div
                key={block.title}
                className="border border-[#ebe3d3] bg-[#FBF8F2] px-7 pt-7 pb-3">
                <Eyebrow>{t(`planVisit.hours.${block.title}`)}</Eyebrow>
                <div className="mt-2">
                  {block.rows.map((row, i) => (
                    <div
                      key={row.days}
                      className={`py-[18px] ${
                        i < block.rows.length - 1 ? "border-b border-[#e6dccb]" : ""
                      }`}>
                      <div className="flex items-center gap-2.5 text-[15px] text-[#4a463f]">
                        <span>{t(`planVisit.hours.${row.days}`)}</span>
                        {row.on.includes(status.day) && (
                          <span className="bg-[#7B2627] px-[7px] py-[3px] text-[11px] font-bold tracking-[0.06em] text-white">
                            {t("planVisit.hours.todayBadge")}
                          </span>
                        )}
                      </div>
                      <div className={`${SERIF} mt-1 text-[32px] tabular-nums`}>
                        {row.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border border-[#141414] px-7 py-[18px]">
            <span className="text-[17px]">
              {t("planVisit.hours.dayOff")}:{" "}
              <strong className="font-medium">{t("planVisit.hours.monday")}</strong>
            </span>
            <span className="text-[13px] font-bold tracking-[0.08em] text-[#7B2627]">
              {t("planVisit.hours.closed")}
            </span>
          </div>
        </section>

        {/* Prices */}
        <section id="prices" className="container scroll-mt-[150px] pt-24">
          <SectionTitle>{t("planVisit.nav.prices")}</SectionTitle>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Entry tickets */}
            <div className="border border-[#ebe3d3] p-5 sm:p-7">
              <Eyebrow>{t("planVisit.prices.entry")}</Eyebrow>
              <div
                className={`${ticketGrid} mt-2.5 border-b border-[#141414] pt-3 pb-2.5 text-xs font-medium tracking-[0.06em] text-[#7a6f5c]`}>
                <span />
                <span className="text-right">{t("planVisit.prices.single")}</span>
                <span className="text-right">{t("planVisit.prices.group")}</span>
              </div>
              {TICKETS.map((ticket, i) => (
                <div
                  key={ticket.label}
                  className={`${ticketGrid} items-baseline py-4 text-base ${
                    i < TICKETS.length - 1 ? "border-b border-[#e6dccb]" : ""
                  }`}>
                  <span>{t(`planVisit.prices.${ticket.label}`)}</span>
                  <span className="text-right">
                    <Price value={ticket.single} currency={currency} />
                  </span>
                  <span className="text-right text-[#b5ad9f]">
                    {ticket.group ? (
                      <Price value={ticket.group} currency={currency} />
                    ) : (
                      "—"
                    )}
                  </span>
                </div>
              ))}
              <p className="mt-2 border-t border-[#e6dccb] pt-3.5 text-[13px] text-[#6b6b6b]">
                {t("planVisit.prices.groupNote")}
              </p>
            </div>

            {/* Guide */}
            <div className="flex flex-col border border-[#ebe3d3] p-5 sm:p-7">
              <Eyebrow>{t("planVisit.prices.guide")}</Eyebrow>
              <div className="mt-4 mb-1.5 flex flex-wrap gap-2 border-b border-[#141414] pb-4">
                {guideLanguages.map((lang) => (
                  <span
                    key={lang}
                    className="border border-[#d6cbb6] px-[11px] py-[5px] text-[13px]">
                    {lang}
                  </span>
                ))}
              </div>
              {GUIDE.map((item, i) => (
                <PriceRow key={item.label} last={i === GUIDE.length - 1}>
                  <span>{t(`planVisit.prices.${item.label}`)}</span>
                  <Price value={item.price} currency={currency} />
                </PriceRow>
              ))}
              <a
                href={PHONE_HREF}
                className="mt-auto self-start border border-[#141414] px-[22px] py-[11px] text-[15px] transition-colors hover:bg-[#141414] hover:text-white">
                {t("planVisit.prices.bookGuide")}
              </a>
            </div>

            {/* Other services */}
            <div className="border border-[#ebe3d3] p-5 sm:p-7">
              <Eyebrow>{t("planVisit.prices.other")}</Eyebrow>
              <div className="mt-1.5">
                <PriceRow>
                  <span>{t("planVisit.prices.photo")}</span>
                  <Price value={50} currency={currency} />
                </PriceRow>
                <PriceRow last>
                  <span>
                    {t("planVisit.prices.filming")}
                    <span className="mt-[5px] block text-[13px] leading-[1.4] text-[#6b6b6b]">
                      {t("planVisit.prices.filmingNote")}
                    </span>
                  </span>
                  <span className="text-right whitespace-nowrap">
                    <Price value={150} currency={currency} />
                    <span className="block text-[13px] text-[#6b6b6b]">
                      {t("planVisit.prices.perHour")}
                    </span>
                  </span>
                </PriceRow>
              </div>
            </div>

            {/* Workshop */}
            <div className="flex min-h-[220px] flex-col justify-between gap-7 bg-[#7B2627] p-5 text-[#FFF4DC] sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <Eyebrow className="text-[#F3D9A4]">
                    {t("planVisit.prices.workshop")}
                  </Eyebrow>
                  <p
                    className={`${SERIF} mt-3 text-[clamp(24px,2.4vw,30px)] leading-[1.2]`}>
                    {t("planVisit.prices.workshopTitle")}
                  </p>
                  <p className="mt-2 text-[15px] text-[#f1dcc9]">
                    {t("planVisit.prices.workshopLessons")}
                  </p>
                </div>
                <span className={`${SERIF} text-[44px] leading-none whitespace-nowrap`}>
                  50 <span className="text-[15px]">{currency}</span>
                </span>
              </div>
              <a
                href={PHONE_HREF}
                className="self-start border border-[#FFF4DC] px-[22px] py-[11px] text-[15px] transition-colors hover:bg-[#FFF4DC] hover:text-[#7B2627]">
                {t("planVisit.prices.register")}
              </a>
            </div>
          </div>
        </section>

        {/* Free entry */}
        <section id="free" className="mt-[104px] scroll-mt-[110px] bg-[#F5F2EC]">
          <div className="container grid grid-cols-1 items-start gap-x-16 gap-y-8 pt-[72px] pb-20 lg:grid-cols-3">
            <div className="lg:sticky lg:top-[150px]">
              <h2
                className={`${SERIF} text-[clamp(26px,2.8vw,36px)] leading-[1.2] font-medium text-pretty`}>
                {t("planVisit.free.title")}
              </h2>
              <p className="mt-4 text-base text-[#5a554c]">
                {t("planVisit.free.note")}
              </p>
            </div>
            <ol className="min-w-0 lg:col-span-2">
              {freeList.map((item, i) => (
                <li
                  key={item}
                  className="grid grid-cols-[44px_minmax(0,1fr)] gap-3 border-t border-[#dcd4c5] py-[15px] text-base leading-[1.45]">
                  <span className={`${SERIF} text-[15px] text-[#7B2627]`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Current events */}
        {events?.length > 0 && (
          <section className="container py-[104px]">
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="text-[clamp(32px,3.6vw,48px)] font-normal">
                {t("planVisit.nowLive")}
              </h2>
              <Link
                to="/exhibitions"
                className="text-[15px] font-medium transition-colors hover:text-[#7B2627]">
                {t("planVisit.allExhibitions")} →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {events.slice(0, 3).map((event) => (
                <Link key={event.id} to={`/exhibitions/${event.id}`}>
                  <EventCardOld event={event} />
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
