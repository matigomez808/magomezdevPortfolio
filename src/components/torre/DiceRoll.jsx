import { useTorreStore } from "@/store/store"

import { useState } from "react"
import { motion } from "framer-motion"
import connectToDatabase from "@/lib/mongodb"
import { useEffect } from "react"


async function getData() {
  const res = await fetch('https://magomezdev-portfolio-git-dbtest-matigomez808s-projects.vercel.app/api/cuentos');

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }
  
  return res.json();
}

const NextStep = () => {
  const nextStep = useTorreStore((state) => state.nextStep)
  return (
    <button onClick={nextStep} >Avanzar</button>
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

  const handleStep = () => {
    nextStep();
  }

  return (
    <div>
      <button
        onClick={dSixRoll}>
        Tirar el dado
      </button>
      {roll !== 0 && <p>El dado dió {roll}. Su historia ya comenzó</p>}
      {cuento && <NextStep />}
    </div>
  )
}

export const DiceRoll = () => {
  const setAuthor = useTorreStore((state) => state.setAuthor)
  const author = useTorreStore((state) => state.author)
  const setAllCuentos = useTorreStore((state) => state.setAllCuentos)
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

  fetchData();
}, []);

useEffect(() => {
  console.log("author", author)
}, [author])

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
    <div className="flex flex-col">
      <p>Procedamos a escribir su historia.</p>
      {author === "" ? (
        <>
      <p>Primero firme
        <input
          disabled={disabled}
          onChange={(e) => handleFirma(e)}
          cols="20"
          rows="1"
          placeholder="su nombre"
          className="px-2 mx-2">
        </input></p>
      <button
        disabled={disabled}
        hidden={disabled}
        id="btnFirma"
        onClick={handleSubmitFirma}>
        Firmar
      </button></>) :
      <p>Hola {author}, escribamos su historia.</p>}
      
      <div className="h-[28.125rem] w-[56.25]">
        {author !== "" && <Die />}
      </div>

    </div>

  )
}