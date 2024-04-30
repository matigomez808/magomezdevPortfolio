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
      <ul>
        {fields()}  
      </ul>
    </Container>
  )
}