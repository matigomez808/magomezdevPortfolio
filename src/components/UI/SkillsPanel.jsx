
import Java from "#/icons/javaIcon.svg";
import Js from "#/icons/jsIcon.svg";
import Mongo from "#/icons/mongoIcon.svg";
import Next from "#/icons/nextIcon.svg";
import Python from "#/icons/pythonIcon.svg";
import React from "#/icons/reactIcon.svg";
import Spring from "#/icons/springIcon.svg";
import Tailwind from "#/icons/tailwindIcon.svg";
import Django from "#/icons/django.svg"
import { Container } from "./Container";


// This component will display a grid of tiles with one icon on each
// In later interations of this component the idea is that each card is animated and has some info about the way x skill was used in y project


export const SkillsPanel = () => {


  return (
    <Container id="panel"
      className="flex flex-row"
      >

      <Container
        className="inline"
        layout="">
        <Js className="mx-auto w-auto h-[75px] "  />
      </Container>

      <Container
        className="inline"
        layout="">
        <Python className="mx-auto w-auto h-[75px] "  />
      </Container>
      <Container
        className="inline"
        layout="">
        <Java className="mx-auto w-auto h-[75px] "  />
      </Container>


      <Container
        className="inline"
        layout="">
        <React className="mx-auto w-auto h-[75px] "  />
      </Container>

      <Container
        className="inline"
        layout="">
        <Django className="mx-auto w-auto h-[75px] "  />
      </Container>
      <Container
        className="inline"
        layout="">
        <Spring className="mx-auto w-[150px] h-auto "  />
      </Container>

      <Container
        className="inline"
        layout="">
        <Mongo className="mx-auto w-[150px] h-auto "  />
      </Container>

      <Container
        className="inline"
        layout="">
        <Next className="mx-auto w-[150px] h-auto "  />
      </Container>

      <Container
        className="inline"
        layout="">
        <Tailwind className="mx-auto w-[150px] h-auto "  />
      </Container>

     

      


     
    </Container>
  )
}