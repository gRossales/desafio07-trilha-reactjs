import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Banner from "../components/Banner";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Slider from "../components/Slider";
import TravelTypes from "../components/TravelTypes";
import fakeAPIClient from "../services/fakeAPI";

export default function Home({data}) {
  return (
    <Flex direction="column" >
      <Header/>
      <Banner/>
      <TravelTypes/>
      <Divider/>
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5","14"]}
        fontSize={["lg","3xl","4xl"]}
      >Vamos nessa?<br/>Então escolha seu continente</Heading>
      <Slider data={data} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps  = async () => {
  const client = fakeAPIClient();
  const data = await client.get('continents');

  //console.log(data);

  return{props: {data}}
}