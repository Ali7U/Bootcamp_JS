import React from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Heading,
  Center,
  Text,
} from "@chakra-ui/react";

function Card() {
  const cards = [
    {
      title: "Riyadh",
      p: "Riyadh, Arabic Al-Riyadh, city and caTextital of Saudi Arabia. The city’s name is derived from the plural of the Arabic rawḍah, meaning gardens or meadows, so named for a natural fertility provided by its location at the juncture of Wadis Ḥanīfah and Al-Baṭḥāʾ. The spectacular sight of Riyadh from the air, illuminated in the evening by city lights, is reminiscent of its eponymous meadows; a bright sea of lights dot the desert as if fluorescent flower gardens have suddenly blossomed among its dark contours.",
      img: "https://content.r9cdn.net/rimg/dimg/7d/60/488863c5-city-35744-16935f1b104.jpg?crop=true&width=1366&height=768&xhint=1725&yhint=1010",
    },
    {
      title: "Makkah",
      p: "For many Muslims around the world, an opportunity to visit Makkah is the ultimate blessing. This is the holiest city in Islam: the birthplace of the Prophet Muhammad and the city where the Quran was first revealed to him. It’s also a fixture in observant Muslims’ daily lives, as they orient themselves toward Makkah to pray five times a day. The annual Hajj pilgrimage to the city is one of the five pillars of the faith, but millions of people journey to the city year-round to perform the shorter Umrah pilgrimage as well. The vast majority of the visitors are pilgrims who spend as much time as possible within the opulent complex of the Grand Mosque, which is a lively hive of activity at all hours of the day. But if you have time to spare once you’ve completed the required steps of the Umrah, the historic city has much to offer to complement your understanding of the region and the faith itself, from museums to landmarks that were backdrops to some of the most pivotal moments of Islam’s earliest days.",

      img: "https://media.istockphoto.com/id/1053727596/photo/close-up-of-kaaba-with-one-of-the-lights.jpg?s=612x612&w=0&k=20&c=UMszE6VvyHKw-OAj6_aqDbcVi1vzkSMC61nl1VhOS8g=",
    },
    {
      title: "Jeddah",
      p: " Travelers and traders have enjoyed Red Sea breezes in the open-minded port of Jeddah for centuries, and the city preserves their traces in its UNESCO-listed historic center. The rest of Jeddah is thoroughly modern, energized with a global mix of pilgrims on their way to nearby Makkah.",

      img: "https://media.radissonhotels.net/image/marketing-campaigns-mea/promotional/16256-142873-f73481859_3xl.jpg?impolicy=HighCarrousel",
    },
    {
      title: "Dammam",
      p: "Boasting endless views of the tranquil Arabian Gulf, Dammam is a modern metropolis that thrives on its coastal location. Although it is known for its lush green parks, airy waterfronts and sandy beaches, it is highly enjoyable in the winter, too, with daytime temperatures averaging in the low 20s Celsius during the day and around 10 degrees at night. The region also has a growing reputation as an arts, sports and entertainment destination. It is home to the kingdom’s first street-art exhibition, in Al Khobar’s Bayoonya district, and offers a range of cultural hubs and museums as well. Dip into science and innovation at SCITECH, or get your fill of pop culture at the quirky Taybeen and Alfelwah and Aljowharah museums. As evening falls, wander the walkways of Dammam's Share Al Hob souq, where you may encounter traders, performers and street musicians.",

      img: "https://media.istockphoto.com/id/1162594430/photo/beautiful-sunrise-view-at-dammam-al-khobar-corniche-saudi-arabia.jpg?s=612x612&w=0&k=20&c=ddDkRPoHcVjp2y_usR1CLH3Jqno0TiWjKrGUwGoaxYQ=",
    },
    {
      title: "Abha",
      p: "The scenic capital of the Asir province, Abha offers some amazing natural wonders that are meant to be experienced first-hand. Add in the great climate of the city and you are in for a delightful experience. Abha is located at a height of around 2,200 meters above sea level and is home to some of the tallest peaks in Saudi Arabia. Due to its milder climate, it is an increasingly popular destination both for locals and international tourists. The city is connected to Jeddah by a coastal highway and SAPTCO buses can be used to travel to and from other cities in the country. The Abha International Airport serves as the main airport of the city. Many international options are offered for tourists seeking to enjoy adventure, sightseeing, and all the great places to visit in Abha.",

      img: "https://www.flydubai.com/en/media/Abha_Rijal_Amlaa2_2560x960_tcm8-152106.jpg",
    },
  ];
  return (
    <Center
      _dark={{
        bg: "#7286D3",
      }}
    >
      <SimpleGrid columns={[2, null, 3]} spacing="40px" p={5}>
        {cards.map((item) => (
          <Box
            bg="#8EA7E9"
            height="350px"
            boxShadow={"0 0 15px "}
            borderRadius={"15px"}
            w={"300px"}
            textOverflow={"clip"}
            overflowX={"hidden"}
            key={item.title}
          >
            <Image
              boxSize="200px"
              w={"100%"}
              borderRadius={"15px 15px 0 0"}
              objectFit="cover"
              src={item.img}
            />
            <Heading textAlign={"center"} color={"#03001C"}>
              {item.title}
            </Heading>
            <Text fontSize="1xl" color={"FFF2F2"} p={2}>
              {item.p}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
}

export default Card;
