import { Center, Divider, Flex, Box, Text, SimpleGrid as ChakraGrid } from "@chakra-ui/react";
import { GridItem } from "./GridItem";

export const SimpleGrid = () => {
    return (<>
        <ChakraGrid
            padding={["2rem", "5rem"]}
            minChildWidth="5rem"
            spacing="5rem"
        >
            <GridItem src="/Cup.png">
                vida noturna
            </GridItem>

            <GridItem src="/Beach.png">
                praia
            </GridItem>

            <GridItem src="/Building.png">
                moderno
            </GridItem>

            <GridItem src="/House.png">
                clássico
            </GridItem>

            <GridItem src="/Earth.png">
                e mais...
            </GridItem>
        </ChakraGrid>
        <Box
            textAlign="center"
        >
            <Divider m="5rem auto 3rem" orientation="horizontal" w="12rem" h="1rem" borderColor="black" />
            <Text
                fontSize="xxx-large"
                fontWeight="500"
                color="#47585B"

            >
                Vamos nessa?
            </Text>
            <Text
                fontSize="xxx-large"
                fontWeight="500"
                color="#47585B"
            >
                Então escolha seu destino
            </Text>
        </Box>
    </>
    )
}