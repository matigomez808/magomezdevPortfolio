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
    console.log(page);
    setPage((page) => {
      let newPage = page + 1;
      return newPage === 4 ? 0 : newPage;
    });
    resetIsShowing();
    console.log(isShowing);
  };

  return (
    <>
      <div className="flex flex-row justify-center mt-6">
        <button
          className="bg-[#6b401b] bg-opacity-55  py-3 px-5  shadow-md rounded-md"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div className="aspect-video w-[60rem] self-center mx-auto mt-6">
        <Transition
          
          show={isShowing}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Image
            className="rounded-md shadow-sm"
            src={galeria[page]}
            alt="Screenshot del proyecto agur"
            height={562}
            width={1000}
          />
        </Transition>
      </div>
    </>
  );
}

export default Slideshow;
