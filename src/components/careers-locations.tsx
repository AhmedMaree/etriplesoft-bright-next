import { MapPin } from "lucide-react";
import styles from "./careers-reference.module.css";

type Locale = "en" | "ar";

const locations = {
  en: {
    eyebrow: "Where we work",
    title: "Our Locations",
    description: "Our offices are in Cairo, Riyadh and Dubai.",
    office: "Office",
    cities: ["Cairo, Egypt", "Riyadh, Saudi Arabia", "Dubai, UAE"],
  },
  ar: {
    eyebrow: "مواقع عملنا",
    title: "مكاتبنا",
    description: "تقع مكاتبنا في القاهرة والرياض ودبي.",
    office: "مكتب إقليمي",
    cities: ["القاهرة، مصر", "الرياض، المملكة العربية السعودية", "دبي، الإمارات"],
  },
} satisfies Record<Locale, { eyebrow: string; title: string; description: string; office: string; cities: string[] }>;

function WorldMapBackdrop() {
  return (
    <svg className={styles.locationsMap} viewBox="0 0 1000 370" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="career-map-dots" width="11" height="11" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.65" />
        </pattern>
      </defs>
      <g fill="url(#career-map-dots)">
        <path d="M95 75 130 49 170 42 192 25 244 32 269 50 304 53 324 72 352 77 361 99 339 119 325 145 306 158 294 193 271 200 252 181 230 173 216 146 193 137 173 116 144 122 128 104 101 106Z" />
        <path d="m286 197 28 9 23 28 8 32-9 34-19 20-4 32-17 23-13-20-2-36-15-26-1-39-14-27 12-24Z" />
        <path d="m418 69 31-19 34 4 15-22 51-5 22 13 43-8 28 15 39-6 26 17 45-2 26 20 44-6 22 20 52 2 16 17-25 17-56-5-23 15-47-1-14 20-45-8-16 20-43-3-22 18-43-9-21 20-36-9-10 29-23 5-11-29-25-14 1-31-18-23 6-24-21-18 17-24-9-23-23-12Z" />
        <path d="m485 176 31-11 39 8 23 20 30 7 22 30-4 35-22 25-10 43-23 19-21-18-4-32-19-24-4-34-23-12-9-27-24-16Z" />
        <path d="m784 243 36-15 46 8 28 23-11 26-37 3-22 15-34-9-24-21Z" />
        <path d="m879 294 14-8 16 8-3 18-15 6-13-10Z" />
      </g>
      <g className={styles.mapSignals}>
        <circle cx="250" cy="115" r="31" /><circle cx="250" cy="115" r="19" /><circle cx="250" cy="115" r="3" />
        <circle cx="735" cy="106" r="31" /><circle cx="735" cy="106" r="19" /><circle cx="735" cy="106" r="3" />
        <circle cx="897" cy="225" r="31" /><circle cx="897" cy="225" r="19" /><circle cx="897" cy="225" r="3" />
      </g>
    </svg>
  );
}

function CitySkyline({ city }: { city: "cairo" | "riyadh" | "dubai" }) {
  return (
    <svg className={styles.citySkyline} viewBox="0 0 320 112" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <path className={styles.skylineGround} d="M0 106H320" />
      {city === "cairo" && <g className={styles.skylineFill}>
        <path d="m5 105 65-53 65 53Z M83 105l41-34 41 34Z" />
        <path d="M190 105V66h12V48h7V31h5v17h7v18h12v39Zm-8-39h58v5h-58Z M238 105V58h9V42h5V24h4V8h5v16h4v18h9v63Z" />
        <path d="M270 105V75h12V60h6v-9h5v9h12v45Z M151 105V83h10V72h5v11h10v22Z" />
        <path d="M194 61h48M242 53h32" className={styles.skylineDetail} />
      </g>}
      {city === "riyadh" && <g className={styles.skylineFill}>
        <path d="M14 105V76h17v-8h8v37Zm39 0V59h20v46Zm27 0V74h18v31Zm103 0V62h24v43Zm34 0V82h22v23Zm36 0V70h20v35Zm34 0V80h19v25Z" />
        <path d="M103 105V19h13v-8h21v8h13v86Zm7-72h33m-33 15h33m-33 15h33m-33 15h33" className={styles.skylineDetail} />
        <path d="M117 11V4h19v7" className={styles.skylineDetail} />
        <path d="M26 74V58m0 0-8-9m8 9 8-9m220 21V55m0 0-8-9m8 9 8-9m28 32V61m0 0-8-9m8 9 8-9" className={styles.skylineDetail} />
      </g>}
      {city === "dubai" && <g className={styles.skylineFill}>
        <path d="M13 105V75h21v30Zm29 0V61h24v44Zm34 0V80h18v25Zm83 0V72h18v33Zm23 0V61h22v44Zm28 0V83h18v22Zm26 0V67h22v38Zm30 0V76h24v29Z" />
        <path d="M118 105V74l7-10 4-23 4-14 4-23 4 23 5 14 4 23 7 10v31Z" />
        <path d="M237 105c2-12 9-20 22-25l-7-17 9 7 8-3-7 12c11 4 19 13 21 26Z" />
        <path d="M113 105h50M228 105h70" className={styles.skylineDetail} />
      </g>}
    </svg>
  );
}

export function CareersLocations({ locale }: { locale: Locale }) {
  const copy = locations[locale];

  return (
    <div className={`container ${styles.locationsLayout}`} dir={locale === "ar" ? "rtl" : "ltr"}>
      <WorldMapBackdrop />
      <header className={styles.locationsIntro}>
        <p className={styles.locationsEyebrow}><span>{copy.eyebrow}</span></p>
        <h2 id="locations-title">{copy.title}</h2>
        <p className={styles.locationsDescription}>{copy.description}</p>
      </header>
      <ul className={styles.locationsGrid}>
        {copy.cities.map((city, index) => {
          const skyline = (["cairo", "riyadh", "dubai"] as const)[index];
          return (
            <li key={city}>
              <article className={styles.locationCard}>
                <div className={styles.locationCopy}>
                  <span className={styles.locationIcon}><MapPin size={26} strokeWidth={2.2} aria-hidden="true" /></span>
                  <div className={styles.locationName}>
                    <h3>{city}</h3>
                    <p>{copy.office}</p>
                  </div>
                </div>
                <CitySkyline city={skyline} />
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
