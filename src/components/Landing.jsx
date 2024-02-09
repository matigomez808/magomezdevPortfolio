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
import Slideshow from "./Slideshow";

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
    <div className="relative isolate overflow-hidden  custom-pattern-2">
      <div className="mx-auto max-w-7xl bg-zinc-300 py-8 px-8">/magomezdev</div>
      <div className="mx-auto max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-2 sm:flex sm:flex-col bg-zinc-300 py-16">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl ">
            Mati Gomez
          </h2>
          <p className="mt-6 text-lg leading-8 text-black-300">
            Desarrollador fullstack situado en La Pampa, Argentina
          </p>
          <p className="mt-6 text-lg leading-8 text-black-300">
            Apasionado por el desarrollo de software. Aprender de forma
            autodidacta me ayudó a re-entender a esta herramienta que son las
            TI. Mi formación previa en comunicación, audiovisuales y carpintería
            me acompañan en este nuevo trayecto de mi carrera profesional.
          </p>
        </div>
        <Image
          className="rounded-3xl self-center mx-auto shadow-sm"
          src="/carnet.jpg"
          alt="headshot de Mati Gomez"
          height={300}
          width={300}
          priority
        />
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none col-span-full">
          <h2 className="text-xl font-bold">Proyectos</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 mt-6 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <div key={link.name}>
                <a href={link.href} className="mt-4">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
                <p className="font-light">{link.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-xl font-bold mt-4 text-center col-span-full">
          Skills
        </h2>
        <div className="col-span-full flex flex-row justify-between">
          {skills.map((skill) => (
            <div key={skill.name} className="mt-4">
              {skill.image}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-2 sm:flex sm:flex-col bg-zinc-300  py-16">
        <div className="col-span-full mt-6">
          <h2 id="torre-de-mabel" className="text-xl font-bold mt-4 text-center">
            La Torre de Mabel
          </h2>
          <p className="mt-6">
            Esta es mi primera aplicación. Es un pequeño juego en el que
            introducimos palabras en un relato y despues vemos que relato nuevo
            construimos. Es verdaderamente sencilla pero deivertida.
          </p>
          <Image
            className="rounded-md self-center mx-auto"
            src="/mabel.png"
            alt="screenshot de la torre de mabel"
            width={1000}
            height={667}
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-2 sm:flex sm:flex-col bg-zinc-300  py-16">
        <div className="col-span-full mt-6">
          <h2 id="agur" className="text-xl font-bold mt-4 text-center">Agur</h2>
          <p className="mt-6">
            Este es un sitio de Ecommerce para un emprendimiento de ropa
            interior en mi ciudad. Es mi primer proyecto con React. Es bastante
            sencillo y aún sigue en desarrollo. Comenzó como un proyecto 100%
            React y de a poco fui incorporando frameworks como Material UI y
            Zustand para manejo del state. Tiene tambien una integración con
            MongoDB Atlas con la que accede a una lista de productos con sus
            imagenes colgadas en un bucket externo.
          </p>
          <Slideshow />
        </div>
      </div>
    </div>


  );
}
