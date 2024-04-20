'use client'

import Image from "next/image";
import Java from "./icons/javaIcon.svg";
import Js from "./icons/jsIcon.svg";
import Mongo from "./icons/mongoIcon.svg";
import Next from "./icons/nextIcon.svg";
import Python from "./icons/pythonIcon.svg";
import React from "./icons/reactIcon.svg";
import Spring from "./icons/springIcon.svg";
import Tailwind from "./icons/tailwindIcon.svg";
import Material from "./icons/materialIcon.svg";
import Slideshow from "./UI/Slideshow";
import { motion } from "framer-motion";
import { Container } from "./UI/Container";

const links = [
  {
    name: "Agur (WiP)",
    href: "#agur",
    descripcion: "Ecommerce para un negocio real de ropa interior local.",
  },
  {
    name: "Torre de Mabel",
    href: "#torre-de-mabel",
    descripcion: "Un pequeño juego para el interprete de Python",
  },
];
const skills = [
  { name: "JavaScript", image: <Js height={50} width={50} /> },
  { name: "React", image: <React height={50} width={50} /> },
  { name: "NextJS", image: <Next height={50} width={100} /> },
  { name: "Tailwind", image: <Tailwind height={50} width={150} /> },
  { name: "Material UI", image: <Material height={50} width={50} /> },
  { name: "Java", image: <Java height={50} width={50} /> },
  { name: "SpringBoot", image: <Spring height={50} width={100} /> },
  { name: "MongoDB", image: <Mongo height={50} width={100} /> },
  { name: "Python", image: <Python height={50} width={50} /> },
];

export default function Landing() {
  return (
    <div>
      <Container id="nametag" element="section">
        <motion.div
          whileInView={{ x: 0, opacity: 1, transition: 200 }}
          initial={{ x: -100, opacity: 0 }}
        >
          <span className="font-semibold">{">_"}</span>magomezdev
        </motion.div>
      </Container>
      <Container id="head" element="section" layout="lg:grid lg:grid-cols-2 lg:gap-2 sm:flex sm:flex-col">
        <motion.div
          whileInView={{ x: 0, opacity: 1, transition: 200 }}
          initial={{ x: -100, opacity: 0 }}
        >
          <h2 id="Mati-Gomez" className="text-4xl font-bold tracking-tight text-black sm:text-6xl ">
            Mati Gomez
          </h2>
          <article>
            <p className="mt-6 text-lg leading-8 text-black">
              Desarrollador fullstack situado en La Pampa, Argentina
            </p>
            <p className="mt-6 text-lg leading-8 text-black">
              Apasionado por el desarrollo de software. Aprender de forma
              autodidacta me ayudó a re-entender a esta herramienta que son las
              TI. Mi formación previa en comunicación, audiovisuales y
              carpintería me acompañan en este nuevo trayecto de mi carrera
              profesional.
            </p>
          </article>
        </motion.div>
        <motion.aside
          whileInView={{ x: 0, opacity: 1, transition: 200 }}
          initial={{ x: 100, opacity: 0 }}
        >
          <Image
            className="rounded-3xl self-center mx-auto shadow-sm pt-4 sm:p-4"
            src="/carnet.jpg"
            alt="headshot de Mati Gomez"
            height={325}
            width={325}
            priority
          />
        </motion.aside>
        <motion.div 
        className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none col-span-full"
        whileInView={{opacity:1, transition: 300}}
        initial={{opacity: 0}}
        >
          <h2 className="text-xl font-bold lg:text-left sm:text-center">
            Proyectos
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 mt-6 text-black sm:grid-cols-2 sm:flex lg:gap-x-10">
            {links.map((link) => (
              <div key={link.name}>
                <a href={link.href} className="mt-4">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
                <p className="font-light">{link.descripcion}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.section 
        id="skills" 
        className="col-span-full pt-8"
        whileInView={{opacity:1, transition: 400}}
        initial={{opacity: 0}}
        >
          <h2 className="text-xl font-bold mt-4 text-center col-span-full">
            Skills
          </h2>
          <div className="col-span-full flex flex-row justify-between flex-wrap px-2">
            {skills.map((skill) => (
              <div key={skill.name} className="mt-4">
                {skill.image}
              </div>
            ))}
          </div>
        </motion.section>
      </Container>
      <Container element="section">
        <motion.div 
        className="col-span-full "
        whileInView={{opacity:1, transition: 400}}
        initial={{opacity: 0}}
        >
          <h2
            id="torre-de-mabel"
            className="text-xl font-bold mt-4 text-center scroll-mt-10"
          >
            La Torre de Mabel
          </h2>
          <article className="mt-6">
            Esta es mi primera aplicación. Es un pequeño juego en el que introducimos palabras al azar en un relato y despues vemos qué relato nuevo construimos. Es verdaderamente sencilla pero divertida.
          </article>
          <Image
            className="rounded-md self-center mx-auto mt-4"
            src="/assets/torreMabel/mabel.png"
            alt="screenshot de la torre de mabel"
            width={1000}
            height={667}
          />
        </motion.div >
      </Container>
      <Container element="section">
        <motion.div 
        className="col-span-full"
        whileInView={{opacity:1, transition: 400}}
        initial={{opacity: 0}}
        >
          <h2 id="agur" className="text-xl font-bold mt-4 text-center scroll-mt-10">
            Agur
          </h2>
          <article className="mt-6">
            Este es un sitio de Ecommerce para un emprendimiento de ropa
            interior en mi ciudad. Es mi primer proyecto con React. Es bastante
            sencillo y aún sigue en desarrollo. Comenzó como un proyecto 100%
            React y de a poco fui incorporando frameworks como Material UI y
            Zustand para manejo del state. Tiene también una integración con
            MongoDB Atlas con la que accede a una lista de productos con sus
            imagenes colgadas en un bucket externo.
          </article>
          <Slideshow />
        </motion.div >
      </Container>
    </div>
  );
}
