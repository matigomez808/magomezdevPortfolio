

import AnimatedLink from "./AnimatedLink";
import classNames from "classnames";

const btnStyle = classNames(
  "border-none font-bold text-xl px-4 rounded"
)


const Navigator = () => {
  return (
    <nav id="top" className="flex flex-row mx-auto max-w-7xl bg-zinc-300 pt-8 px-8 text-pretty bg-opacity-80 md:bg-opacity-100">

      <AnimatedLink href="/" className={btnStyle}>
        Home
      </AnimatedLink>
      <AnimatedLink href="/cv" className={btnStyle}>
        CV
      </AnimatedLink>
      <AnimatedLink href="/blog" className={btnStyle}>
        Blog
      </AnimatedLink>
    </nav>  
  )
}

export default Navigator;