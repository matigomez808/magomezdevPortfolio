import { useTorreStore } from "@/store/store";
import { useEffect } from "react";
import { useState } from "react";
import Tooltip from "../UI/Tooltip";


export const Prompt = ({ prop1 , examples}, key) => {

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

  const ej = examples.join(", ");

  return (
    <li key={key}>
      <form onSubmit={saveWord} className="flex flex-row flex-wrap justify-between my-4  border-zinc-400 shadow-md rounded-md w-full mx-auto" >
        
          <label className="animate-fade-in text-center p-2">{prop1} <p className="animate-fade-in p-2 font-extralight">Por ejemplo: {ej}</p></label>
        
        <input className="animate-fade-in p-1 my-2 rounded-md text-center" name="palabra" disabled={disabled} />
        
        <button className="animate-fade-in p-2 border-solid border-2 rounded-md border-[#006600] hover:bg-[#628862] hover:border-opacity-0 box-border" type="submit" name="boton" disabled={disabled}>Guardar</button>
      </form>
    </li>
  )

}
