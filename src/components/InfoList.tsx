import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, Heading, Text, Tooltip } from "@chakra-ui/react";

export interface infoListProps {
  countries: number;
  languages: number;
  cities: number;
  citiesList: string;
}

export default function InfoList({ countries, languages, cities, citiesList }) {

  return (
    <Flex align="center" justify="space-between">
      <Flex direction="column">
        <Heading color="yellow.500" fontSize={["2xl", "5xl"]} fontWeight="600" >{countries}</Heading>
        <Text fontSize={["lg", "2xl"]} fontWeight={["400", "600"]} color="gray.700" >países</Text>
      </Flex>
      <Flex direction="column">
        <Heading color="yellow.500" fontSize={["2xl", "5xl"]} fontWeight="600" >{languages}</Heading>
        <Text fontSize={["lg", "2xl"]} fontWeight={["400", "600"]} color="gray.700" >linguas</Text>
      </Flex>
      <Flex direction="column">
        <Heading color="yellow.500" fontSize={["2xl", "5xl"]} fontWeight="600" >{cities}</Heading>
        <Text fontSize={["lg", "2xl"]} fontWeight={["400", "600"]} color="gray.700" >cidades +100 <Tooltip label={citiesList}><InfoOutlineIcon w={13} color="gray.300" /></Tooltip> </Text>
      </Flex>
    </Flex>
  );
}