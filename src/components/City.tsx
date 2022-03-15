import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export interface CityProps{
  city: string;
  country: string;
  thumbnail: string;
  flag: string;
};

export default function City({city, country, thumbnail, flag}){
  return(
    <Box borderRadius="4px" overflow="hidden" >
      <Image src={thumbnail} alt={`${city} image`} h="173px" w="100%"/>
      <Flex border="1px" borderColor="yellow.300" borderTop="0" borderBottomRadius="4px" p="6" justify="space-between" align="center" >
        <Flex direction="column">
          <Heading fontWeight="600" fontSize="xl" >{city}</Heading>
          <Text fontWeight="500" fontSize="md" color="gray.500" mt="3" >{country}</Text>
        </Flex>
        <Image src={flag} alt={`${country} flag`} w={30} h={30} borderRadius="50%" />
      </Flex>
    </Box>
  )
}