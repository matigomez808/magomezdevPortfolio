import { useTorreStore } from "@/store/store";
import { useEffect } from "react";
import { useState } from "react";


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
      <form onSubmit={saveWord} className="flex flex-row justify-between my-2" >
        <input className="animate-fade-in  mr-2" name="palabra" disabled={disabled} />
        <label className="animate-fade-in self-center" >{prop1}</label>
        <button className="animate-fade-in ml-4 p-2" type="submit" name="boton" disabled={disabled}>Guardar</button>
      </form>
    </li>
  )

}
