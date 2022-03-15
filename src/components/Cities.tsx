import { Grid, Heading } from "@chakra-ui/react";
import City, { CityProps } from "./City";


interface CitiesProps {
  cities: CityProps[]
}

export default function Cities({ cities }: CitiesProps) {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb={["5", "10"]} >Cidades +100</Heading>
      <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3,1fr)", "repeat(4,1fr)"]} gap={["20px", "45px"]} alignItems="center" justifyContent="center" px={["30px", "0"]} >
        {cities.map(city=>(<City key={`${city.city},${city.country}`} {...city} />))}
      </Grid>
    </>
  );
}