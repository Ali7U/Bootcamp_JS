import React from "react";
import { SimpleGrid, Box, Image, Heading } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";

export interface arrProducts {
  id: string;
  title: string;
  price: number;
  img: string;
  qty?: any;
}

export type prod = {
  products: [
    {
      id: string;
      title: string;
      price: number;
      img: string;
      qty?: any;
    }
  ];
};


function Cards(props: arrProducts[] & prod) {
  const { products } = props;
  const {onAdd}:any = props;

  
  return (
    <Center>
      <SimpleGrid columns={[2, null, 3]} spacing="40px" m={16}>
        {products.map((item) => (
          <Box
            height="350px"
            w={"100%"}
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            boxShadow={"0 0 10px"}
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            border={"1px solid"}
            borderRadius={15}
          >
            <Image
              w={"100%"}
              h={250}
              src={item.img}
              objectFit={"cover"}
              borderRadius={"15px 15px 0 0 "}
            />
            <Heading as="h1" size="l" textAlign={"center"}>
              {item.title}
            </Heading>
            <Heading as="h4" size="md" textAlign={"center"} p={2}>
              {item.price}$
            </Heading>
            <Box
              as="button"
              borderRadius="md"
              bg="#8889"
              color="white"
              px={4}
              w={"75%"}
              h={8}
              m={" auto 30px "}
              textAlign={"center"}
              onClick={() => onAdd(item)}
            >
              Add to cart
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
}

export default Cards;
