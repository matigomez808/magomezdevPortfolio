import { Container } from "./Container"

export const Background = ({children}) => {
  return (
    <Container
    className=""
    background="bg-black"
    textColor=""
    padding="">
    <Container
      className=""
      background="bg-glow-purple-left"
      textColor=""
      padding="">
      <Container
        className=""
        background="bg-glow-purple-right"
        textColor=""
        padding="">
        {children}
        </Container>

    </Container>
    </Container>
  )
}