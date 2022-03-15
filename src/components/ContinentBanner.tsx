import { Flex, Heading } from "@chakra-ui/react";

interface ContinentBannerProps{
    url: string;
    title: string;
}

export default function ContinentBanner({url,title}:ContinentBannerProps) {
  return (
    <Flex
      w="100%"
      h={[150, 300, 500]}
      px={["0","0","36"]}
      pt={["0","0","72"]}
      bgImage={url}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition={"center center"}
      align="center"
      justify="center"
    >
      <Heading w="100%" maxW="1160px" color="gray.50" fontWeight="600" fontSize={["1.75rem","5xl"]} textAlign={["center","center","left"]} >
        {title}
      </Heading>
    </Flex>
  )
}