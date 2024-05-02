import { Container } from "../UI/Container"
import { useTorreStore } from "@/store/store";
import { Prompt } from "./Prompt";
import { useEffect } from "react";

export const Prompting = () => {
  const prompts = useTorreStore((state) => state.prompts)
  const nextStep = useTorreStore((state) => state.nextStep)
  const cuento = useTorreStore((state) => state.cuento)

  console.log(prompts);
  console.log(cuento);

  const fields = () => {
    const queries = cuento.words.map((prompt) => prompt);
    
    return queries.map((query, idx) => {
      return <Prompt prop1={query.prompt} examples={query.examples} key={idx}  />
    })
  }
  useEffect(() => {
    const arr1 = prompts;
    const arr2 = cuento.words;
    arr1.length === arr2.length 
      ? nextStep()
      : null
  }, [prompts])
  return (
    <Container id="prompting-box" width="w-full" >
      <ul>
        {fields()}  
      </ul>
    </Container>
  )
}