import React from "react";
import { SimpleGrid, Box, Image, Heading, Center } from "@chakra-ui/react";

function Card() {
  return (
    <Center
      _dark={{
        bg: "#3e3e3e",
      }}
    >
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <Box bg="#777" height="300px" borderRadius={"15px"} w={"300px"}>
          <Image
            boxSize="200px"
            w={"100%"}
            borderRadius={"15px 15px 0 0"}
            objectFit="cover"
            src="https://content.r9cdn.net/rimg/dimg/7d/60/488863c5-city-35744-16935f1b104.jpg?crop=true&width=1366&height=768&xhint=1725&yhint=1010"
          />
          <Heading textAlign={"center"}>Riyadh</Heading>
        </Box>
        <Box bg="#777" height="300px" borderRadius={"15px"} w={"300px"}>
          <Image
            boxSize="200px"
            w={"100%"}
            borderRadius={"15px 15px 0 0"}
            objectFit="cover"
            src="https://media.istockphoto.com/id/1053727596/photo/close-up-of-kaaba-with-one-of-the-lights.jpg?s=612x612&w=0&k=20&c=UMszE6VvyHKw-OAj6_aqDbcVi1vzkSMC61nl1VhOS8g="
          />
          <Heading textAlign={"center"}>Makkah</Heading>
        </Box>
        <Box bg="#777" height="300px" borderRadius={"15px"} w={"300px"}>
          <Image
            boxSize="200px"
            w={"100%"}
            borderRadius={"15px 15px 0 0"}
            objectFit="cover"
            src="https://media.radissonhotels.net/image/marketing-campaigns-mea/promotional/16256-142873-f73481859_3xl.jpg?impolicy=HighCarrousel"
          />
          <Heading textAlign={"center"}>Jeddah</Heading>
        </Box>
        <Box bg="#777" height="300px" borderRadius={"15px"} w={"300px"}>
          <Image
            boxSize="200px"
            w={"100%"}
            borderRadius={"15px 15px 0 0"}
            objectFit="cover"
            src="https://media.istockphoto.com/id/1162594430/photo/beautiful-sunrise-view-at-dammam-al-khobar-corniche-saudi-arabia.jpg?s=612x612&w=0&k=20&c=ddDkRPoHcVjp2y_usR1CLH3Jqno0TiWjKrGUwGoaxYQ="
          />
          <Heading textAlign={"center"}>Dammam</Heading>
        </Box>
        <Box bg="#777" height="300px" borderRadius={"15px"} w={"300px"}>
          <Image
            boxSize="200px"
            width={"100%"}
            borderRadius={"15px 15px 0 0"}
            objectFit="cover"
            src="https://media.istockphoto.com/id/1271307757/photo/panorama-of-beautiful-historical-houses-in-rijal-almaa-heritage-village.jpg?s=612x612&w=0&k=20&c=RYNdqNgswQumhPjPhoNkFSvFutXo6haGqVciNgIOpek="
          />
          <Heading textAlign={"center"}>Abha</Heading>
        </Box>
      </SimpleGrid>
    </Center>
  );
}

export default Card;
