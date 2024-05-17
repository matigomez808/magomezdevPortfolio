
import "../../app/(home)/globals.css"

// Este contenedor dinamico por defecto, con el param clasName esta centrado y con el texto justificado(pretty).
// El fondo por defecto es Negro y sólido 
// TODO : theme switch (light/dark)
// Color por defecto del texto es theme.color.mg-off-white
// Font predefinida es main(Chivo)
// Font ref: main(Chivo) heading(RedHatDisplay) mono(FiraMono) variant(AnonymousPro)
// Layout es por defecto flex,
// Padding por defecto es responsivo, lg:8 md:4 sm:2
// Height y Width son en caso de necesidad especifica
// Glow y border son para los flares de UI



export const Container = ({
  children,
  id="",
  element: Element = "section",
  className = "mx-auto text-pretty",
  background = "bg-none",
  textColor = "text-mg-off-white",
  fontFamily = "font-main",
  layout = "flex flex-col",
  padding = "p-8 md:p-4 sm:p-2", // Adjustable padding,
  height = "",
  width = "",
  glow = "",
  border = "",
  ...otherProps // Capture additional props for future flexibility
}) => {

  return (
    <Element
      id={`${id}`}
      className={` ${className} ${background} ${textColor} ${fontFamily} ${layout} ${padding} ${height} ${width} ${glow} ${border} `}
            
      {...otherProps} // Pass through any remaining props for future customization
    >
      {children}
    </Element>
  );
};


