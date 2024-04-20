import Link from "next/link"
import { Container } from "./UI/Container"


export const CurriculumVitae = () => {
  return (
    <>
      <Container>
        <h1 className="text-right font-light text-3xl">Matías Gómez</h1>
        <h2 className="text-right font-light mt-1">Desarrollador Fullstack</h2>
        <h3 className="text-right font-light mt-1">Santa Rosa, La Pampa, Argentina</h3>

        <h4 className="font-semibold text-lg mt-3">Acerca de mí</h4>
        <p className="text-pretty">
          Estoy familiarizado con el lenguaje
          Javascript y varias de sus librerías.
          También con Java y Spring Boot. Tengo aptitud para el desarrollo de servicios web,
          APIs, arquitectura REST, Clean Code y metodología Agile.
          Estudié inglés por diez años y culminé ese proceso de aprendizaje graduandome
          en el Tamaki College de Auckland durante un año de Intercambio Cultural con
          AFS.
          Soy versátil, adaptable y estoy encantado por el desarrollo de software. Cuento
          con un amplio bagaje de habilidades producto de desarrollarme profesionalmente
          en diversos campos. Siempre orientado a la resolución creativa y práctica de
          problemas.
        </p>

        <h4 className="font-semibold text-lg mt-3">Formación</h4>
        <ul>
          <li className="mt-2"><span className="font-semibold">2023 - 2024</span> - Autodidacta - Desarrollo Web Fullstack</li>
          <p className="text-right font-light mt-1">Javascript, ReactJs, NextJS, TailwindCSS, Material UI, Zustand</p>
          <li className="mt-2"><span className="font-semibold">2023</span> - Oracle Cloud Infrastructure</li>
          <p className="text-right font-light mt-1">Foundations Associate Certificate by Oracle Learn</p>
          <li className="mt-2"><span className="font-semibold">2022 - 2023</span> - Alura Latam - Egresado del programa Oracle Next Educación</li>
          <p className="text-right font-light mt-1">Desarrollo Backend con Java + Spring | Metodología Agile | Bases de datos SQL</p>
          <li className="mt-2"><span className="font-semibold">2021 </span> - Python for Everybody - Fundamentos de programación con Python 3</li>
          <p className="text-right font-light mt-1">Dr. Charles Severance's Py4E - FreeCodeCamp</p>
          <li className="mt-2"><span className="font-semibold">2009</span> - First Certificate of English - Cambridge {'(Nivel B2)'}</li>
        </ul>

        <h4 className="font-semibold text-lg mt-3">Experiencia</h4>
        <ul>
          <li className="mt-1"><span className="font-semibold">2011 - 2012</span> - Mesa de entrada Fundación Chadileuvú</li>
          <li className="mt-1"><span className="font-semibold">2013 - 2016</span>- Operador de radio en FM La Tosca, Radio Mitre y Radio Kermes</li>
          <li className="mt-1"><span className="font-semibold">2019 - 2019</span>- Co-Realizador de Vías al Olvido para CPE TV</li>
          <li className="mt-1"><span className="font-semibold">2020 - 2024</span>- Fotografía de producto para varios emprendimientos locales</li>
          <li className="mt-1"><span className="font-semibold">2021 - 2022</span>- Carpinteria artesanal</li>
        </ul>
      
        
        <Link
          className="rounded-xl bg-[#07876a] p-3 text-center mt-4"
          href="https://drive.google.com/file/d/1urk6A4kvURCqOif-gppgVfdnSseu7t07/view?usp=sharing"
          target="_blank">Ver la version en PDF</Link>
        
      </Container>
    </>
  )
}