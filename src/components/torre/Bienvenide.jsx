import { useTorreStore } from "@/store/store"


export const Bienvenide = () => {

  const nextStep = useTorreStore((state) => state.nextStep);

  const handleEntrar = () => {
    nextStep();
  }

  

  return (
    <div className="flex flex-col">
      <p className="font-light text-pretty py-4 text-center">
        Bienvenido  la torre de mabel. Una pequeña experiencia narrativa desarrollada originalmente en Python como mi primer programa interactivo. Ahora presentado en React como parte de mi portfolio.
        La idea original sale, como muchas otras, de un video de youtube de FreeCodeCamp de proyectos para novatos. Esta es mi version de madlibs.
      </p>
      <section>
        <h4 className="text-2xl font-semibold py-4">Instrucciones</h4>
        <p className="font-light font italic py-2">El juego tiene tres etapas</p>
        <oi>
          <li className="list-decimal">Se selecciona un número al azar a través de una tirada de un dado. Ahí se selecciona una historia de la base de datos.</li>
          <li className="list-decimal">El usuario debe proveer una serie de palabras como: sustantivo, verbo o adjetivo.</li>
          <li className="list-decimal">Se introducen las palabras provistas por el usuario en el texto original y se lee la nueva y descabellada historia generada.</li>
        </oi>
      </section>
      <div className=" flex justify-center">

        <form action={handleEntrar}>
          <button className="text-3xl font-bold py-8 px-16 mt-4 mx-auto p-2 text-center  border-solid border-2 rounded-md border-[#006600] hover:bg-[#628862] hover:border-none">
            Entrar a la torre
          </button>
        </form>
       
      </div>
    </div>
  )
}