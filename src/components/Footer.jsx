import ContainerSection from "./ContainerSection"
import Github from "./icons/Github.svg"
import Linkedin from "./icons/Linkedin.svg"
import Instagram from "./icons/Instagram.svg"
import Link from "next/link"

export const Footer = () => {
  return (
    
      <footer className="flex flex-col pb-2">
        <p className="text-center my-2">
          Mis links:
        </p>
        <div className="flex flex-row justify-evenly">
          <div className="flex-1"></div>
          <Link href="https://github.com/matigomez808" target="_blank" className="px-2"><Github height={30} width={30} /></Link>
          <Link href="https://www.linkedin.com/in/matias-gomez-dev/" target="_blank" className="px-2"><Linkedin height={30} width={30} /></Link>
          <Link href="https://www.instagram.com/matigomez808/" target="_blank" className="px-2"><Instagram height={30} width={30} /></Link>
          <div className="flex-1"></div>
        </div>
      </footer>
    
  )

}