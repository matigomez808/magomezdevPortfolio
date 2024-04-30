'use client'

import { Container } from "../UI/Container"
import { useTorreStore } from "@/store/store"
import { Bienvenide } from "./Bienvenide";
import { DiceRoll } from "./DiceRoll";
import { Prompting } from "./Prompting";
import { PlayAgain } from "./PlayAgain";
import { useEffect } from "react";


export const Torre = () => {
  const activeStep = useTorreStore((state) => state.activeStep);


  
  return (
    
    <Container height="min-h-screen">
      
      <h1 className="text-4xl font-semibold mx-auto py-8 ">Torre de Mabel</h1>
      {
        activeStep === 0 ? <Bienvenide />
          : activeStep === 1 ? <DiceRoll />
            : activeStep === 2 ? <Prompting />
              : activeStep === 3 ? <PlayAgain />
                : null
      }
    </Container>
  )
}