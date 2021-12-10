import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { GridSection } from "../components/GridSection";
import { SwiperSection } from "../components/SwiperSection";


export default function Home() {
  return (
    <Box
      w="100vw"
      h="100vh"
    >
      <Banner/>
      <GridSection/>
      <SwiperSection/>
    </Box>
  );
};
