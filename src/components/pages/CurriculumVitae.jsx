'use client'

import Link from "next/link"
import { Container } from "../UI/Container"
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { Banner } from "../UI/Banner";

import keysImage from "/public/bannerKeysFade128.png"
import Image from "next/image";
import { WindowContainer } from "../UI/WindowContainer";
import { AlternateWindow, TableContainer } from "../UI/TableContainer";
import { FlareWindow } from "../UI/FlareWindow";

export const CurriculumVitae = () => {
  const { t, i18n } = useTranslation();

  const pdfURLs = {
    en: "https://drive.google.com/file/d/172PHn1I_Voy_iiae0LB7xNGWUs2C5fDc/view?usp=sharing",
    es: "https://drive.google.com/file/d/1YuTkAwF-DlpIZPE9rj7eBQpg1PI9Nq-x/view?usp=sharing"
  };

  const pdfURL = pdfURLs[i18n.language] || "https://drive.google.com/file/d/172PHn1I_Voy_iiae0LB7xNGWUs2C5fDc/view?usp=sharing";

  const cvExpItems = t(`cv.experience.items`, { returnObjects: true })
  const cvEduItems = t(`cv.education.items`, { returnObjects: true })
  return (

    <>
      <Banner src={keysImage} alt="imagen de un teclado" border="bg-black" imageStyles="relative " />

      <Container id="cv"
        className=""
        layout=""
        background="bg-black">
        <Container id="cv-heading"
          className=""

          layout="flex flex-row">
          <h1 className="text-right font-heading font-light text-4xl">Matías Gómez</h1>
          <Container className="flex-grow" layout="" padding=""></Container>
          <Container
            className=""
            padding="">
            <h2 className="text-right font-mono text-2xl ">{t(`cv.title`)}</h2>
            <h3 className="text-right font-heading text-xl font-light border-t-2 border-mg-green">{t(`cv.location`)}</h3>

          </Container>

        </Container>

        <Container id="aptitudes">
          <WindowContainer alternate>
            <p className="text-pretty text-lg font-light">
              <Suspense fallback='Loading...'>
                {t(`cv.aptitudes`)}
              </Suspense>
            </p>
          </WindowContainer>
        </Container>



        <Container id="professional-journey"
          className="mx-auto max-w-[80%] w-fit"
          padding="">
          <TableContainer localeData={cvExpItems} />

        </Container>

        <Container id="description">
          <WindowContainer alternate>
            <p className="text-pretty text-lg font-light">
              <Suspense fallback='Loading...'>
                {t(`cv.experience.description`)}
              </Suspense>
            </p>
          </WindowContainer>
        </Container>

        <Container id="educational-journey"
          className="mx-auto max-w-[80%] w-fit"
          padding="">
          <TableContainer localeData={cvEduItems} />

        </Container>

        <Container id="link-to-cv">
          <Link
            className="rounded-xl mx-auto bg-mg-off-white text-black font-heading p-3 text-center self-center"
            href={pdfURL}
            target="_blank">{t(`cv.link`)}
          </Link>
        </Container>
      </Container>
    </>
  )
}