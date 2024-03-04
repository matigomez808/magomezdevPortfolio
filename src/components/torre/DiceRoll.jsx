import { useTorreStore } from "@/store/store"
import { DiceTray } from "./DiceTray"
import { useState } from "react"


export const DiceRoll = () => {
  const setAuthor = useTorreStore((state) => state.setAuthor)
  const author = useTorreStore((state) => state.author)
  const [disabled, setDisabled] = useState(false);
  

  let authorString = ""

  const handleFirma = (e) => {
    authorString = e.target.value
  }

  const handleSubmitFirma = () => {
    setAuthor(authorString)
    setDisabled(true)
  }

  return (

    <div className="flex flex-col">
      <p>Procedamos a escribir su historia.</p>
      <p>Primero firme <input disabled={disabled} onChange={(e) => handleFirma(e)} cols="20" rows="1" placeholder="su nombre" className="text-gray-400"></input></p>
      <button disabled={disabled} hidden={disabled} id="btnFirma" onClick={handleSubmitFirma}>Firmar</button>
      <div className="h-[28.125rem] w-[56.25]">
        {author !== "" && <DiceTray />}
      </div>

    </div>

  )
}