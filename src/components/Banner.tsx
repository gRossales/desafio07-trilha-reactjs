import { Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={[163, 255, 255, 335]}
      bgImage="url(/banner.jpg)"
      bgRepeat="no-repeat"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      justify="center"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        px={["4", "10", "16"]}
        maxW={1160}
      >
        <div>
          <Heading color="gray.50" fontWeight="500" fontSize={["xl", "2xl", "2xl", "3xl", "4xl"]} textAlign="left" >
            5 continentes,<br/> infinitas possibilidades.
          </Heading>
          <Text color="gray.100" fontSize={["xs", "xl"]} maxW={["100%", "100%", "100%", "550px"]} >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
        <Image
          w={["300px","300px","300px","480px"]}
          display={["none","none","block"]}
          src="/airplane.svg"
          alt="Avião amarelo voando com nuvens ao redor."
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}