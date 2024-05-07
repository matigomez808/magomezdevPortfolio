import { useTorreStore } from "@/store/store"
import { Container } from "../UI/Container"
import { useEffect, useState } from "react";



export const PlayAgain = () => {


  const withBlanks = useTorreStore((state) => state.cuento.withBlanks);

  const prompts = useTorreStore((state) => state.prompts);
  const author = useTorreStore((state) => state.author);
  const allCuentos = useTorreStore((state) => state.allCuentos);
  const roll = useTorreStore((state) => state.roll);
  const cuento = useTorreStore((state) => state.cuento);
  const resetState = useTorreStore((state) => state.resetState);



  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      console.log("yay!");
    }
  }, [success]);

  const rebuiltStory = withBlanks.replace(
    /\$\{(\w+)(\d+)\}/g,
    (match, placeholder, numberString) => {
      const number = parseInt(numberString, 10); // Convert string to number
      const promptIndex = number - 1; // Adjust index for zero-based array

      // Handle potential errors (optional)
      if (promptIndex < 0 || promptIndex >= prompts.length) {
        return `[Missing prompt ${number}]`; // Or a different default value
      }

      return prompts[promptIndex] || "";
    }
  );

  // Esta funcion se encarga de guardar el cuento en la DB
  const handleSaveCreation = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const postData = {
        timestamp: Date.now(),
        originalStory: cuento.fullStory,
        originalTitle: cuento.title,
        story: rebuiltStory,
        author: author
      }
      const res = await fetch('/api/cuentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        throw new Error(`Failed to create cuento: ${res.status} ${res.statusText}`);
      }

      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Esta funcion se encarga de reiniciar el juego y el estado de la app
  const ButtonNextStep = () => {
    const nextStep = useTorreStore((state) => state.nextStep);

    const handleNextStep = () => {
      resetState();
      nextStep();
    }

    return (
      <button
        className="p-2 border-solid border-2 rounded-md border-[#006600] hover:bg-[#628862] hover:border-opacity-0"
        onClick={handleNextStep}
      >
        Reinciar
      </button>
    );
  };
  const torreState = localStorage.getItem('torreState')
  console.log(torreState)

  return (
    <Container>
      <p className="p-1 my-2 text-pretty ">{rebuiltStory}</p>
      
      <button
        className="p-2 border-solid border-2 rounded-md border-[#006600] hover:bg-[#628862] hover:border-opacity-0"
        onClick={handleSaveCreation}
        disabled={isLoading || success}
      >
        {isLoading ? "Guardando..." : success ? "Cuento guardado" : "Guardar Cuento"}
      </button>
      <ButtonNextStep />
    </Container>
  );
};

