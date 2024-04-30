import { Container } from "../UI/Container"
import { useTorreStore } from "@/store/store";
import { Prompt } from "./Prompt";
import { useEffect } from "react";

export const Prompting = () => {
  const prompts = useTorreStore((state) => state.prompts)
  const nextStep = useTorreStore((state) => state.nextStep)
  const cuento = useTorreStore((state) => state.cuento)

  const handleStep = () => {
    nextStep();
  }

  const fields = () => {
    const queries = cuento.words;
    return queries.map((query, idx) => {
      return <Prompt prop1={query} key={idx}  />
    })
  }
  useEffect(() => {
    const arr1 = prompts;
    const arr2 = cuento.words;
    arr1.length === arr2.length 
      ? nextStep()
      : console.log(arr1)
  }, [prompts])
  return (
    <Container id="prompting-box" width="w-full" >
      <p>A continuación se le pide que ingrese algunas palabras. En caso de necesitar un ejemplo puede poner su cursor sobre el tipo de palabra que desee.</p>
      <ul>
        {fields()}  
      </ul>
    </Container>
  )
}