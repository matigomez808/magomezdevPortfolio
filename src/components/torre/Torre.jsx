'use client'

import { Container } from "../Container"
import {useTorreStore} from "@/store/store"
import { Bienvenide } from "./Bienvenide";
import { DiceRoll } from "./DiceRoll";
import { Prompting } from "./Prompting";
import { PlayAgain } from "./PlayAgain";
import classNames from "classnames";

export const Torre = () => {
  const activeStep = useTorreStore((state) => state.activeStep);
  const nextStep = useTorreStore((state) => state.nextStep);
  const roll = useTorreStore((state) => state.roll);
  const setRoll = useTorreStore((state) => state.setRoll);
  const prompts = useTorreStore((state) => state.prompts);
  const addPrompts = useTorreStore((state) => state.addPrompts);
  const author = useTorreStore((state) => state.author);
  const setAuthor = useTorreStore((state) => state.setAuthor);
  const currentValue = useTorreStore((state) => state.currentValue);
  const setCurrentValue = useTorreStore((state) => state.setCurrentValue)

  const handleSubmit = () => {
    addPrompts(currentValue);
    setCurrentValue("")  
  }
  const handleInputChange = (e) => {
    setCurrentValue(e.target.value);
  }
  const dSixRoll = () => {
    let newRoll = Math.floor(Math.random() * 6) + 1
    setRoll(newRoll);
  }
  const defineAuthor = () => {
    setAuthor('Mati Gomez')
  }
  const stepping = () => {  
    nextStep();
  }


  return (
    <Container>
      <h1 className="text-4xl font-semibold mx-auto py-8 ">Torre de Mabel</h1>
      {
        activeStep === 0 ? <Bienvenide /> 
        : activeStep=== 1 ? <DiceRoll />
        : activeStep === 2 ? <Prompting />
        : activeStep === 3 ? <PlayAgain /> 
        : null
      }
    </Container>
  )
}