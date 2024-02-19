import { Tab } from "@headlessui/react"
import Landing from "./Landing"
import { CurriculumVitae } from "./CurriculumVitae"

export const Tabs = () => {
  return (
    <Tab.Group >
      <Tab.List
      as="nav"
      className="mx-auto max-w-7xl bg-zinc-300 pt-8 px-8 text-pretty ">
        <Tab className="border-none font-bold text-xl px-4 focus:outline-none focus:ring-0 focus:bg-[#07876a] focus:bg-opacity-60 rounded-lg">Home</Tab>
        <Tab className="border-none font-bold text-xl px-4 focus:outline-none focus:ring-0 focus:bg-[#07876a] focus:bg-opacity-60 rounded-lg">CV</Tab>
        
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><Landing/></Tab.Panel>
        <Tab.Panel><CurriculumVitae /></Tab.Panel>
        
      </Tab.Panels>
    </Tab.Group>
  )
}
