'use client'

import AnimatedLink from "./AnimatedLink";
import classNames from "classnames";
import { Container } from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import { Box } from "./Box";
import { Suspense } from "react";

const btnStyle = classNames(
  "border-none font-bold text-xl px-4  rounded"
)


const Navigator = () => {
  return (
    <Container id="top" element="nav" padding="pt-4 pb-4 px-8" layout="flex flex-row" height="bg-[#a1a19a] border-b-2 border-[#006600] rounded drop-shadow-md">
      <div className=""></div>
      <AnimatedLink href="/" className={btnStyle}>
        Home
      </AnimatedLink>
      <AnimatedLink href="/cv" className={btnStyle}>
        CV
      </AnimatedLink>
      <AnimatedLink href="/blog" className={btnStyle}>
        Blog
      </AnimatedLink>
      <Box className="flex-grow" />
      <Suspense fallback='Loading...'>
        <LanguageSwitcher />
      </Suspense>
    </Container>
  )
}

export default Navigator;