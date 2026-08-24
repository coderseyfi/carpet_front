import PageHeader from '@/components/Cards/PageHeader'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function PublicationsPage() {
  const { t } = useTranslation()

  return (
    <>
      <div className="w-full bg-white">
        <PageHeader
          title={t('publications')}
          breadcrumbs={[{ label: t('publications') }]}
        />
        <section className="px-[40px] pt-[32px]">
          <div className="grid grid-cols-4 gap-[20px] border-b border-[#111] pb-[28px]">
            <div className="flex items-center justify-between border border-[#111] px-[16px] py-[14px] font-roboto text-[15px] font-normal leading-none">
              Type<span className="text-[10px]">▼</span>
            </div>

            <div className="flex items-center justify-between border border-[#111] px-[16px] py-[14px] font-roboto text-[15px] font-normal leading-none">
              Language<span className="text-[10px]">▼</span>
            </div>

            <div className="flex items-center justify-between border border-[#111] px-[16px] py-[14px] font-roboto text-[15px] font-normal leading-none">
              Author<span className="text-[10px]">▼</span>
            </div>

            <div className="flex items-center justify-between border border-[#111] px-[16px] py-[14px] font-roboto text-[15px] font-normal leading-none">
              Year<span className="text-[10px]">▼</span>
            </div>
          </div>
        </section>

        <section className="px-[40px] pt-[36px]">
          <div className="mb-[22px] flex items-baseline justify-between">
            <div className="font-roboto text-[14px] font-normal leading-none text-[#6B6B6B]">
              36 publications
            </div>

            <div className="font-['Roboto Mono',monospace] text-[11px] font-normal leading-none text-[#9A9288]">
              sample titles — replace with the museum’s catalogue
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-[48px] border-b border-[#E2DED6]">
            <a
              href="#"
              className="flex items-stretch gap-[20px] border-t border-[#E2DED6] py-[20px]">
              <div className="flex h-[128px] w-[96px] flex-none items-end justify-center bg-[repeating-linear-gradient(135deg,#EDE9E1_0_10px,#F6F3ED_10px_20px)] p-[6px]">
                <span className="text-center font-['Roboto Mono',monospace] text-[8px] font-normal leading-[1.2] text-[#8A8378]">
                  cover image
                </span>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-[9px] font-['Roboto Mono',monospace] text-[11px] font-normal leading-none text-[#8E2B2B]">
                  Kataloq · 2024
                </div>

                <div className="mb-[8px] font-['Playfair Display',Georgia,serif] text-[19px] font-medium leading-[1.3] text-[#111] [text-wrap:pretty]">
                  Azərbaycan xalçası: Qarabağ məktəbi
                </div>

                <div className="font-roboto text-[13px] font-normal leading-[1.5] text-[#6B6B6B]">
                  Azərbaycan, İngilis · 248 səh.
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-stretch gap-[20px] border-t border-[#E2DED6] py-[20px]">
              <div className="flex h-[128px] w-[96px] flex-none items-end justify-center bg-[repeating-linear-gradient(135deg,#EDE9E1_0_10px,#F6F3ED_10px_20px)] p-[6px]">
                <span className="text-center font-['Roboto Mono',monospace] text-[8px] font-normal leading-[1.2] text-[#8A8378]">
                  cover image
                </span>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-[9px] font-['Roboto Mono',monospace] text-[11px] font-normal leading-none text-[#8E2B2B]">
                  Monoqrafiya · 2023
                </div>

                <div className="mb-[8px] font-['Playfair Display',Georgia,serif] text-[19px] font-medium leading-[1.3] text-[#111] [text-wrap:pretty]">
                  Naxışın dili: ornament və məna
                </div>

                <div className="font-roboto text-[13px] font-normal leading-[1.5] text-[#6B6B6B]">
                  Azərbaycan · 192 səh.
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-stretch gap-[20px] border-t border-[#E2DED6] py-[20px]">
              <div className="flex h-[128px] w-[96px] flex-none items-end justify-center bg-[repeating-linear-gradient(135deg,#EDE9E1_0_10px,#F6F3ED_10px_20px)] p-[6px]">
                <span className="text-center font-['Roboto Mono',monospace] text-[8px] font-normal leading-[1.2] text-[#8A8378]">
                  cover image
                </span>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-[9px] font-['Roboto Mono',monospace] text-[11px] font-normal leading-none text-[#8E2B2B]">
                  Sərgi kataloqu · 2023
                </div>

                <div className="mb-[8px] font-['Playfair Display',Georgia,serif] text-[19px] font-medium leading-[1.3] text-[#111] [text-wrap:pretty]">
                  Şuşa: itirilmiş və qaytarılmış naxışlar
                </div>

                <div className="font-roboto text-[13px] font-normal leading-[1.5] text-[#6B6B6B]">
                  Azərbaycan, İngilis · 136 səh.
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-stretch gap-[20px] border-t border-[#E2DED6] py-[20px]">
              <div className="flex h-[128px] w-[96px] flex-none items-center justify-center bg-[#FCF3E1]">
                <div className="flex h-[48px] w-[38px] flex-col justify-center gap-[5px] border-[1.5px] border-[#8E2B2B] px-[8px]">
                  <div className="h-[1.5px] bg-[#8E2B2B]" />
                  <div className="h-[1.5px] bg-[#8E2B2B]" />
                  <div className="h-[1.5px] w-[60%] bg-[#8E2B2B]" />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-[9px] font-['Roboto Mono',monospace] text-[11px] font-normal leading-none text-[#8E2B2B]">
                  Elmi toplu · 2022
                </div>

                <div className="mb-[8px] font-['Playfair Display',Georgia,serif] text-[19px] font-medium leading-[1.3] text-[#111] [text-wrap:pretty]">
                  Xalça sənəti üzrə tədqiqatlar, buraxılış IV
                </div>

                <div className="font-roboto text-[13px] font-normal leading-[1.5] text-[#6B6B6B]">
                  Azərbaycan, Rus · 210 səh.
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-stretch gap-[20px] border-t border-[#E2DED6] py-[20px]">
              <div className="flex h-[128px] w-[96px] flex-none items-end justify-center bg-[repeating-linear-gradient(135deg,#EDE9E1_0_10px,#F6F3ED_10px_20px)] p-[6px]">
                <span className="text-center font-['Roboto Mono',monospace] text-[8px] font-normal leading-[1.2] text-[#8A8378]">
                  cover image
                </span>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-[9px] font-['Roboto Mono',monospace] text-[11px] font-normal leading-none text-[#8E2B2B]">
                  Albom · 2022
                </div>

                <div className="mb-[8px] font-['Playfair Display',Georgia,serif] text-[19px] font-medium leading-[1.3] text-[#111] [text-wrap:pretty]">
                  Muzeyin kolleksiyası: seçilmiş nümunələr
                </div>

                <div className="font-roboto text-[13px] font-normal leading-[1.5] text-[#6B6B6B]">
                  İngilis · 320 səh.
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-stretch gap-[20px] border-t border-[#E2DED6] py-[20px]">
              <div className="flex h-[128px] w-[96px] flex-none items-center justify-center bg-[#FCF3E1]">
                <div className="flex h-[48px] w-[38px] flex-col justify-center gap-[5px] border-[1.5px] border-[#8E2B2B] px-[8px]">
                  <div className="h-[1.5px] bg-[#8E2B2B]" />
                  <div className="h-[1.5px] bg-[#8E2B2B]" />
                  <div className="h-[1.5px] w-[60%] bg-[#8E2B2B]" />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-[9px] font-['Roboto Mono',monospace] text-[11px] font-normal leading-none text-[#8E2B2B]">
                  Uşaqlar üçün · 2021
                </div>

                <div className="mb-[8px] font-['Playfair Display',Georgia,serif] text-[19px] font-medium leading-[1.3] text-[#111] [text-wrap:pretty]">
                  Xalça necə toxunur?
                </div>

                <div className="font-roboto text-[13px] font-normal leading-[1.5] text-[#6B6B6B]">
                  Azərbaycan · 48 səh.
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-stretch gap-[20px] border-t border-[#E2DED6] py-[20px]">
              <div className="flex h-[128px] w-[96px] flex-none items-end justify-center bg-[repeating-linear-gradient(135deg,#EDE9E1_0_10px,#F6F3ED_10px_20px)] p-[6px]">
                <span className="text-center font-['Roboto Mono',monospace] text-[8px] font-normal leading-[1.2] text-[#8A8378]">
                  cover image
                </span>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-[9px] font-['Roboto Mono',monospace] text-[11px] font-normal leading-none text-[#8E2B2B]">
                  Kataloq · 2021
                </div>

                <div className="mb-[8px] font-['Playfair Display',Georgia,serif] text-[19px] font-medium leading-[1.3] text-[#111] [text-wrap:pretty]">
                  Təbriz məktəbi: XVI–XVIII əsrlər
                </div>

                <div className="font-roboto text-[13px] font-normal leading-[1.5] text-[#6B6B6B]">
                  Azərbaycan, İngilis · 264 səh.
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-stretch gap-[20px] border-t border-[#E2DED6] py-[20px]">
              <div className="flex h-[128px] w-[96px] flex-none items-center justify-center bg-[#FCF3E1]">
                <div className="flex h-[48px] w-[38px] flex-col justify-center gap-[5px] border-[1.5px] border-[#8E2B2B] px-[8px]">
                  <div className="h-[1.5px] bg-[#8E2B2B]" />
                  <div className="h-[1.5px] bg-[#8E2B2B]" />
                  <div className="h-[1.5px] w-[60%] bg-[#8E2B2B]" />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-[9px] font-['Roboto Mono',monospace] text-[11px] font-normal leading-none text-[#8E2B2B]">
                  Monoqrafiya · 2020
                </div>

                <div className="mb-[8px] font-['Playfair Display',Georgia,serif] text-[19px] font-medium leading-[1.3] text-[#111] [text-wrap:pretty]">
                  Boyaq bitkiləri və rəng ənənəsi
                </div>

                <div className="font-roboto text-[13px] font-normal leading-[1.5] text-[#6B6B6B]">
                  Azərbaycan · 176 səh.
                </div>
              </div>
            </a>
          </div>

          <div className="flex justify-center px-0 pb-[90px] pt-[56px]">
            <a
              href="#"
              className="border border-[#111] px-[26px] py-[13px] font-roboto text-[15px] font-normal leading-none text-[#111]">
              Load more
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
