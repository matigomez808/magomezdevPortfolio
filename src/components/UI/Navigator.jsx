'use client'

import AnimatedLink from "./AnimatedLink";

import { Container } from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import { Box } from "./Box";
import { Suspense } from "react";

const btnStyle = "border-none font-bold text-xl px-4 rounded"



const Navigator = () => {
  return (
    <Container id="navbar"
    element="nav"
    className=""
    background="bg-black"
    layout=""
    padding="">
      <Container
        id="top"
        element="nav"
        padding="py-4 px-8"
        layout="flex flex-row justify-between"
        fontFamily="font-heading"
        background="bg-gradient-to-t from-mg-green-glow to-20%"
        border="border-b border-mg-off-white-glow"
        height="h-[65px]" >
        <Container className="" padding="" layout="" fontFamily="font-heading">
        <AnimatedLink href="/" className={btnStyle}>
          HOME
        </AnimatedLink>
        <AnimatedLink href="/cv" className={btnStyle}>
          CV
        </AnimatedLink>
        <AnimatedLink href="/blog" className={btnStyle}>
          BLOG
        </AnimatedLink>
        </Container>
        <Suspense fallback='Loading...'>
          <LanguageSwitcher />
        </Suspense>
      </Container>
    </Container>
  )
}

export default Navigator;