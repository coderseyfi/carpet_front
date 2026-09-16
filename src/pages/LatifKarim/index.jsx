import PageHeader from "@/components/Cards/PageHeader";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LatifKarimovPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white">
      <PageHeader
        title={t("latif.title")}
        breadcrumbs={[
          {
            label: t("latif.title"),
          },
        ]}
      />

      <section className="grid grid-cols-[1fr_1.1fr] bg-[#FCF3E1]">
        <div className="flex flex-col justify-center pb-[76px] pl-10 pr-14 pt-2">
          <p className="m-0 mb-[22px] max-w-[540px] text-pretty font-sans text-[17px] font-normal leading-[1.65] text-[#2B2B2B]">
            Lətif Kərimov – XX əsr Azərbaycan dekorativ-tətbiqi sənətinin,
            xüsusilə də xalça sənətinin ən görkəmli nümayəndələrindən biri,
            milli ornamentin tədqiqatçısı və bilicisi, xalçaçı və texnoloqdur.
            Onun yaradıcılığı ənənə haqqında dərin biliklərlə yeni bədii
            həllərin axtarışını birləşdirərək Azərbaycan xalça sənətinin
            inkişafında mühüm mərhələ olmuşdur.
          </p>
          <div className="flex max-w-[540px] flex-wrap gap-10 border-t border-[#8E2B2B]/25 pt-5">
            <div>
              <div className="font-serif text-2xl font-bold leading-[1.2] text-[#8E2B2B]">
                150+
              </div>
              <div className="font-sans text-[13px] font-normal leading-[1.4] text-[#5A5A5A]">
                bərpa edilmiş xalça eskizi
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold leading-[1.2] text-[#8E2B2B]">
                1300
              </div>
              <div className="font-sans text-[13px] font-normal leading-[1.4] text-[#5A5A5A]">
                ornament cədvəli
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold leading-[1.2] text-[#8E2B2B]">
                1961
              </div>
              <div className="font-sans text-[13px] font-normal leading-[1.4] text-[#5A5A5A]">
                “Azərbaycan xalçası”, I cild
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-[520px] items-center justify-center bg-[repeating-linear-gradient(135deg,#E6E1D7_0_14px,#EFEBE3_14px_28px)]">
          <span className="border border-[#E2DED6] bg-[#FCF3E1] px-[14px] py-[9px] font-mono text-xs font-normal leading-none text-[#7E776C]">
            portret — Lətif Kərimov, arxiv fotosu
          </span>
        </div>
      </section>

      <nav className="flex flex-wrap gap-2.5 border-b border-[#E2DED6] px-10 py-7 font-sans text-sm font-normal leading-none">
        <a href="#ressam" className="border border-[#111] px-4 py-2.5">
          Rəssam
        </a>
        <a
          href="#naxis"
          className="border border-[#E2DED6] px-4 py-2.5 text-[#444]">
          Naxış və kompozisiya
        </a>
        <a
          href="#muellif"
          className="border border-[#E2DED6] px-4 py-2.5 text-[#444]">
          Müəllif əsəri kimi xalça
        </a>
        <a
          href="#sergiler"
          className="border border-[#E2DED6] px-4 py-2.5 text-[#444]">
          Fərdi sərgilər
        </a>
        <a href="#alim" className="border border-[#111] px-4 py-2.5">
          Alim
        </a>
        <a
          href="#azerbaycan-xalcasi"
          className="border border-[#E2DED6] px-4 py-2.5 text-[#444]">
          “Azərbaycan xalçası”
        </a>
        <a
          href="#muellim"
          className="border border-[#E2DED6] px-4 py-2.5 text-[#444]">
          Müəllim və ustad
        </a>
        <a
          href="#irs"
          className="border border-[#E2DED6] px-4 py-2.5 text-[#444]">
          Elmi irs
        </a>
        <a href="#muzey" className="border border-[#111] px-4 py-2.5">
          Muzey
        </a>
      </nav>

      <section id="ressam" className="px-10 pt-[72px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-[14px] font-mono text-xs font-normal leading-none tracking-[.12em] text-[#8E2B2B]">
            I HİSSƏ
          </div>
          <h2 className="m-0 mb-10 font-serif text-[40px] font-medium leading-[1.15] text-[#111]">
            Lətif Kərimov – rəssam
          </h2>

          <h3 className="m-0 mb-4 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
            Rəssam və ənənə
          </h3>
          <div className="flex max-w-[760px] flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            <p className="m-0 text-pretty">
              L.Kərimovun bədii təfəkkürü bilavasitə xalça sənəti mühitində
              formalaşmışdır. O, xalçaçılıqla bağlı ilk bilikləri xalça ustası
              olan anası Telli xanımdan öyrənmişdir. 1922-ci ildə Mirzə Ələkbər
              Hüseynzadənin emalatxanasında peşəkar bacarıqlarını təkmilləşdirən
              L.Kərimov, eyni zamanda xalça eskizlərinin hazırlanması sənətinə
              yiyələnməyə başlamışdır. Növbəti il isə o, məşhur rəssam Bəhram
              Təbrizinin (Hüseyn Tairzadə Təbrizi) tələbəsi olmuşdur.
            </p>
            <p className="m-0 text-pretty">
              1930-cu ildən etibarən L. Kərimov “Azərxalçabirliyi”ndə
              rəssam-təlimatçı kimi fəaliyyət göstərmişdir.
            </p>
            <p className="m-0 text-pretty">
              L. Kərimov üçün ənənə dəyişməz hazır formalar toplusu deyildi. O,
              ənənəni öyrənilə, qorunub saxlanıla və yaradıcı şəkildə inkişaf
              etdirilə bilən canlı bədii dil kimi qəbul edirdi. Məhz milli irsin
              dərindən öyrənilməsinin fərdi bədii yozumla birləşdirilməsi onun
              yaradıcılığının səciyyəvi xüsusiyyətlərindən birinə çevrilmişdir.
            </p>
          </div>
        </div>
      </section>

      <section id="naxis" className="px-10 pt-16">
        <div className="mx-auto grid max-w-[1080px] grid-cols-2 items-center gap-14">
          <div>
            <h3 className="m-0 mb-4 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
              Azərbaycan xalçalarında naxış və kompozisiya
            </h3>
            <div className="flex flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
              <p className="m-0 text-pretty">
                Zəngin materiallar toplayaraq onu sistemləşdirən rəssam müxtəlif
                bölgələrə məxsus xalçaları, onların kompozisiya
                xüsusiyyətlərini, ornament motivlərini, təyinatını, icra
                texnikalarını, bədii və üslubi xüsusiyyətlərini tədqiq etmişdir.
              </p>
              <p className="m-0 text-pretty">
                Bu tədqiqatlar əsasında o, Qarabağ, Gəncə-Qazax, Quba-Şirvan və
                Təbriz tipli xalçaların, eləcə də onların müxtəlif növlərinin
                150-dən çox ənənəvi xalça eskizini bərpa etmişdir. Həmin
                nümunələr arasında artıq unudulmuş və ya itirilmiş ornamentlər
                də olmuşdur.
              </p>
              <p className="m-0 text-pretty">
                L.Kərimovun işi ənənəvi ornamentlərin qorunub saxlanılması ilə
                məhdudlaşmırdı. O, tarixi motivləri yenidən mənalandırır,
                onların miqyasını, ritmini və kompozisiyadakı qarşılıqlı
                əlaqələrini dəyişərək yeni bədii həllər yaradırdı.
              </p>
              <p className="m-0 text-pretty">
                Ornament yaratmaq sənətinə dərindən yiyələnməsi və ornamentə
                xüsusi həssaslıqla yanaşması L.Kərimova ənənəvi motivləri
                müstəqil bədii ifadə vasitəsinə çevirməyə imkan verirdi.
              </p>
            </div>
          </div>
          <div className="flex h-[420px] items-center justify-center bg-[repeating-linear-gradient(135deg,#EDE9E1_0_14px,#F6F3ED_14px_28px)]">
            <span className="border border-[#E2DED6] bg-white px-3 py-2 font-mono text-[11px] font-normal leading-none text-[#8A8378]">
              foto — ornament eskizi / xalça fraqmenti
            </span>
          </div>
        </div>
      </section>

      <section className="mt-[72px] flex justify-center bg-[#FCF3E1] px-10 py-16">
        <div className="max-w-[900px] text-center">
          <p className="m-0 mb-5 text-pretty font-serif text-[28px] font-medium leading-[1.5] text-[#111]">
            “Rəssam Lətif Kərimovun yaradıcılığı təxəyyül zənginliyi, Azərbaycan
            xalq sənətinin çoxəsrlik ənənəsinin sərbəst və maraqlı yozumu,
            yüksək zövqü ilə heyranlıq doğurur. Onun qrafik mədəniyyəti –
            ornamentlərdən bədii istifadə ustalığı da olduqca yüksəkdir.”
          </p>
          <div className="font-sans text-[13px] font-normal leading-[1.5] text-[#8E2B2B]">
            SSRİ Xalq rəssamı Dementiy Şmarinov
          </div>
        </div>
      </section>

      <section id="muellif" className="px-10 pt-[72px]">
        <div className="mx-auto max-w-[1080px]">
          <h3 className="m-0 mb-5 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
            Xalça müəllif əsəri kimi
          </h3>
          <div className="flex max-w-[760px] flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            <p className="m-0 text-pretty">
              1920-ci illərin sonlarından etibarən, uzunmüddətli axtarış və
              təcrübələrdən sonra L.Kərimov öz müəllif əsərlərini yaratmağa
              başlamışdır. Onun ornamental, süjetli və portret xalçalardan
              ibarət yaradıcılığında xalça tədricən ənənəvi nümunələrin
              təkrarlanması çərçivəsindən çıxaraq müəllifin fərdi təxəyyülünün
              ifadə məkanına çevrilmişdir. Rəssam kompozisiya, ornament, ritm və
              rəngə müstəqil ifadə vasitələri kimi müraciət etmişdir.
            </p>
            <p className="m-0 text-pretty">
              L.Kərimov yaradıcılığının digər səciyyəvi xüsusiyyəti bədii
              təfəkkürü xalçaçılıq haqqında dərin praktiki biliklərlə
              birləşdirməsi idi. Onun üçün eskiz toxunacaq əsərdən ayrı mövcud
              deyildi: bədii ideya xalçanın strukturu və texnikanın imkanları
              nəzərə alınmaqla formalaşırdı.
            </p>
            <p className="m-0 text-pretty">
              Beləliklə, qrafika, ornament və xalçaçılığın özünəməxsus dilinə
              eyni dərəcədə yiyələnmiş xüsusi tipli xalça rəssamı yetişmişdi.
            </p>
            <p className="m-0 text-pretty">
              Ornamental kompozisiyalarla yanaşı, L.Kərimov portret və tematik
              xalçalara da müraciət edir, süjetli xalça ənənəsini yaşatmaqla
              yanaşı, süjet və obrazların yeni formada təfsirini təklif
              etmişdir.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-7">
            <div className="flex flex-col">
              <div className="mb-[14px] flex h-80 items-center justify-center bg-[repeating-linear-gradient(135deg,#EDE9E1_0_14px,#F6F3ED_14px_28px)]">
                <span className="border border-[#E2DED6] bg-white px-3 py-2 font-mono text-[11px] font-normal leading-none text-[#8A8378]">
                  xalça — “Firdovsi”, 1937
                </span>
              </div>
              <p className="m-0 text-pretty font-sans text-[15px] font-normal leading-[1.7] text-[#333]">
                Onun ən məşhur əsərlərindən biri 1937-ci ildə Parisdə keçirilən
                Ümumdünya sərgisində nümayiş etdirilən “Firdovsi” xalçası
                olmuşdur.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-[14px] flex h-80 items-center justify-center bg-[repeating-linear-gradient(135deg,#EDE9E1_0_14px,#F6F3ED_14px_28px)]">
                <span className="border border-[#E2DED6] bg-white px-3 py-2 font-mono text-[11px] font-normal leading-none text-[#8A8378]">
                  xalça — Nizami silsiləsi, 1940
                </span>
              </div>
              <p className="m-0 text-pretty font-sans text-[15px] font-normal leading-[1.7] text-[#333]">
                Sonrakı illərdə rəssam görkəmli şairlərə, yazıçılara, alimlərə,
                bəstəkarlara, kosmonavtlara, eləcə də digər tarixi şəxsiyyətlərə
                və müasirlərinə həsr olunmuş süjetli xalçalar yaratmışdır. Onlar
                arasında 1940-cı ildə Azərbaycanın aparıcı rəssamları ilə birgə
                XII əsrin böyük Azərbaycan şairi və mütəfəkkiri Nizami
                Gəncəvinin beş ölməz poemasının motivləri əsasında yaratdığı
                xalça silsiləsi xüsusi yer tutur. Bu əsərlər 1946-cı ildə
                Moskvada Şərq Mədəniyyətləri Muzeyində keçirilən Ümumittifaq
                Xalq Tətbiqi Sənəti Sərgisində nümayiş etdirilmişdir.
              </p>
            </div>
          </div>

          <p className="mx-0 mb-0 mt-8 max-w-[760px] text-pretty font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            L. Kərimovun süjetli əsərləri onun ənənəvi ornamental sistemi nəqli
            və obrazlı məzmunla birləşdirərək xalçanın ifadə imkanlarını
            genişləndirmək istəyini əks etdirir.
          </p>
        </div>
      </section>

      <section className="px-10 pt-16">
        <div className="mx-auto max-w-[1080px]">
          <h3 className="m-0 mb-5 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
            Fərqli incəsənət sahələrində naxış
          </h3>
          <div className="flex max-w-[760px] flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            <p className="m-0 text-pretty">
              Lətif Kərimovun yaradıcılıq diapazonu xalçalarla məhdudlaşmırdı.
              Rəssam memarlıq tikililərinin dekorativ-ornamental tərtibatı ilə
              məşğul olur, qiymətli metallardan hazırlanmış ayrı-ayrı sənət
              əsərləri üçün eskizlər yaratmış, nəşrlərin qrafik tərtibatı
              üzərində işləmişdir.
            </p>
            <p className="m-0 text-pretty">
              1937–1939-cu illərdə L.Kərimov Moskvada keçirilən Ümumittifaq Kənd
              Təsərrüfatı Sərgisində Azərbaycan SSR pavilyonunun tərtibatında
              iştirak etmişdir. Onun ornamental kompozisiyaları pavilyonun
              memarlıq həllinə üzvi şəkildə daxil edilmişdir.
            </p>
            <p className="m-0 text-pretty">
              1940-cı ildə rəssam Bakıda Nizami adına Azərbaycan Ədəbiyyatı
              Muzeyinin tərtibatında iştirak etmişdir.
            </p>
            <p className="m-0 text-pretty">
              Bu layihələr göstərir ki, L.Kərimovun ornamental təfəkkürü xalça
              sənətinin hüdudlarından xeyli kənara çıxırdı. Ornament onun üçün
              memarlıq, qrafika və dekorativ sənətlə qarşılıqlı əlaqədə olan
              universal bədii dilə çevrilmişdi.
            </p>
          </div>
        </div>
      </section>

      <section id="sergiler" className="px-10 pt-16">
        <div className="mx-auto max-w-[1080px]">
          <h3 className="m-0 mb-5 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
            Fərdi sərgilər
          </h3>
          <p className="mx-0 mb-7 mt-0 max-w-[760px] text-pretty font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            Lətif Kərimovun yaradıcılığı respublika, ümumittifaq və beynəlxalq
            sərgilərdə iştirakı sayəsində daha çox tanınmışdır.
          </p>
          <div className="flex flex-col">
            <div className="grid grid-cols-[120px_1fr] gap-8 border-t border-[#E2DED6] py-5">
              <div className="font-serif text-[22px] font-bold leading-[1.2] text-[#8E2B2B]">
                1954
              </div>
              <p className="m-0 max-w-[820px] text-pretty font-sans text-base font-normal leading-[1.7] text-[#2B2B2B]">
                Moskvada onun sərgisi keçirilmiş və bu, sovet dekorativ sənəti
                tarixində ilk fərdi sərgi olmuşdur. Sərgidə rəssamın 350-dən çox
                əsəri nümayiş etdirilmişdir.
              </p>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-8 border-y border-[#E2DED6] py-5">
              <div className="font-serif text-[22px] font-bold leading-[1.2] text-[#8E2B2B]">
                1976–1978
              </div>
              <p className="m-0 max-w-[820px] text-pretty font-sans text-base font-normal leading-[1.7] text-[#2B2B2B]">
                Bakıda 60 illik yubileyi münasibətilə L. Kərimovun fərdi sərgisi
                keçirilmiş, 1978-ci ildə isə bu sərgi Tbilisidə təqdim
                olunmuşdur.
              </p>
            </div>
          </div>
          <p className="mx-0 mb-0 mt-7 max-w-[760px] text-pretty font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            L.Kərimovun sərgi fəaliyyəti onun yaradıcılığının nə qədər
            genişmiqyaslı olduğunu göstərir. Rəssamın yaradıcılığı dekorativ
            sənətin müxtəlif sahələrini əhatə etməklə yanaşı, onun bədii dilinin
            əsasını təşkil edən Azərbaycan xalçası və milli ornamentlə üzvi
            əlaqəsini də qoruyub saxlamışdır.
          </p>
        </div>
      </section>

      <section className="px-10 pt-16">
        <div className="mx-auto max-w-[1080px]">
          <h3 className="m-0 mb-5 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
            Bədii irs
          </h3>
          <div className="flex max-w-[760px] flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            <p className="m-0 text-pretty">
              Lətif Kərimovun bədii irsi bir-biri ilə əlaqəli üç əsas
              başlanğıcın — ənənə, tədqiqat və yaradıcı novatorluğun vəhdətindən
              ibarətdir.
            </p>
            <p className="m-0 text-pretty">
              O, tarixi ornamentləri öyrənmiş və bərpa etmiş, öz
              kompozisiyalarını yaratmış, süjetli və portret xalçası janrlarını
              inkişaf etdirmiş, eyni zamanda ənənəvi ornamentin tətbiq dairəsini
              genişləndirmişdir.
            </p>
            <p className="m-0 text-pretty">
              Onun yaradıcılığı milli bədii ənənənin tarixi əsaslarını qorumaqla
              yanaşı, bu ənənənin yeni müəllif yaradıcılığının mənbəyinə necə
              çevrilə biləcəyini göstərir.
            </p>
            <p className="m-0 text-pretty">
              Lətif Kərimovun Azərbaycan xalça sənəti tarixində xüsusi yeri də
              məhz bununla müəyyən olunur. O, yalnız ənənəni davam etdirməmiş,
              həm də onun bədii cəhətdən fərqli dərk edilməsi üçün yeni
              yanaşmalar təklif etmişdir.
            </p>
          </div>
        </div>
      </section>

      <section id="alim" className="mt-20 bg-[#F5F2EC] px-10 py-[72px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-[14px] font-mono text-xs font-normal leading-none tracking-[.12em] text-[#8E2B2B]">
            II HİSSƏ
          </div>
          <h2 className="m-0 mb-9 font-serif text-[40px] font-medium leading-[1.15] text-[#111]">
            Lətif Kərimovun elmi irsi
          </h2>
          <div className="flex max-w-[820px] flex-col gap-4 font-sans text-[17px] font-normal leading-[1.75] text-[#2B2B2B]">
            <p className="m-0 text-pretty">
              Lətif Kərimovun elmi irsi Azərbaycan xalça sənətinin öyrənilməsi
              tarixinin ən mühüm səhifələrindən birini təşkil edir. Uzun illər
              apardığı tədqiqatlar ona zəngin material toplamaq və
              sistemləşdirməklə yanaşı, xalçaların, ornamentlərin və ənənəvi
              dekorativ-tətbiqi sənətin öyrənilməsinə kompleks elmi yanaşma
              formalaşdırmağa imkan vermişdir.
            </p>
            <p className="m-0 text-pretty">
              L.Kərimov rəssam, tədqiqatçı, ornament ustası və xalq sənətinin
              dərin bilicisi kimi çoxşaxəli fəaliyyət göstərmişdir. Bədii
              təcrübə ilə elmi təhlilin vəhdəti onun tədqiqat metodunun əsasını
              təşkil etmişdir. L.Kərimov ornamentləri araşdırarkən onların
              mənşəyi, quruluşu, semantik məzmunu, kompozisiya xüsusiyyətləri və
              ənənə ilə əlaqəsi kimi məsələlərə xüsusi diqqət yetirmişdir.
            </p>
          </div>
          <div className="mt-9 max-w-[820px] border-t border-[#8E2B2B]/25 pt-7">
            <p className="m-0 mb-3 text-pretty font-serif text-2xl font-medium leading-[1.5] text-[#111]">
              “Azərbaycan xalqının bədii mədəniyyətinin geniş sahələrindən biri
              olan xalçalardan və ornamentlərdən söhbət düşəndə, istər-istəməz
              Lətif Kərimovu xatırlayırıq…”
            </p>
            <div className="font-sans text-[13px] font-normal leading-[1.6] text-[#8E2B2B]">
              Əbdülvahab Salamzadə,
              <br />
              Azərbaycan SSR Elmlər Akademiyasının müxbir üzvü, sənətşünaslıq
              üzrə elmlər doktoru, professor
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 pt-[72px]">
        <div className="mx-auto max-w-[1080px]">
          <h3 className="m-0 mb-5 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
            Xalq sənətinin tədqiqatçısı
          </h3>
          <div className="flex max-w-[760px] flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            <p className="m-0 text-pretty">
              Hələ 1930-cu illərin əvvəllərindən Lətif Kərimov müxtəlif xalq
              sənəti növlərinə müraciət edərək ornamental yaradıcılıq
              nümunələrini toplamağa və öyrənməyə başlamışdır.
            </p>
            <p className="m-0 text-pretty">
              Onun tədqiqatlarının mövzusunu memarlıq, toxuculuq, tikmə,
              keramika, dulusçuluq, ağac və daş üzərində oyma, metal işləmə və
              zərgərlik kimi sənət növlərində istifadə olunan ornamentlər təşkil
              edirdi. Bu L.Kərimova xalça sənətinə xalqın vahid bədii
              mədəniyyətinin bir hissəsi kimi yanaşmağa imkan verirdi.
            </p>
            <p className="m-0 text-pretty">
              L.Kərimov ornamenti yalnız dekorativ element kimi qəbul etmir,
              onun mənşəyini, məzmununu, formasını, quruluş prinsiplərini
              araşdırırdı. Tədqiqatçı ornamentin özünəməxsus “əlifbasının” –
              kompozisiyanı təşkil edən ayrı-ayrı təsvirlərin, motivlərin və
              naxışların öyrənilməsinə xüsusi əhəmiyyət verirdi.
            </p>
          </div>
          <div className="mt-8 max-w-[760px] border-l-2 border-[#8E2B2B] pl-6">
            <p className="m-0 mb-2.5 text-pretty font-serif text-[21px] font-medium leading-[1.55] text-[#111]">
              “Ornamenti dərindən dərk etməyin əsas şərti onun motiv və
              elementlərinin mənşəyini, məzmununu və formasını öyrənməkdir…”
            </p>
            <div className="font-sans text-[13px] font-normal leading-[1.5] text-[#8E2B2B]">
              Lətif Kərimov, Azərbaycanın Xalq rəssamı
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 pt-16">
        <div className="mx-auto grid max-w-[1080px] grid-cols-2 items-center gap-14">
          <div className="flex h-[400px] items-center justify-center bg-[repeating-linear-gradient(135deg,#EDE9E1_0_14px,#F6F3ED_14px_28px)]">
            <span className="border border-[#E2DED6] bg-white px-3 py-2 font-mono text-[11px] font-normal leading-none text-[#8A8378]">
              foto — xalça məktəblərinin xəritəsi / cədvəl
            </span>
          </div>
          <div>
            <h3 className="m-0 mb-4 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
              Xalçanın elmi dili
            </h3>
            <div className="flex flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
              <p className="m-0 text-pretty">
                L.Kərimovun elmi fəaliyyətində Azərbaycan xalçasının müstəqil
                bədii hadisə kimi öyrənilməsi xüsusi yer tutur.
              </p>
              <p className="m-0 text-pretty">
                O, xalçaların bədii və texniki xüsusiyyətlərini, ornament
                sistemini, rəng həllini, kompozisiya quruluşunu və regional
                özünəməxsusluqlarını geniş şəkildə araşdırmışdır. Apardığı
                uzunmüddətli tədqiqatlar nəticəsində L.Kərimov Azərbaycan
                xalçalarının 4 əsas növünü müəyyənləşdirmişdir: Quba–Şirvan,
                Gəncə–Qazax, Qarabağ və Təbriz. Bu növlərin hər biri özünəməxsus
                bədii xüsusiyyətləri ilə seçilən ayrı-ayrı qruplara bölünmüşdür.
              </p>
              <p className="m-0 text-pretty">
                L.Kərimovun bu təsnifatı Azərbaycan xalça sənətinin sistemli
                şəkildə öyrənilməsi və onun regional xüsusiyyətlərinin elmi
                əsaslarla müəyyənləşdirilməsi baxımından mühüm əhəmiyyət
                daşıyır.
              </p>
            </div>
            <div className="mt-6 border-l-2 border-[#8E2B2B] pl-6">
              <p className="m-0 mb-2.5 font-serif text-[21px] font-medium leading-[1.55] text-[#111]">
                “Kitabda işlənib hazırlanmış təsnifat sxemi mühüm bir kəşfdir.”
              </p>
              <div className="font-sans text-[13px] font-normal leading-[1.5] text-[#8E2B2B]">
                Məmmədağa Tərlanov, sənətşünaslıq namizədi, professor
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="azerbaycan-xalcasi" className="px-10 pt-16">
        <div className="mx-auto max-w-[1080px]">
          <h3 className="m-0 mb-5 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
            “Azərbaycan xalçası”
          </h3>
          <div className="flex max-w-[760px] flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            <p className="m-0 text-pretty">
              Lətif Kərimovun uzun illər davam edən elmi-tədqiqat fəaliyyətinin
              başlıca nəticəsi fundamental “Azərbaycan xalçası” əsəri olmuşdur.
              Bu tədqiqatda o, Azərbaycan xalça sənətinin tarixi və inkişaf
              mərhələləri, əsas bədii istiqamətləri, ornamental motivləri və
              kompozisiya prinsipləri haqqında sistemləşdirilmiş məlumatlar
              təqdim etmişdir.
            </p>
            <p className="m-0 text-pretty">
              Əsərdə L.Kərimov tərəfindən hazırlanmış və milli xalça
              ornamentinin çoxsaylı motiv və elementlərinin toplandığı,
              sistemləşdirildiyi cədvəllər xüsusi əhəmiyyət kəsb edir. 1300
              cədvəldə təqdim olunan ornamentlər bitki, heyvan, həndəsi, məişət
              və digər əsas qruplara bölünmüşdür.
            </p>
            <p className="m-0 text-pretty">
              Tədqiqatçı yalnız mövcud nümunələri qeydə almaqla kifayətlənməmiş,
              həmçinin onların kompozisiya quruluşlarını təhlil etmiş,
              ornamental sistemin xüsusiyyətlərini müəyyənləşdirmiş, qədim
              xalçaların zamanla dəyişmiş və ya unudulmuş elementlərinin
              bərpasına mühüm töhfə vermişdir.
            </p>
            <p className="m-0 text-pretty">
              Əsərin 1961-ci ildə nəşr olunan ilk cildi mütəxəssislər arasında
              geniş əks-səda doğurmuşdur. Burada Azərbaycan dekorativ sənətinin
              zəngin materialı əsasında sistemləşdirilmiş minlərlə ornamental
              motiv və kompozisiya elementi təqdim edilmişdir.
            </p>
          </div>
          <div className="mt-8 max-w-[760px] border-l-2 border-[#8E2B2B] pl-6">
            <p className="m-0 mb-2.5 text-pretty font-serif text-[21px] font-medium leading-[1.55] text-[#111]">
              “Sizin kitabınız bizim muzeyin Bibliyasına çevrilib. O, macar
              tətbiqi sənət mütəxəssislərimizin əllərindən düşmür…”
            </p>
            <div className="font-sans text-[13px] font-normal leading-[1.5] text-[#8E2B2B]">
              Karol Qomboş, Macarıstan Dekorativ və Tətbiqi Sənət Muzeyinin
              direktoru
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 pt-16">
        <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-14">
          <div>
            <h3 className="m-0 mb-4 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
              Ornament bir sistem kimi
            </h3>
            <div className="flex flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
              <p className="m-0 text-pretty">
                Lətif Kərimov üçün xalça sənətinin dərindən öyrənilməsi
                ornamentin mahiyyətinin və quruluşunun hərtərəfli dərk edilməsi
                ilə mümkün idi. O, ornamentə hər bir motivin müəyyən mənşəyə,
                formaya və məzmuna, eləcə də kompozisiya daxilində özünəməxsus
                funksiyaya və mövqeyə malik bütöv bir sistem kimi yanaşırdı. Bu
                metod ornamentin yalnız estetik xüsusiyyətlərinin deyil, onun
                tarixi və etnoqrafik əsaslarının da araşdırılmasını zəruri edir,
                beləliklə, bədii təhlili tarixi-etnoqrafik tədqiqatla üzvi
                şəkildə əlaqələndirirdi.
              </p>
              <p className="m-0 text-pretty">
                L.Kərimov milli ornamentin səciyyəvi xüsusiyyətlərinin qorunub
                saxlanılmasını mühüm şərt hesab etməklə yanaşı, onun
                ənənələrinin yaradıcı şəkildə inkişaf etdirilməsinin vacibliyini
                də vurğulayırdı.
              </p>
            </div>
            <div className="mt-6 border-l-2 border-[#8E2B2B] pl-6">
              <p className="m-0 mb-2.5 text-pretty font-serif text-[21px] font-medium leading-[1.55] text-[#111]">
                “Milli ornament xalq tərəfindən yaradılmış özünəməxsus üsluba
                malikdir. Biz isə xalqın şagirdləri olaraq onun ən yaxşı
                ənənələrini qoruyub saxlamalı və üslubun yeni elementlərini
                yaratmalıyıq…”
              </p>
              <div className="font-sans text-[13px] font-normal leading-[1.5] text-[#8E2B2B]">
                Lətif Kərimov, Azərbaycanın Xalq rəssamı
              </div>
            </div>
          </div>
          <div>
            <h3 className="m-0 mb-4 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
              Xalça və onun mənşəyi
            </h3>
            <div className="flex flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
              <p className="m-0 text-pretty">
                L.Kərimovun elmi-tədqiqat fəaliyyətinin mühüm istiqamətlərindən
                biri xalçaların bədii və regional mənsubiyyətinin
                müəyyənləşdirilməsi olmuşdur.
              </p>
              <p className="m-0 text-pretty">
                Onun araşdırmaları muzey kolleksiyalarında uzun müddət Şərq,
                İran və ya Qafqazla əlaqəli geniş coğrafi anlayışlar
                çərçivəsində qruplaşdırılan xalçaların daha dəqiq elmi
                təsnifatının aparılmasına imkan yaratmışdır. L.Kərimov
                xalçaların bədii və texniki xüsusiyyətlərini, ornament
                quruluşunu, kompozisiya həllini və digər səciyyəvi
                göstəricilərini təhlil etməklə onların mənşəyini və Azərbaycan
                xalça sənəti sistemindəki yerini müəyyənləşdirməyə çalışmışdır.
              </p>
              <p className="m-0 text-pretty">
                Beləliklə, onun elmi fəaliyyəti yalnız ayrı-ayrı xalça
                nümunələrinin təsviri və sənədləşdirilməsi ilə məhdudlaşmamış,
                onların mənşəyini, üslubunu və regional xüsusiyyətlərini
                müəyyənləşdirməyə imkan verən sistemli elmi yanaşmanın
                formalaşdırılmasına yönəlmişdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 pt-16">
        <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-14">
          <div>
            <h3 className="m-0 mb-4 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
              Alim və muzey məsləhətçisi
            </h3>
            <div className="flex flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
              <p className="m-0 text-pretty">
                L.Kərimovun dekorativ sənət sahəsində dərin və hərtərəfli biliyi
                onu muzeylər və elmi müəssisələr üçün nüfuzlu məsləhətçiyə
                çevirmişdir.
              </p>
              <p className="m-0 text-pretty">
                Azərbaycanın və xarici ölkələrin mütəxəssisləri xalça sənəti və
                dekorativ sənət irsi ilə bağlı müxtəlif məsələlər üzrə məsləhət
                almaq üçün ona müraciət edirdilər. L.Kərimovun elmi-tədqiqat
                fəaliyyəti Avropa, Amerika və Şərq ölkələrinin mütəxəssislərinin
                diqqətini cəlb edirdi.
              </p>
              <p className="m-0 text-pretty">
                Onun məsləhət verdiyi mötəbər mədəniyyət ocaqları sırasında
                Londondakı Viktoriya və Albert Muzeyi, İstanbuldakı Topqapı
                Sarayı Muzeyi və digər tanınmış muzeylər də yer alır.
              </p>
              <p className="m-0 text-pretty">
                Onun elmi nüfuzu və beynəlxalq səviyyədə tanınması müasirləri
                tərəfindən də yüksək qiymətləndirilirdi. Mürsəl Nəcəfov qeyd
                edirdi ki, Avropa, Amerika və Şərq ölkələrinin aparıcı
                xalçaşünasları L.Kərimova müraciət edir, onun fundamental
                tədqiqatları isə mütəxəssislər arasında böyük maraq doğururdu.
              </p>
            </div>
          </div>
          <div>
            <h3 className="m-0 mb-4 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
              Xalçadan kənarda
            </h3>
            <div className="flex flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
              <p className="m-0 text-pretty">
                Lətif Kərimovun elmi maraqları xalça sənəti ilə məhdudlaşmırdı.
                O, Şərqin klassik poeziyasına və musiqi mədəniyyətinə xüsusi
                maraq göstərirdi. L.Kərimov otuz ildən artıq müddət ərzində
                Yaxın və Orta Şərqin musiqi mədəniyyətini, o cümlədən musiqi
                terminlərinin etimologiyasını araşdırmışdır.
              </p>
              <p className="m-0 text-pretty">
                Fars dilini bilməsi ona musiqi terminlərinin izahlı lüğəti
                üzərindəki işində mühüm üstünlük qazandırmışdır. Bununla yanaşı,
                o, zəngin bilik və təcrübəsini gənc musiqiçilərlə bölüşmüş,
                milli musiqi sahəsində elmi tədqiqatların aparılmasına rəhbərlik
                etmişdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="muellim" className="px-10 pt-16">
        <div className="mx-auto max-w-[1080px]">
          <h3 className="m-0 mb-5 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
            Müəllim və ustad
          </h3>
          <div className="flex max-w-[760px] flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            <p className="m-0 text-pretty">
              Lətif Kərimovun elmi fəaliyyəti onun pedaqoji işi ilə ayrılmaz
              şəkildə bağlı idi. O, topladığı bilikləri yalnız elmi
              tədqiqatlarında əks etdirməyə deyil, həm də gələcək nəsil
              sənətkarlara, rəssamlara və tədqiqatçılara ötürməyə çalışırdı.
            </p>
            <p className="m-0 text-pretty">
              Lətif Kərimov uzun illər xalçaçılıq kurslarında, Əzim Əzimzadə
              adına Azərbaycan Dövlət Rəssamlıq Məktəbində və M.Ə.Əliyev adına
              Azərbaycan Dövlət İncəsənət İnstitutunda dərs demişdir. O,
              tələbələri Azərbaycan ornamentinin tarixi və inkişafı, xalça
              sənətinin özünəməxsus xüsusiyyətləri, onun bədii və texnoloji
              prinsipləri ilə tanış edirdi.
            </p>
            <p className="m-0 text-pretty">
              Lətif Kərimov xalçaçıların və texniki mütəxəssislərin peşəkar
              hazırlığına xüsusi əhəmiyyət verirdi. O, 1933-cü ildə yaradılmış
              xalçaçılıq kurslarının təşkilində və xalçaçılıq texnologiyasına
              dair tədris proqramlarının hazırlanmasında iştirak etmişdir.
              Ənənəvi üsulları gənc sənətkarlara ötürməklə o, əvvəllər çox zaman
              məhdud ustalar dairəsində qorunub saxlanılan peşəkar biliklərin
              sistemli tədrisin predmetinə çevrilməsinə töhfə verirdi.
            </p>
          </div>
          <div className="mt-8 max-w-[760px] border-l-2 border-[#8E2B2B] pl-6">
            <p className="m-0 mb-2.5 text-pretty font-serif text-[21px] font-medium leading-[1.55] text-[#111]">
              “Lətif müəllim peşə-texniki məktəblərdə, xalçaçılıq kurslarında,
              eləcə də bilavasitə iş prosesində xalçaçıların və texniki
              kadrların yetişdirilməsinə xüsusi qayğı göstərir.”
            </p>
            <div className="font-sans text-[13px] font-normal leading-[1.5] text-[#8E2B2B]">
              Cəfər Müciri, sənətşünaslıq namizədi
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 pt-16">
        <div className="mx-auto max-w-[1080px]">
          <h3 className="m-0 mb-5 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
            Lətif Kərimov məktəbi
          </h3>
          <div className="flex max-w-[760px] flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            <p className="m-0 text-pretty">
              Lətif Kərimovun çoxillik pedaqoji fəaliyyəti xalça və
              dekorativ-tətbiqi sənət sahəsində bütöv bir mütəxəssis nəslinin
              formalaşmasına töhfə vermişdir.
            </p>
            <p className="m-0 text-pretty">
              Onun yetirmələri arasında xalçaçılar və texnoloqlar, xalçaçı
              rəssamlar, ali təhsil müəssisələrinin müəllimləri, muzey
              mütəxəssisləri və tədqiqatçılar olmuşdur. Azərbaycan incəsənəti və
              sənətşünaslığının görkəmli nümayəndələri Kübra Əliyeva, Röya
              Tağıyeva, Eldar Mikayılzadə, Taryer Bəşirov, Məmmədhüseyn
              Hüseynov, Aydın Rəcəbov, Tamilla Abdullayeva və bir çox
              başqalarının adları onun məktəbi ilə bağlıdır.
            </p>
            <p className="m-0 text-pretty">
              Lətif Kərimov gənc tədqiqatçıların hazırlanmasına da rəhbərlik
              etmişdir. Onun şöbəsinin ondan çox əməkdaşı və aspirantı sonralar
              sənətşünaslıq namizədi elmi dərəcəsi almış, dekorativ sənət və
              musiqi sahəsində fəaliyyətlərini davam etdirmişlər.
            </p>
            <p className="m-0 text-pretty">
              Muzey kadrlarının hazırlanması onun pedaqoji fəaliyyətində xüsusi
              yer tuturdu. Xalçalar və dekorativ-tətbiqi sənətin digər
              nümunələri ilə işləyərkən Lətif Kərimov gənc mütəxəssislərə elmi
              atributlaşdırma vərdişlərini aşılayırdı: əsərlərin bədii
              xüsusiyyətlərini müəyyənləşdirməyi, onların müvafiq xalçaçılıq
              məktəblərinə aidiyyətini təyin etməyi və muzey eksponatlarına elmi
              təsvir verməyi öyrədirdi.
            </p>
            <p className="m-0 text-pretty">
              Beləliklə, Lətif Kərimovun elmi metodu yalnız onun şəxsi
              tədqiqatlarının nəticəsi deyil, həm də formalaşdırdığı peşəkar
              məktəbin elmi əsasına çevrilmişdir.
            </p>
          </div>
        </div>
      </section>

      <section id="irs" className="mt-[72px] bg-[#FCF3E1] px-10 py-[72px]">
        <div className="mx-auto max-w-[1080px]">
          <h3 className="m-0 mb-5 font-serif text-[32px] font-medium leading-[1.25] text-[#111]">
            Elmi irs
          </h3>
          <div className="flex max-w-[820px] flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            <p className="m-0 text-pretty">
              Lətif Kərimov özündən sonra Azərbaycan xalça sənətinə dair yalnız
              zəngin tədqiqatlar toplusu deyil, həm də onun sistemli şəkildə
              öyrənilməsi üçün zəngin elmi baza qoymuşdur.
            </p>
            <p className="m-0 text-pretty">
              O, xalça ornamentlərini və onların strukturunu araşdırmış,
              xalçaları bədii və texniki göstəricilərinə görə təsnifləndirmiş,
              regional xüsusiyyətlərini öyrənmiş, ornamental motivləri qeydə
              alaraq sistemləşdirmişdir. Eyni zamanda, xalça sənətinin xalqın
              tarixi və mədəniyyəti ilə qarşılıqlı əlaqəsini elmi əsaslarla üzə
              çıxarmağa çalışmışdır.
            </p>
            <p className="m-0 text-pretty">
              Onun üçcildlik “Azərbaycan xalçası” əsəri, həmçinin Viktoriya və
              Albert Muzeyinin kolleksiyasındakı xalçalara və Azərbaycan
              ornamentlərinin ayrı-ayrı elementlərinə həsr olunmuş tədqiqatları
              milli dekorativ-tətbiqi sənətin öyrənilməsinə mühüm töhfə
              vermişdir.
            </p>
            <p className="m-0 text-pretty">
              Lakin Lətif Kərimovun irsi yalnız kitabları və elmi əsərləri ilə
              məhdudlaşmır. Bu irs onun yaratdığı bilik sistemində və
              yetişdirdiyi rəssam, sənətkar, sənətşünas və muzey
              mütəxəssislərinin sonrakı nəsillərində davam etmişdir. Ənənənin
              bədii dilini üzə çıxarmağa və qorumağa çalışan tədqiqatçı bu dili
              onun yolunu davam etdirənlərə ötürə bilmişdir.
            </p>
          </div>
          <div className="mt-10 max-w-[900px] border-t border-[#8E2B2B]/30 pt-8">
            <p className="m-0 mb-[14px] text-pretty font-serif text-[26px] font-medium leading-[1.5] text-[#111]">
              “Lətif Kərimov Azərbaycan incəsənəti tarixinə yalnız görkəmli
              xalça ustası kimi deyil, həm də xalçanın xüsusi sənət sahəsi kimi
              həqiqi elmi və hərtərəfli öyrənilməsinin banisi, ən böyük
              nəzəriyyəçisi kimi əbədi daxil olmuşdur…”
            </p>
            <div className="font-sans text-[13px] font-normal leading-[1.6] text-[#8E2B2B]">
              Kübra Əliyeva,
              <br />
              sənətşünaslıq üzrə elmlər doktoru, professor, Azərbaycan
              Respublikasının Əməkdar İncəsənət xadimi
            </div>
          </div>
        </div>
      </section>

      <section id="muzey" className="px-10 pt-[72px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-[14px] font-mono text-xs font-normal leading-none tracking-[.12em] text-[#8E2B2B]">
            III HİSSƏ
          </div>
          <h2 className="m-0 mb-9 font-serif text-[40px] font-medium leading-[1.15] text-[#111]">
            Muzey – ömürlük missiyanın davamı kimi
          </h2>
          <div className="flex max-w-[820px] flex-col gap-4 font-sans text-[17px] font-normal leading-[1.75] text-[#2B2B2B]">
            <p className="m-0 text-pretty">
              Azərbaycan Milli Xalça Muzeyinin yaradılması Lətif Kərimovun elmi
              və yaradıcılıq ideyalarının ən mühüm təcəssümlərindən biri oldu.
              Xalça sənətinin bədii dili, tarixi və regional ənənələrinin
              öyrənilməsinə onilliklər həsr etmiş rəssam, tədqiqatçı və xalça
              sənətinin dərin bilicisi kimi o, Azərbaycan xalçasının yalnız
              qorunduğu və nümayiş etdirildiyi deyil, həm də sistemli şəkildə
              öyrənildiyi xüsusi bir məkanın yaradılması zərurətini dərk edən
              ilk mütəxəssislərdən idi.
            </p>
            <p className="m-0 text-pretty">
              Bu ideya L.Kərimovun bütün fəaliyyəti ilə sıx bağlı idi.
              Azərbaycan xalça sənətini araşdırarkən o, ölkənin müxtəlif
              bölgələrinə səfərlər edir, ənənəvi xalçaçılıq mərkəzlərini
              öyrənir, toxuculuq texnikaları, kompozisiya və ornamentlər
              haqqında məlumatlar toplayır, ustaların nəsildən-nəslə ötürdükləri
              bilikləri qeydə alırdı. Beləliklə, araşdırmalar nəticəsində
              Azərbaycan xalça mədəniyyətinin həm regional xüsusiyyətlərinin
              rəngarəngliyi, həm də vahid ənənə dili ilə səciyyələnən bütöv
              mənzərəsi formalaşırdı.
            </p>
          </div>
        </div>
      </section>

      <section className="px-10 pt-16">
        <div className="mx-auto grid max-w-[1080px] grid-cols-2 items-center gap-14">
          <div>
            <h3 className="m-0 mb-4 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
              Muzeyin yaradılması
            </h3>
            <div className="flex flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
              <p className="m-0 text-pretty">
                Lətif Kərimovun təşəbbüsü ilə 1967-ci ildə Bakıda ixtisaslaşmış
                Xalça Muzeyi yaradıldı. Dünyada bu profilli ilk muzey olan yeni
                mədəniyyət ocağının təsis edilməsi yalnız Azərbaycanın muzey
                həyatında deyil, milli mədəniyyət tarixində də mühüm hadisə idi.
              </p>
              <p className="m-0 text-pretty">
                Əsrlər boyu evin, emalatxananın və ənənəvi məişətin ayrılmaz
                hissəsi olan xalça müstəqil bədii və elmi tədqiqat obyekti
                statusu qazandı. Muzey Azərbaycan xalçasının milli mədəniyyətin
                ən mühüm dəyərlərindən biri kimi qorunduğu, öyrənildiyi və
                təqdim edildiyi məkana çevrilməli, bunun üçün isə ilk növbədə
                onun zəngin kolleksiyası formalaşdırılmalı idi.
              </p>
              <p className="m-0 text-pretty">
                Bunu nəzərə alaraq, genişmiqyaslı toplama və elmi-tədqiqat
                işlərinə başlanıldı. Dövlət rəsmiləri və ilk növbədə Ümummilli
                Lider Heydər Əliyevin köməyi sayəsində muzeyin əsası qoyulduqdan
                dərhal sonra eksponatların əldə olunması və regionlara
                ekspedisiyaların təşkil edilməsi üçün xəzinədən limitsiz büdcə
                ayrıldı. Muzey əməkdaşları tədqiqatçılarla birlikdə Azərbaycanın
                müxtəlif bölgələrinə, o cümlədən ən ucqar yaşayış məntəqələrinə
                ekspedisiyalara yollanırdılar. Onlar dəyərli sənət nümunələrini
                aşkarlayır, əldə edir, onların hazırlanma texnologiyalarını,
                yerli bədii xüsusiyyətlərini və ayrı-ayrı əşyaların tarixini
                öyrənirdilər. Lətif Kərimov bu işdə mühüm rol oynayırdı. Onun
                xalça sənətinə dair dərin bilikləri əsərlərin bədii və tarixi
                dəyərini müəyyənləşdirməyə, onların Azərbaycan xalçaçılığının
                ümumi sistemində yerini təyin etməyə və bu çoxəsrlik ənənənin
                zənginliyini dolğun şəkildə əks etdirən kolleksiya
                formalaşdırmağa imkan verirdi.
              </p>
            </div>
          </div>
          <div className="flex h-[460px] items-center justify-center bg-[repeating-linear-gradient(135deg,#EDE9E1_0_14px,#F6F3ED_14px_28px)]">
            <span className="border border-[#E2DED6] bg-white px-3 py-2 font-mono text-[11px] font-normal leading-none text-[#8A8378]">
              foto — muzeyin ilk illəri, arxiv
            </span>
          </div>
        </div>
      </section>

      <section className="px-10 pt-16">
        <div className="mx-auto max-w-[1080px]">
          <h3 className="m-0 mb-5 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
            Toplamaq və qorumaq
          </h3>
          <p className="m-0 max-w-[820px] text-pretty font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            Muzey kolleksiyasının toplanması L.Kərimov üçün onun tədqiqat
            fəaliyyətinin davamı idi. Muzeyə yalnız xovlu və xovsuz xalçalar,
            xalça məmulatları daxil olmurdu. Kolleksiya parçalar, ənənəvi
            geyimlər, tikmələr, bədii metal və zərgərlik nümunələri, qədim
            toxuculuq alətləri və dekorativ-tətbiqi sənətin digər əsərləri ilə
            zənginləşirdi. Kolleksiyada Lətif Kərimovun yaratdığı 35 xalça da
            xüsusi yer tuturdu. Bu əsərlər 1970-1980-ci illərdə muzey tərəfindən
            alınmış və ya rəssamın özü tərəfindən hədiyyə edilmişdir.
          </p>
        </div>
      </section>

      <section className="px-10 pt-16">
        <div className="mx-auto grid max-w-[1080px] grid-cols-2 items-center gap-14">
          <div className="flex h-[420px] items-center justify-center bg-[repeating-linear-gradient(135deg,#EDE9E1_0_14px,#F6F3ED_14px_28px)]">
            <span className="border border-[#E2DED6] bg-white px-3 py-2 font-mono text-[11px] font-normal leading-none text-[#8A8378]">
              foto — Cümə məscidi, ilk ekspozisiya, 1972
            </span>
          </div>
          <div>
            <h3 className="m-0 mb-4 font-serif text-[26px] font-medium leading-[1.3] text-[#111]">
              İlk ekspozisiya
            </h3>
            <div className="flex flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
              <p className="m-0 text-pretty">
                26 aprel 1972-ci ildə muzey İçərişəhərdə yerləşən XIX əsr tarixi
                abidəsi olan Cümə məscidində ilk daimi ekspozisiyasını
                ziyarətçilərə təqdim etdi. Muzeyin açılışında Azərbaycan
                xalqının Ümummilli Lideri Heydər Əliyev iştirak etdi. Dörd zalda
                yerləşdirilən ekspozisiya ziyarətçiləri Azərbaycan xalça
                sənətinin zənginliyi, onun tarixi inkişaf yolu və müxtəlif
                toxuculuq növləri ilə tanış edirdi.
              </p>
              <p className="m-0 text-pretty">
                Burada xalça yalnız dekorativ sənət nümunəsi kimi təqdim
                olunmurdu, onun vasitəsilə xalqın məişəti, estetik dünyagörüşü,
                sənətkarlıq məharəti və bədii yaddaşı açılırdı. Ekspozisiyada
                xalçalarla yanaşı, tikmələr, metal və ağac məmulatları,
                zərgərlik nümunələri və dekorativ-tətbiqi sənətin digər
                nümunələri təqdim edilirdi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[72px] bg-[#F5F2EC] px-10 py-[72px]">
        <div className="mx-auto max-w-[1080px]">
          <h3 className="m-0 mb-5 font-serif text-[32px] font-medium leading-[1.25] text-[#111]">
            Yaşamağa davam edən irs
          </h3>
          <div className="flex max-w-[820px] flex-col gap-4 font-sans text-base font-normal leading-[1.75] text-[#2B2B2B]">
            <p className="m-0 text-pretty">
              Mövcud olduğu onilliklər ərzində böyük inkişaf yolu keçən muzey
              Azərbaycanın dövlət müstəqilliyi bərpa edildikdən sonra
              fəaliyyətini Muzey Mərkəzində davam etdirdi. 2007-ci ildə
              Azərbaycan Respublikasının Prezidenti İlham Əliyevin sərəncamı
              əsasında xüsusi olaraq xalça muzeyi üçün yaradılmış yeni bina
              Heydər Əliyev Fondu və Azərbaycan Respublikasının Mədəniyyət
              Nazirliyinin birgə layihəsidir. 2014-cü ildə isə Bakı bulvarında
              avstriyalı memar Frans Yansın layihəsi əsasında inşa edilmiş yeni
              binaya köçürüldü.
            </p>
            <p className="m-0 text-pretty">
              Bu gün Azərbaycan Milli Xalça Muzeyi milli xalçaçılığın və
              dekorativ-tətbiqi sənətin zəngin irsini qoruyur, öyrənir və təqdim
              edir. Burada elmi və maarifləndirici fəaliyyət davam etdirilir,
              muzey kolleksiyaları tədqiq olunur, ənənəvi texnikalar qorunur,
              dirçəldilir, sərgilər, konfranslar keçirilir, nəşrlər hazırlanır.
            </p>
            <p className="m-0 text-pretty">
              Azərbaycan Milli Xalça Muzeyi Lətif Kərimovun rəssam, tədqiqatçı
              və mədəni irsin qoruyucusu kimi əsas həyat missiyalarını
              birləşdirən məkan olaraq dəyərləndirilə bilər.
            </p>
          </div>
          <div className="mt-8 max-w-[820px] border-t border-[#8E2B2B]/25 pt-6 font-sans text-[15px] font-normal leading-[1.7] text-[#333]">
            Muzeyin iş saatları və biletlər haqda ətraflı məlumat:{" "}
            <a
              href="https://iticket.az/events/museum/azerbaijan-national-carpet-museum"
              target="_blank"
              rel="noopener"
              className="text-[#8E2B2B] underline underline-offset-[3px]">
              iticket.az
            </a>
          </div>
        </div>
      </section>

      <section className="px-10 pb-[90px] pt-[72px]">
        <div className="mx-auto grid max-w-[1080px] grid-cols-[1.4fr_1fr] items-center gap-12 bg-[#F5F2EC] px-12 py-11">
          <div>
            <h3 className="m-0 mb-3 font-serif text-[26px] font-medium leading-[1.25] text-[#111]">
              Kərimovun kolleksiyası
            </h3>
            <p className="m-0 max-w-[620px] text-pretty font-sans text-[15px] font-normal leading-[1.7] text-[#333]">
              Onun eskizləri üzrə toxunmuş xalçalar və elmi arxivi muzeyin daimi
              ekspozisiyasında nümayiş olunur.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2.5 justify-self-start border-b border-[#8E2B2B] pb-2 font-sans text-[15px] font-medium leading-none text-[#8E2B2B]">
            Kolleksiyaya bax<span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
