import { Container } from "./Container"
import { WindowContainer } from "./WindowContainer"

export const FlareWindow = () => {
  return (
    <Container
      className="flex-grow relative"
      padding="ml-8"
      layout="">
      <WindowContainer green id="1" 
        styles="overflow-auto h-[230px] w-[450px] absolute inset-0 z-[1]">
      </WindowContainer>

      <WindowContainer green id="2" 
        styles="overflow-auto h-[230px] w-[450px] absolute inset-2 z-[2]">
      </WindowContainer>

      <WindowContainer green id="3" 
        styles="overflow-auto h-[230px] w-[450px] absolute inset-4 z-[3]">
      </WindowContainer>

      <WindowContainer green id="4" 
        styles="overflow-auto h-[230px] w-[450px] absolute inset-6 z-[4]">
      </WindowContainer>

      <WindowContainer green id="5" 
        styles="overflow-auto h-[230px] w-[450px] absolute inset-8 z-[5]">
      </WindowContainer>

      <WindowContainer green id="6" 
        styles="overflow-auto h-[230px] w-[450px] absolute inset-10 z-[6]">
      </WindowContainer>

      <WindowContainer green id="7" 
        styles="overflow-auto h-[230px] w-[450px] absolute inset-12 z-[7]">
      </WindowContainer>

      <WindowContainer green id="8" 
        styles="overflow-auto h-[230px] w-[450px] absolute inset-14 z-[8]">
      </WindowContainer>

      <WindowContainer green id="9" 
        styles="overflow-auto h-[230px] w-[450px] absolute inset-16 z-[9]">
      </WindowContainer>
      <WindowContainer green id="10"
        styles="overflow-auto h-[230px] w-[450px] absolute inset-18 z-[10]">
      </WindowContainer>
      <WindowContainer green id="11"   
        styles="overflow-auto h-[230px] w-[450px] absolute inset-20 z-[11]">
      </WindowContainer>
      <WindowContainer green id="12"           
        styles="overflow-auto h-[230px] w-[450px] absolute inset-22 z-[12]">
      </WindowContainer>
      <WindowContainer green id="13"            
        styles="overflow-auto h-[230px] w-[450px] absolute inset-24 z-[13]">
      </WindowContainer>
      <WindowContainer green id="14"           
        styles="overflow-auto h-[230px] w-[450px] absolute inset-26 z-[14]">
      </WindowContainer>
      <WindowContainer green id="15"           
        styles="overflow-auto h-[230px] w-[450px] absolute inset-28 z-[15]">
      </WindowContainer>
      <WindowContainer green id="16"           
        styles="overflow-auto h-[230px] w-[450px] absolute inset-30 z-[16]">
      </WindowContainer>

    </Container>
  )
}
