import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";

export default function App() {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1583059439362-e5e1d81de154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8anV2ZW50dXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      img: "https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/111981/juventus_stadium.jpg?w=608&ar=default&fit=crop&crop=faces,edges&auto=format",
    },
    {
      img: "https://www.juventus.com/images/image/private/t_editorial_landscape_8_desktop_mobile/v1640955501/dev/rc2sulgqi1uxwgmndymf.jpg",
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
    <Center>
      <Flex
        w="60%"
        //   bg="#edf3f8"
        //   _dark={{ bg: "#3e3e3e" }}
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
    </Center>
  );
}
