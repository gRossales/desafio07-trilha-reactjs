import { GetStaticPaths, GetStaticProps } from "next";
import { Flex } from "@chakra-ui/react";
import Cities from "../../components/Cities";
import Content from "../../components/Content";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";
import fakeAPIClient from "../../services/fakeAPI";



export default function Continent({bannerData, contentData, citiesData}) {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner {...bannerData} />
      <Flex direction="column" maxW={1160} mx="auto" mb="10" px={{ base: "4", xl: "0" }}>
        <Content {...contentData} />
        <Cities {...citiesData} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = fakeAPIClient();
  const res = await client.get('continents');

  const paths = res.map(continent => ({ params: { slug: continent.slug } }));

  return {
    paths,
    fallback: false,
    revalidate: 10*60 // 10 minutes
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;

  const client = fakeAPIClient();
  const data = await client.getContinentByUID(String(slug));
  const response = data[0];

  const bannerData = {
    url: response.bannerImage,
    title: response.name
  }
  const contentData = {
    description: response.description,
    infoData: {
      countries: response.countries,
      languages: response.languages,
      cities: response.cities,
      citiesList: response.citiesList,
    }
  }

  const citiesData = {
    cities: response.cities100
  }

  return {
    props: {
      bannerData,
      contentData,
      citiesData
    }
  }

}