"use client";

import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "@reactuses/core";
import { useTranslation } from "react-i18next";

import Image from "next/image";
import { Fragment, Suspense, useState } from "react";
import agur1 from "~/public/assets/agur/agur1.png";
import agur2 from "~/public/assets/agur/agur2.png";
import agur3 from "~/public/assets/agur/agur3.png";
import agur4 from "~/public/assets/agur/agur4.png";
import { Container } from "./Container";

const galeria = [agur1, agur2, agur3, agur4];

function Slideshow({ styles }) {
  const { t } = useTranslation();
  const [isShowing, setIsShowing] = useState(true);
  const [, resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 200);
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setIsShowing(false);
    setPage((prevPage) => (prevPage + 1) % galeria.length);
    resetIsShowing();
  };

  return (
    <>
      
        
        <Transition
          show={isShowing}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Image
          onClick={handleNext}
            className="max-h-[300px] w-auto"
            src={galeria[page]}
            alt="Screenshot del proyecto agur" 
            
            />
        </Transition>
      
      <Suspense fallback='Loading...'>
        <p className="text-xs font-light">{t(`landing.gallery`)}</p>
      </Suspense>
    </>
  );
}

export default Slideshow;
