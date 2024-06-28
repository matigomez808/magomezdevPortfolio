import { Container } from "./Container";
import Cross from "../icons/cross.svg";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "@/lib/i18n";

export const TableContainer = ({ children, localeData }) => {
  const { t, i18n } = useTranslation();

  return (
    <Container id="ui-table"
      background="bg-indigo-400 bg-opacity-10"
      className="overflow-hidden-"
      padding=""
      border="border-l border-b border-r border-mg-purple">
      <div id="barra-de-estado"
        className="h-[32px] border-b border-t border-mg-green flex flex-row justify-end">
        <div className="position-relative h-[32px] w-[32px] border-l  border-mg-purple"></div>
        <div className="position-relative h-[32px] w-[32px] border-l  border-mg-purple"></div>
        <div className="position-relative h-[32px] w-[32px] border-l  border-mg-purple">
        </div>

      </div>
      <Container id="cuerpo"
        
        padding="">

          {localeData.map((item, index) => (
            <Container id="row" key={index} padding="" className="text-center inline-flex" layout="" border={index >= localeData.length-1 ? `` : `border-b border-mg-off-white`}>
              <Container key={index} padding="" className=" text-sm leading-10 mx-2 basis-2/12 self-center">{item.date}</Container>
              <Container key={index} padding="" className="mx-2 leading-10  basis-6/12 self-center">{item.title}</Container>
              <Container key={index} padding="" className="mx-2 leading-10 text-sm font-mono basis-4/12 self-center">{item.description}</Container>
            </Container>
          ))}
        
      </Container>

    </Container>
  );

}

