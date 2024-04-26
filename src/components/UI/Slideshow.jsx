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

const galeria = [agur1, agur2, agur3, agur4];

function Slideshow() {
  const { t } = useTranslation();
  const [isShowing, setIsShowing] = useState(true);
  const [, resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 200);
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setIsShowing(false);
    setPage((page) => {
      let newPage = page + 1;
      return newPage === 4 ? 0 : newPage;
    });
    resetIsShowing();
  };

  return (
    <>
      <div className="flex flex-row justify-center"></div>
      <div className=" lg:aspect-video lg:w-[60rem] self-center mx-auto">
        <button onClick={handleNext}>
          <Transition
            show={isShowing}
            enter="transition-opacity ease-linear duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Image
              className="rounded-md shadow-sm mt-4"
              src={galeria[page]}
              alt="Screenshot del proyecto agur"
              height={562}
              width={1000}
            />
          </Transition>
        </button>
        <Suspense fallback='Loading...'>
          <p className="text-xs font-light">{t(`landing.gallery`)}</p>
        </Suspense>
      </div>
    </>
  );
}

export default Slideshow;
