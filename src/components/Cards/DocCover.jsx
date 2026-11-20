import React, { useState } from "react";

/**
 * Document cover thumbnail. Falls back to a PDF/file placeholder when
 * `cover_image` is missing or fails to load.
 * @param {{ cover?: string|null, title?: string, file?: string|null }} props
 */
export default function DocCover({ cover, title, file }) {
  const [broken, setBroken] = useState(false);

  if (cover && !broken) {
    return (
      <div className="h-[128px] w-[96px] flex-none overflow-hidden bg-[#FCF3E1]">
        <img
          src={cover}
          alt={title}
          loading="lazy"
          onError={() => setBroken(true)}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  const isPdf = !file || /\.pdf(\?|#|$)/i.test(file);

  return (
    <div
      className="flex h-[128px] w-[96px] flex-none flex-col items-center justify-center gap-2 border border-[#E9DCC0] bg-[#FCF3E1]"
      aria-label={title}>
      <svg
        width="40"
        height="48"
        viewBox="0 0 40 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <path
          d="M4 2h22l10 10v32a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
          fill="#fff"
          stroke="#8E2B2B"
          strokeWidth="2"
        />
        <path d="M26 2v10h10" stroke="#8E2B2B" strokeWidth="2" fill="none" />
        <rect x="0" y="24" width="30" height="13" rx="2" fill="#8E2B2B" />
        <text
          x="15"
          y="33.5"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="8.5"
          fontWeight="700"
          fill="#fff">
          {isPdf ? "PDF" : "FILE"}
        </text>
      </svg>
    </div>
  );
}
