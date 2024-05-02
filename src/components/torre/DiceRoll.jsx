import { useTorreStore } from "@/store/store"

import { useState } from "react"
import { motion } from "framer-motion"
import connectToDatabase from "@/lib/mongodb"
import { useEffect } from "react"


async function getData() {
  const res = await fetch('/api/cuentos');

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

const NextStep = () => {
  const nextStep = useTorreStore((state) => state.nextStep)
  return (
    <button className="p-2 border-solid border-2 rounded-md border-[#006600] hover:bg-[#628862] hover:border-none" onClick={nextStep} >Avanzar</button>
  )
}

const Die = () => {
  const setRoll = useTorreStore((state) => state.setRoll)
  const roll = useTorreStore((state) => state.roll)
  const setCuento = useTorreStore((state) => state.setCuento)
  const allCuentos = useTorreStore((state) => state.allCuentos)
  const cuento = useTorreStore((state) => state.cuento)


  const dSixRoll = () => {
    let newRoll = Math.floor(Math.random() * 6) + 1
    setRoll(newRoll)
    let pick = allCuentos[newRoll]
    setCuento(pick);
    /*     console.log(pick.title)
        console.log(pick.fullStory)
        console.log(pick.words) */
  }
  useEffect(() => {
    
  }, [cuento])

  return (
    <div>
      <button
        className="p-2 border-solid border-2 rounded-md border-[#006600] hover:bg-[#628862] hover:border-none"
        onClick={dSixRoll}>
        Tirar el dado
      </button>
      {roll !== 0 && <p className="p-2 my-2">El dado dió {roll}. Su historia ya comenzó</p>}
      {cuento && <NextStep />}
    </div>
  )
}

export const DiceRoll = () => {
  const setAuthor = useTorreStore((state) => state.setAuthor)
  const author = useTorreStore((state) => state.author)
  const setAllCuentos = useTorreStore((state) => state.setAllCuentos)
  const allCuentos = useTorreStore((state) => state.allCuentos)
  const setError = useTorreStore((state) => state.setError)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const cuentos = await getData();
        setAllCuentos(cuentos);
      } catch ({ message }) {
        setError(message);
      }
    };
    if (allCuentos === null) {
      fetchData();
    }
  }, []);

  let authorString = ""

  let disabled = authorString !== ""

  const handleFirma = (e) => {
    authorString = e.target.value
  }

  const handleSubmitFirma = () => {
    if (authorString !== "") {
      setAuthor(authorString)
    }

  }

  return (
    <div className="flex flex-col text-center">
      <p className="my-2">Procedamos a escribir su historia.</p>
      {author === "" ? (
        <>
          <p className="px-2 my-2 mx-auto text-center">Primero firme</p>
          <input
            disabled={disabled}
            onChange={(e) => handleFirma(e)}
            cols="20"
            rows="1"
            placeholder="su nombre"
            className="px-2 my-2 mx-auto text-center">
          </input>
          <button
            disabled={disabled}
            hidden={disabled}
            id="btnFirma"
            onClick={handleSubmitFirma}
            className="px-2 my-2 mx-auto text-center border-solid border-2 rounded-md border-[#006600] hover:bg-[#628862] hover:border-none">
            Firmar
          </button>
        </>) :
        <p className="px-2 my-2 mx-auto text-center">Hola {author}, escribamos su historia.</p>}

      <div className="h-[28.125rem] w-[56.25]">
        {author !== "" && <Die />}
      </div>

    </div>

  )
}