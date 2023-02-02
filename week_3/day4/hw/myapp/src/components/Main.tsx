import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Main() {
  const slides = [
    {
      img: "https://content.r9cdn.net/rimg/dimg/7d/60/488863c5-city-35744-16935f1b104.jpg?crop=true&width=1366&height=768&xhint=1725&yhint=1010",
    },
    {
      img: "https://media.istockphoto.com/id/1053727596/photo/close-up-of-kaaba-with-one-of-the-lights.jpg?s=612x612&w=0&k=20&c=UMszE6VvyHKw-OAj6_aqDbcVi1vzkSMC61nl1VhOS8g=",
    },
    {
      img: "https://media.radissonhotels.net/image/marketing-campaigns-mea/promotional/16256-142873-f73481859_3xl.jpg?impolicy=HighCarrousel",
    },
    {
      img: "https://media.istockphoto.com/id/1162594430/photo/beautiful-sunrise-view-at-dammam-al-khobar-corniche-saudi-arabia.jpg?s=612x612&w=0&k=20&c=ddDkRPoHcVjp2y_usR1CLH3Jqno0TiWjKrGUwGoaxYQ=",
    },
    {
      img: "https://media.istockphoto.com/id/1271307757/photo/panorama-of-beautiful-historical-houses-in-rijal-almaa-heritage-village.jpg?s=612x612&w=0&k=20&c=RYNdqNgswQumhPjPhoNkFSvFutXo6haGqVciNgIOpek=",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden">
        <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                whiteSpace="nowrap"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
