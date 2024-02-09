"use client";

import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "@reactuses/core";

import Image from "next/image";
import { Fragment, useState } from "react";
import agur1 from "~/public/agur1.png";
import agur2 from "~/public/agur2.png";
import agur3 from "~/public/agur3.png";
import agur4 from "~/public/agur4.png";

const galeria = [agur1, agur2, agur3, agur4];

function Slideshow() {
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
      <div className="flex flex-row justify-center mt-6">

      </div>
      <div className=" lg:aspect-video lg:w-[60rem] self-center mx-auto mt-6">
        <button
          
          onClick={handleNext}>
          <Transition

            show={isShowing}
            enter="transition-opacity ease-linear duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0" >

            <Image
              className="rounded-md shadow-sm"
              src={galeria[page]}
              alt="Screenshot del proyecto agur"
              height={562}
              width={1000} />

          </Transition>
        </button>
      </div>
    </>
  );
}

export default Slideshow;
