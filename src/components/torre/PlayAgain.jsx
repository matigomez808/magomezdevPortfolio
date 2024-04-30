import { useTorreStore } from "@/store/store"
import { Container } from "../UI/Container"


export const PlayAgain = () => {

  const { cuento: { withBlanks }, prompts } = useTorreStore(
    (state) => ({ cuento: state.cuento, prompts: state.prompts })
  );

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
  return (
    <Container>
      <p className="p-1 my-2 text-pretty ">{rebuiltStory}</p>
      <p className="p-1 my-2 text-pretty ">Si quiere guardar su historia copie y pegue o envie una captura de pantalla</p>
      <p className="p-1 my-2 text-pretty ">F5 para reiniciar</p>
    </Container>
  );
};