import { ChevronLeftIcon } from '@chakra-ui/icons';
import {Flex, Grid, Icon, Image} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Header(){
  const {asPath} = useRouter();
  const isHome = asPath === '/'; 

  return(
    <Flex as="header" w="100%" h={[50,100]}  px="4">
      <Grid h="100%" mx="auto" w="100%" maxW={1160} alignItems="center" justifyContent="center" templateColumns="repeat(3,1fr)" >
        {!isHome && (
          <Link href="/">
            <a>
              <ChevronLeftIcon fontSize={[20,40]} justifySelf="start" />
            </a>
          </Link>)}
        <Image src="/logo.svg" w={[81,184]} alt="Logo" justifySelf="center" gridColumn="2" />
      </Grid>
    </Flex>
  );
}