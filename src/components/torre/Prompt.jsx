import { useTorreStore } from "@/store/store";
import { useEffect } from "react";
import { useState } from "react";
import Tooltip from "../UI/Tooltip";


export const Prompt = ({ prop1 }, key) => {

  const prompts = useTorreStore((state) => state.prompts)
  const setPrompts = useTorreStore((state) => state.setPrompts)
  const [disabled, setDisabled] = useState(false)

  const saveWord = (event) => {
    event.preventDefault();
    const palabra = event.target.palabra.value.trim();
    if (palabra === "") {
      return;
    } else {
      setPrompts(palabra)
      setDisabled(true)
    }
  }
  return (
    <li key={key}>
      <form onSubmit={saveWord} className="flex flex-row flex-wrap justify-between my-4 py-2 border-zinc-400 shadow-sm rounded-md" >
        <Tooltip examples={examples[prop1]}>
          <label className="animate-fade-in w-full text-center">{prop1}</label>
        </Tooltip>
      
        <input className="animate-fade-in w-full p-1 my-2 rounded-md text-center" name="palabra" disabled={disabled} />
        
        <button className="animate-fade-in w-full p-2 border-solid border-2 rounded-md" type="submit" name="boton" disabled={disabled}>Guardar</button>
      </form>
    </li>
  )

}
