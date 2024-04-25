'use client'

import Link from "next/link"
import { Container } from "./UI/Container"
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

export const CurriculumVitae = () => {
  const { t, i18n } = useTranslation();

  const pdfURLs = {
    en: "https://drive.google.com/file/d/1sGErRH7670kNNa5NI8Phrv5vCMJalSEv/view?usp=sharing",
    es: "https://drive.google.com/file/d/1urk6A4kvURCqOif-gppgVfdnSseu7t07/view?usp=sharing"
  };

  const pdfURL = pdfURLs[i18n.language] || "https://drive.google.com/file/d/1sGErRH7670kNNa5NI8Phrv5vCMJalSEv/view?usp=sharing";

  return (
    <Suspense fallback='Loading...'>
      <Container>
        <h1 className="text-right font-light text-3xl">Matías Gómez</h1>
        <h2 className="text-right font-light mt-1">{t(`cv.title`)}</h2>
        <h3 className="text-right font-light mt-1">{t(`cv.location`)}</h3>

        <h4 className="font-semibold text-lg mt-3">{t(`cv.aboutMeTitle`)}</h4>
        <p className="text-pretty">
          {t(`cv.aptitudes`)}
        </p>

        <h4 className="font-semibold text-lg mt-3">{t(`cv.education.title`)}</h4>
        <ul>
          <li className="p-1 mt-2 border-b-2 border-[#07876a] shadow-md">
            <span className="font-semibold">{t(`cv.education.item1Date`)}</span> {t(`cv.education.item1Title`)}
            <p className="text-right font-light mt-1">{t(`cv.education.item1Content`)}</p>
          </li>

          <li className="p-1 mt-2 border-b-2 border-[#07876a] shadow-md">
            <span className="font-semibold">{t(`cv.education.item2Date`)}</span>{t(`cv.education.item2Title`)}
            <p className="text-right font-light mt-1">{t(`cv.education.item2Content`)}</p>
          </li>

          <li className="p-1 mt-2 border-b-2 border-[#07876a] shadow-md">
            <span className="font-semibold">{t(`cv.education.item3Date`)}
            </span>{t(`cv.education.item3Title`)}
            <p className="text-right font-light mt-1">{t(`cv.education.item3Content`)}</p>
          </li>

          <li className="p-1 mt-2 border-b-2 border-[#07876a] shadow-md">
            <span className="font-semibold">{t(`cv.education.item4Date`)}</span>{t(`cv.education.item4Title`)}
            <p className="text-right font-light mt-1">{t(`cv.education.item4Content`)}</p>
          </li>

          <li className="p-1 mt-2 border-b-2 border-[#07876a] shadow-md">
            <span className="font-semibold">{t(`cv.education.item5Date`)}</span>{t(`cv.education.item5Title`)}
            <p className="text-right font-light mt-1">{t(`cv.education.item5Content`)}</p>
          </li>

          <li className="p-1 mt-2 border-b-2 border-[#07876a] shadow-md">
            <span className="font-semibold">{t(`cv.education.englishDate`)}</span>{t(`cv.education.englishTitle`)}
            <p className="text-right font-light mt-1">{t(`cv.education.englishContent`)}</p>
          </li>
        </ul>

        <h4 className="font-semibold text-lg mt-3">{t(`cv.experience.title`)}</h4>
        <ul>
          <li className="p-1 mt-1 shadow-sm">
            <span className="font-semibold">{t(`cv.experience.item1Date`)}</span> {t(`cv.experience.item1Title`)}
          </li>
          <li className="p-1 mt-1 shadow-sm">
            <span className="font-semibold">{t(`cv.experience.item2Date`)}</span>{t(`cv.experience.item2Title`)}
          </li>
          <li className="p-1 mt-1 shadow-sm">
            <span className="font-semibold">{t(`cv.experience.item3Date`)}</span>{t(`cv.experience.item3Title`)}
          </li>
          <li className="p-1 mt-1 shadow-sm">
            <span className="font-semibold">{t(`cv.experience.item4Date`)}</span>{t(`cv.experience.item4Title`)}
          </li>
          <li className="p-1 mt-1 shadow-sm">
            <span className="font-semibold">{t(`cv.experience.item5Date`)}</span>{t(`cv.experience.item5Title`)}
          </li>
        </ul>


        <Link
          className="rounded-xl bg-[#07876a] p-3 text-center mt-4"
          href={pdfURL}
          target="_blank">{t(`cv.link`)}</Link>

      </Container>
    </Suspense>
  )
}