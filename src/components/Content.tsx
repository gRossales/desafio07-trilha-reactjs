import { Grid, Text } from "@chakra-ui/react";
import InfoList, { infoListProps as infoData } from "./InfoList";

interface ContentProps{
  description: string;
  infoData: infoData;
}

export default function Content({description, infoData}:ContentProps){
  return(
    <Grid templateColumns={{base:"1fr",lg:"1fr 1fr", xl:"1.2fr 1fr"}} gap={[5,10,16,20]} my={["8","20"]} >
      <Text fontWeight="400" fontSize={["sm","xl","xl", "2xl"]} textAlign="justify" 
      >{description}</Text>
      <InfoList {...infoData}/>
    </Grid>
  );
}
