import { Box, Show } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import React from "react";

function Nav() {
  return (
    <>
      <Show >
        <SimpleGrid
          columns={[3]}
          alignItems={"center"}
          height={350}
          spacing="40px"
        >
          <Box bg="tomato" width={250} height="80px">
            <Image src="https://cdn.vox-cdn.com/thumbor/E0y1uDHe5lpgfNWol1Bs5fkm7LQ=/0x0:5773x3429/1200x675/filters:focal(2516x482:3438x1404)/cdn.vox-cdn.com/uploads/chorus_image/image/71814090/1438840128.0.jpg" />
          </Box>
          <Box bg="tomato" width={250} height="80px">
            <Image src="https://cdn.vox-cdn.com/thumbor/E0y1uDHe5lpgfNWol1Bs5fkm7LQ=/0x0:5773x3429/1200x675/filters:focal(2516x482:3438x1404)/cdn.vox-cdn.com/uploads/chorus_image/image/71814090/1438840128.0.jpg" />
          </Box>
          <Box bg="tomato" width={250} height="80px">
            <Image src="https://cdn.vox-cdn.com/thumbor/E0y1uDHe5lpgfNWol1Bs5fkm7LQ=/0x0:5773x3429/1200x675/filters:focal(2516x482:3438x1404)/cdn.vox-cdn.com/uploads/chorus_image/image/71814090/1438840128.0.jpg" />
          </Box>
          <Box bg="tomato" width={250} height="80px">
            <Image src="https://cdn.vox-cdn.com/thumbor/E0y1uDHe5lpgfNWol1Bs5fkm7LQ=/0x0:5773x3429/1200x675/filters:focal(2516x482:3438x1404)/cdn.vox-cdn.com/uploads/chorus_image/image/71814090/1438840128.0.jpg" />
          </Box>
          <Box bg="tomato" width={250} height="80px">
            <Image src="https://cdn.vox-cdn.com/thumbor/E0y1uDHe5lpgfNWol1Bs5fkm7LQ=/0x0:5773x3429/1200x675/filters:focal(2516x482:3438x1404)/cdn.vox-cdn.com/uploads/chorus_image/image/71814090/1438840128.0.jpg" />
          </Box>
        </SimpleGrid>
      </Show>
    </>
  );
}

export default Nav;
