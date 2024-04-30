/* import "../app/(home)/globals.css"

export const Container = ({ children }) => {
  return (
    <section className="flex flex-col mx-auto sm:max-w-screen-sm max-h-screen md:max-w-screen-md lg:max-w-screen-lg bg-zinc-300 py-16 px-8 text-pretty bg-opacity-80 md:bg-opacity-100">
      {children}
    </section>
  )
} */

import "../../app/(home)/globals.css"


export const Container = ({
  children,
  id="",
  element: Element = "section",
  className = "mx-auto text-pretty",
  background = "bg-zinc-300 bg-opacity-80 md:bg-opacity-100",
  layout = "flex flex-col",
  padding = "py-16 px-8", // Adjustable padding,
  height = "",
  width = "sm:max-w-full md:max-w-[80%] lg:max-w-[80%]",
  ...otherProps // Capture additional props for future flexibility
}) => {

  return (
    <Element
      id={`${id}`}
      className={` ${className} ${layout} ${padding} ${background} ${height} ${width}`}
            
      {...otherProps} // Pass through any remaining props for future customization
    >
      {children}
    </Element>
  );
};
