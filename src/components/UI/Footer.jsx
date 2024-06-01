
import Github from "../icons/Github.svg"
import Linkedin from "../icons/Linkedin.svg"
import Instagram from "../icons/Instagram.svg"
import Link from "next/link"
import { Container } from "../UI/Container"
import { Background } from "./Background"

export const Footer = () => {
  return (
    <>
      <Container 
        element="footer"
        className=""
        layout=""
        padding="p-4"
        border="border-t-2 border-mg-off-white"
        background="bg-glow-top-line">
        
        <Container 
          className="flex flex-row justify-evenly"
          layout=""
          padding="">
          <Container className="flex-1" layout="" padding=""></Container>
          <Link 
            href="https://github.com/matigomez808" 
            target="_blank" 
            className="px-2">
              <Github height={30} width={30} fill="white" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/matias-gomez-dev/" 
            target="_blank" 
            className="px-2">
              <Linkedin height={30} width={30} />
            </Link>
          <Link 
            href="https://www.instagram.com/matigomez808/" 
            target="_blank" 
            className="px-2">
            <Instagram height={30} width={30} />
          </Link>
          <Container className="flex-1" layout="" padding=""></Container>
        </Container>

      </Container>
    </>
  )

}