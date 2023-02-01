import React, { useState } from "react";
import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";

function Main() {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  } as const;

  const slides = [
    {
      img: "https://media.istockphoto.com/id/1373129580/photo/pepperoni-pizza.jpg?b=1&s=170667a&w=0&k=20&c=2IiD8mQ17TzgZ3ngzlwPi-AV7Fsu6Vcau2IyoIS_AEw=",
      label: "First Slide",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.jpg?b=1&s=170667a&w=0&k=20&c=pobf9fs5EsiNZMuyrq_44Y3LT8c4cz7_jmxvgQPclY4=",
      label: "Second Slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://media.istockphoto.com/id/1374703509/photo/bacon-cheeseburger-with-salad-in-bun-served-on-wooden-board.jpg?b=1&s=170667a&w=0&k=20&c=VlaHBK0S-d9XbMgH5Ooq1JFeV12s_VbavBWwRso1VSY=",
      label: "Third Slide",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      img: "https://media.istockphoto.com/id/1302436326/photo/junk-food-homemade-beef-burgers-on-vintage-wooden-background.jpg?b=1&s=170667a&w=0&k=20&c=ERNgnfbHhEQi8igA59Zt6SxM0U2Nhd4jC-abPSos3ts=",
      label: "Fourth Slide",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/chicken_lasagne_79722_16x9.jpg   ",
      label: "Fifth Slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      w="full"
    //   h={450}
    //   bg="#E3F6FF   "
      //   _dark={{ bg: "#3e3e3e" }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
                color="white"
              >
                <Text fontSize="2xl">{slide.label}</Text>
                <Text fontSize="lg">{slide.description}</Text>
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Main;
