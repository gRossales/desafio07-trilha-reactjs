import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps{
  icon:string;
  text:string;
}

export default function TravelType({icon, text}: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    base:false,
    sm:true,
  })

  return(
    <Flex direction={["row","column"]} align="center" justify="center">
      {isMobile ? <Image src={`/icons/${icon}.svg`} alt={`${icon}`}  w={85} h={85} mb="6"/> : <Text color="yellow.500" fontSize="4xl" mr="2" >•</Text> }
      <Text fontWeight="600" color="gray.700" fontSize={["md","xl","2xl"]} >{text}</Text>
    </Flex>
  );
}