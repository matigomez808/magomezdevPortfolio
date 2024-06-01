import { Container } from "./Container";
import Cross from "../icons/cross.svg";

// Este componente renderea una ventana.
// La version base no tiene cruz y tiene el fondo negro y bordes violetas
// Las opciones son con o sin cruz (cross)
// alternate quita borde exterior y hace un fondo transparente
// table debe ser usado junto con localeData. Presenta una tabla con los elementos recibidos - modifica bordes y colores.


export const WindowContainer = ({ children, cross, alternate, styles, id, green }) => {

  const altViewParentStyles = "bg-[#585858] bg-opacity-10";
  const altViewChildStyles = "h-[32px] border-b border-mg-purple flex flex-row justify-end"
  const greenViewParentStyles = "bg-black border-l border-b border-r border-mg-purple "
  const greenViewChildStyles = "h-[32px] border-t border-b border-mg-green flex flex-row justify-end"
  const baseViewParentStyles = "bg-black border border-mg-purple"
  const baseViewChildStyles = "h-[32px] border-b border-mg-purple flex flex-row justify-end"

  const parentStyles = alternate ? altViewParentStyles : green ? greenViewParentStyles : baseViewParentStyles;
  const childStyles = alternate ? altViewChildStyles : green ? greenViewChildStyles : baseViewChildStyles;

  return (
    <Container
      id={`${id}`}
      className={parentStyles + ` ${styles}`}
      
      padding="">
      <div className={childStyles}>
        <div className="position-relative h-[32px] w-[32px] border-l border-mg-purple"></div>
        <div className="position-relative h-[32px] w-[32px] border-l border-mg-purple"></div>
        <div className="position-relative h-[32px] w-[32px] border-l border-mg-purple">
          {cross && <Cross />}
        </div>

      </div>
      <div className={alternate ? `p-4` : ``}>
        {children}

      </div>

    </Container>
  );
}