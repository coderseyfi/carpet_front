import PageHeader from '@/components/Cards/PageHeader'
import { useTranslation } from 'react-i18next'
import Gorme from '@/assets/images/accessibility/gorme.jpeg'
import Move from '@/assets/images/accessibility/move.png'

export default function AccessibilityPage() {
  const { t } = useTranslation()

  return (
    <div className="w-full bg-white">
      <PageHeader
        title={t('accessibility')}
        breadcrumbs={[{ label: t('accessibility') }]}
      />

      {/* Hero image */}
      <div
        className="flex h-[220px] w-full items-center justify-center sm:h-[280px] md:h-[360px]"
        style={{
          background:
            'repeating-linear-gradient(135deg,#EDE9E1 0 14px,#F6F3ED 14px 28px)',
        }}>
        <span className="border border-[#E2DED6] bg-white px-3 py-2 font-mono text-[11px] text-[#8A8378] sm:px-3.5 sm:py-2.5 sm:text-xs">
          wide photo — visitor in wheelchair in the permanent exposition
        </span>
      </div>

      <div className="max-w-[1740px] mx-auto px-5">
        {/* Intro */}
        <section className="flex  justify-center pb-2 pt-10  sm:pt-14  md:pt-[72px]">
          <div className="max-w-[760px] text-center">
            <h2 className="mb-4 font-serif text-[26px] font-medium leading-tight text-[#111] sm:text-[30px] md:mb-5 md:text-[34px]">
              Sərhədsiz muzey
            </h2>
            <p className="text-pretty text-[15px] leading-[1.65] text-[#333] sm:text-base">
              Azərbaycan Milli Xalça Muzeyi bütün ziyarətçilərin muzeyin daimi
              ekspozisiyası, müvəqqəti sərgi və tədbirləri ilə yaxından tanış
              olmaları üçün zəruri infrastruktura malikdir.
            </p>
          </div>
        </section>

        {/* Feature rows */}
        <section className="flex flex-col gap-12  pt-12 sm:gap-14  sm:pt-16 md:gap-16 ">
          {/* Row 1 */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
            <div className="order-1 flex  items-center justify-center  md:order-1">
              {/* <span className="border border-[#E2DED6] bg-white px-3 py-2 font-mono text-[11px] text-[#8A8378]">
                photo — ticket desk / kassa
              </span> */}

              <img className="w-full h-full" src={Move} alt="" />
            </div>
            <div className="order-2 md:order-2">
              <div className="mb-4 h-0.5 w-10 bg-[#8E2B2B] sm:mb-[18px]" />
              <h3 className="mb-3.5 font-serif text-[22px] font-medium leading-[1.25] text-[#111] sm:mb-4 sm:text-2xl md:text-[27px]">
                Əliliyi olan bütün ziyarətçilər üçün
              </h3>
              <p className="text-pretty text-sm leading-[1.7] text-[#333] sm:text-[15px]">
                I və II qrup əlillər, o cümlədən əlil uşaqlar muzeyi ödənişsiz
                ziyarət edə bilərlər. Bunun üçün şəxsin əlilliyini təsdiq edən
                sənədi kassada təqdim etmək lazımdır. I, II qrup əlillər və əlil
                uşaqlar bir ödənişsiz bələdçi biletini əldə etmək hüququna da
                malikdirlər. Əlilliyi olan şəxslər üçün fərdi və qrup
                ekskursiyalarının keçirilməsi ödənişsizdir.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
            <div className="order-2 md:order-1">
              <div className="mb-4 h-0.5 w-10 bg-[#8E2B2B] sm:mb-[18px]" />
              <h3 className="mb-3.5 font-serif text-[22px] font-medium leading-[1.25] text-[#111] sm:mb-4 sm:text-2xl md:text-[27px]">
                Hərəkət məhdudiyyəti olan ziyarətçilər üçün
              </h3>
              <p className="mb-3.5 text-pretty text-sm leading-[1.7] text-[#333] sm:text-[15px]">
                Muzeyin giriş və çıxışında pilləkən olmadığı üçün muzeyi əlil
                arabasında maneəsiz ziyarət etmək mümkündür. Giriş və çıxış
                qapıları avtomatik rele ilə təchiz olunub.
              </p>
              <p className="text-pretty text-sm leading-[1.7] text-[#333] sm:text-[15px]">
                Muzeyin foyesində əlil arabası ilə hərəkət edən ziyarətçilər
                üçün lift mövcuddur. Liftin qapılarının eni 200 santimetr,
                uzunluğu – 290 santimetrdir. Çağırış düyməsi əyləşmiş insanın
                əlləri səviyyəsindədir. Əlilliyi olan ziyarətçilər üçün nəzərdə
                tutulmuş tualetlər muzeyin birinci mərtəbəsində yerləşdirilib.
              </p>
            </div>
            <div
              className="order-1 flex h-[240px] items-center justify-center sm:h-[300px] md:order-2 md:h-[340px]"
              style={{
                background:
                  'repeating-linear-gradient(135deg,#EDE9E1 0 14px,#F6F3ED 14px 28px)',
              }}>
              <span className="border border-[#E2DED6] bg-white px-3 py-2 font-mono text-[11px] text-[#8A8378]">
                photo — step-free entrance / lift
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
            <div
              className="order-1 flex h-[240px] items-center justify-center sm:h-[300px] md:h-[340px]"
              style={{
                background:
                  'repeating-linear-gradient(135deg,#EDE9E1 0 14px,#F6F3ED 14px 28px)',
              }}>
              <span className="border border-[#E2DED6] bg-white px-3 py-2 font-mono text-[11px] text-[#8A8378]">
                photo — tour with sign-language interpreter
              </span>
            </div>
            <div className="order-2">
              <div className="mb-4 h-0.5 w-10 bg-[#8E2B2B] sm:mb-[18px]" />
              <h3 className="mb-3.5 font-serif text-[22px] font-medium leading-[1.25] text-[#111] sm:mb-4 sm:text-2xl md:text-[27px]">
                Eşitmə qabiliyyətini itirmiş və zəif olan ziyarətçilər üçün
              </h3>
              <p className="mb-3.5 text-pretty text-sm leading-[1.7] text-[#333] sm:text-[15px]">
                Böyüklər və uşaqlar üçün ekskursiyalar Azərbaycan dilində
                surdotərcümə ilə müşayiət olunur.
              </p>
              <p className="text-pretty text-sm leading-[1.7] text-[#333] sm:text-[15px]">
                Ekskursiyalar üçün sifarişlər{' '}
                <a
                  href="tel:+994124972016"
                  className="text-[#8E2B2B] underline underline-offset-[3px]">
                  +994 12 497 20 16
                </a>{' '}
                telefon nömrəsi və{' '}
                <a
                  href="mailto:mail@azcarpetmuseum.az"
                  className="text-[#8E2B2B] underline underline-offset-[3px]">
                  mail@azcarpetmuseum.az
                </a>{' '}
                elektron ünvanı vasitəsilə qəbul edilir.
              </p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 items-center gap-8 pb-12 md:grid-cols-2 md:gap-14 md:pb-16">
            <div className="order-2 md:order-1">
              <div className="mb-4 h-0.5 w-10 bg-[#8E2B2B] sm:mb-[18px]" />
              <h3 className="mb-3.5 font-serif text-[22px] font-medium leading-[1.25] text-[#111] sm:mb-4 sm:text-2xl md:text-[27px]">
                Görmə qabiliyyətini itirmiş və zəif olan ziyarətçilər üçün
              </h3>
              <p className="text-pretty text-sm leading-[1.7] text-[#333] sm:text-[15px]">
                Belə ziyarətçilər üçün muzeydə daimi ekspozisiya üzrə
                ekskursiyalar keçirilir və burada taktil baxış üçün materiallar
                təqdim edilir. Taktil maketləri (kiçildilmiş xalça fraqmentləri)
                Azərbaycan və ingilis dillərində Brayl şrifti ilə yazılmış
                mətnlər müşayiət edir.
              </p>
            </div>
            <div className="order-1 flex  items-center justify-center  md:order-1">
              {/* <span className="border border-[#E2DED6] bg-white px-3 py-2 font-mono text-[11px] text-[#8A8378]">
                photo — ticket desk / kassa
              </span> */}

              <img className="w-full h-full" src={Gorme} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
