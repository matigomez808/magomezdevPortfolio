'use client'

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "../UI/Container";
import { Background } from "../UI/Background";
import { WindowContainer } from "../UI/WindowContainer";
import Slideshow from "../UI/Slideshow";
import { Banner } from "../UI/Banner";
import i18n from "@/lib/i18n";

import agurPic from "~/public/assets/agur/agur1.png"
import Java from "#/icons/javaIcon.svg";
import Js from "#/icons/jsIcon.svg";
import Mongo from "#/icons/mongoIcon.svg";
import Next from "#/icons/nextIcon.svg";
import Python from "#/icons/pythonIcon.svg";
import React from "#/icons/reactIcon.svg";
import Spring from "#/icons/springIcon.svg";
import Tailwind from "#/icons/tailwindIcon.svg";
import Django from "#/icons/django.svg"

import bannerImagen from "/public/banner250T1000.png";
import Code from "../icons/code.svg";
import Atom from "../icons/atom.svg";
import { SkillsPanel } from "../UI/SkillsPanel";




export default function Landing() {
  const { t } = useTranslation();

  const links = [
    {
      name: "Agur (WiP)",
      href: "#agur",
      descripcion: t('landing.links.agur'),
    },
    {
      name: "Torre de Mabel",
      href: "#torre-de-mabel",
      descripcion: t('landing.links.torre'),
    },
  ];

  return (

    <>


      <Container id="head"
        layout="lg:grid lg:grid-cols-2 lg:gap-2 flex flex-col"
        height="h-dvh-minus-nav">
        <Container id="left-half"
          className="justify-evenly flex-grow text-pretty">

          <WindowContainer
            cross
            className="w-full">
            <Container id="Mati-Gomez"
              className=""
              layout="flex flex-row"
              height="h-[80%]">
              <h2 className="text-4xl font-bold tracking-tight font-mono text-mg-purple md:text-lg sm:text-lg">
                /mgomez@portfolio:~
                <p className="text-mg-off-white md:text-lg sm:text-lg">{t('landing.intro')}  
                  <span className="text-mg-green md:text-lg sm:text-lg">{t('landing.name')}
                  </span>
                </p>

                <p className="text-mg-off-white text-3xl md:text-lg sm:text-lg">&#9612;</p>
              </h2>
            </Container>
          </WindowContainer>

          <Suspense fallback="Loading...">
            <p className="font-variant text-2xl font-bold">
              {t('landing.title')}
            </p>
          </Suspense>

          <Suspense fallback="Loading...">
            <p className="font-main text-2xl font-extralight">
              {t('landing.abstract')}
            </p>
          </Suspense>

        </Container>
        <Container id="headshot-half"
          padding=""
          className="justify-center align-middle self-center">
          <Image
            className="rounded-full mx-auto bg-none max-w-[50%]"
            src="/carnet.jpg"
            alt="headshot de Mati Gomez"

            height={400}
            width={400}
            priority
          />
        </Container>

      </Container>


      <Banner
        src={bannerImagen}
        alt="screenshot de codigo" />

      <Container id="skills-projects"
        height="lg:h-dvh w-full max-w-[1750px]"
        layout="flex flex-col lg:flex-row "
        padding="">

        <Container id="projects"
          className=""
          background=""
          padding=""
          layout="basis-8/12 flex flex-col"
          height="h-full">

          <Container id="projects-title"
            className="h-1/8"
            layout="flex flex-row justify-around"
            fontFamily="font-heading text-4xl text-center"
            border="lg:border-r-2 lg:border-white"
            height="">
            <div className="flex-1"></div>
            <h2 className="self-center">{t('landing.projects')}</h2>
            <div className="flex-1"></div>
            <Code height={50} width={50} className="self-center" />
            <div className="flex-1"></div>
          </Container>
          <Container id="projects-cards"
            className="flex-grow justify-between"
            padding="">
            <Container id="biblioteca-de-mabel"
              className=""
              layout="flex flex-col lg:flex-row lg:flex-wrap flex-grow"
              background=""
              height="h-2/5"
              padding="pt-4 px-4">
              <h1 className="pb-4 font-heading text-2xl text-center self-center lg:w-full">Biblioteca de mabel</h1>
              <Container id="biblio-video"
                padding="p-2"
                className=""
                layout="flex flex-grow lg:basis-2/4 justifiy-center"
                height="h-full">
                <video
                  className="w-auto max-h-[300px] self-center mx-auto"
                  loop
                  autoPlay
                  preload="auto">
                  <source src="/biblioScript.mp4" type="video/mp4" />
                </video>
              </Container>
              <Container
                layout="basis-2/4"
                padding="p-4"
                className="flex items-center">
                <p>{t(`landing.torre`)}</p>
              </Container>
            </Container>

            <Container id="ecommerce-agur"
              className=""
              layout="flex flex-col lg:flex-row lg:flex-wrap justify-between"
              background=""
              height="h-1/2"
              padding="pb-4 px-4">
              <h1 className="font-heading text-2xl text-center self-center lg:w-full">Ecommerce</h1>
              <Container
                layout="basis-2/4"
                padding="p-4"
                className="flex items-center">
                <p className="">{t(`landing.agur`)}</p>
              </Container>
              <Container
                className="mx-auto"
                padding="p-4"
                height="h-auto w-1/2"
                layout="flex flex-col justify-center">
                <Slideshow styles="lg:max-h-[250px] object-contain" />
              </Container>
            </Container>

          </Container>
        </Container>

        <Container id="skills"
          className=""
          background=""
          layout="lg:basis-4/12 flex flex-col object-fill"
          padding=""
          height="h-full">
          <Container id="skills-title"
            className="h-1/8"
            layout="flex flex-row justify-around"
            fontFamily="font-heading text-4xl text-center"
            border="lg:border-l-2 lg:border-white"
            height="">
            <div className="flex-1"></div>
            <h2 className="self-center">Skills</h2>
            <div className="flex-1"></div>
            <Atom height={50} width={50} className="self-center" />
            <div className="flex-1"></div>
          </Container>

          <Container id="skills-text"
            background=""
            padding="p-4"
            height="basis-3/12">
            <p>Aca va texto acerca de los diferentes skills, y cambia cuando hovereas un skill. Bueno mentira, aun no hace nada y esto es todo lo que es, un simple {`<p></p>`}</p>
          </Container>

          <Container id="skills-panel"
            className=""
            padding="m-8 p-4 pt-8"
            height="basis-8/12"
            background="bg-mg-off-white bg-opacity-20 rounded-xl"
            layout="flex flex-row flex-wrap justify-around">
            <Js className="w-auto h-[50px] lg:h-[85px] p-2 lg:px-8" />
            <Python className="w-auto h-[50px] lg:h-[85px] p-2 lg:px-8" />
            <Java className="w-auto h-[50px] lg:h-[85px] p-2 lg:px-8" />
            <React className="w-auto h-[50px] lg:h-[85px] p-2 lg:px-8" />
            <Django className="w-auto h-[50px] lg:h-[85px] p-2 lg:px-8" />
            <Spring className="w-[150px] lg:w-[170px] p-2 h-auto" />
            <Mongo className="w-[150px] lg:w-[170px] p-2 h-auto" />
            <Next className="w-[150px] lg:w-[170px] p-2 h-auto" />
            <Tailwind className="w-[150px] lg:w-[170px] p-2 h-auto " />
          </Container>

        </Container>

      </Container>

    </>

  );
}
