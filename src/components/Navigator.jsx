

import AnimatedLink from "./UI/AnimatedLink";
import classNames from "classnames";
import { Container } from "./UI/Container";

const btnStyle = classNames(
  "border-none font-bold text-xl px-4 rounded"
)


const Navigator = () => {
  return (
    <Container id="top" section="nav" padding="pt-8 px-8" layout="flex flex-row">
        <AnimatedLink href="/" className={btnStyle}>
          Home
        </AnimatedLink>
        <AnimatedLink href="/cv" className={btnStyle}>
          CV
        </AnimatedLink>
        <AnimatedLink href="/blog" className={btnStyle}>
          Blog
        </AnimatedLink>
    </Container>
  )
}

export default Navigator;