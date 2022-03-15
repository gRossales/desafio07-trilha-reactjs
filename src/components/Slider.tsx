import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Pagination, Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Continent{
  id: number;
  slug: string;
  name: string;
  summary: string;
  carouselURL: string;
}

interface SliderProps{
  data: Continent[];
}

export default function Slider({ data }:SliderProps) {
  return (
    <Flex w="100%" maxW={1240} mx="auto" mb={["5", "10"]} h={[250, 450]}>
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        style={{ width: "100%", flex: '1' }}
      >
        {data.map(continent => (
          <SwiperSlide key={continent.name} >
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={continent.carouselURL}
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`/continent/${continent.slug}`}>
                <a>
                  <Heading
                    fontWeight="700"
                    color="gray.50"
                    fontSize={["3xl", "4xl", "5xl"]} >{continent.name}</Heading>
                  <Text fontWeight="700" color="gray.100" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]} >{continent.summary}</Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}