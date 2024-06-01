import Image from "next/image"
import { Container } from "./Container"

export const Banner = ( {
  src, 
  alt, 
  imageStyles = "",
  border = "border-b border-mg-green",
  layout = "relative col-span-full w-full max-h-32 overflow-hidden" } ) => {

  return (
    <Container id="banner"
      element="div"
      background=""
      padding=""
      layout={` ${layout ? layout : ""}`}
      border={` ${border ? border:""}`}>    
      <Image 
        className={`filter blur-sm ${imageStyles}`}
        src={src} 
        alt={alt}
        sizes="100%"/>
    </Container>
  )
}
