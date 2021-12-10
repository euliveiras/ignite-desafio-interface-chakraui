import { useBreakpointValue, Image, Flex, Text, Box, ResponsiveValue } from "@chakra-ui/react";

export const Banner = () => {
    const screenSize = useBreakpointValue({ base: "none", md: "none", lg: "block" });
    console.log(screenSize)
    return (
        <Flex
            w="100%"
            h={["14rem", "14rem", "20rem"]}
            bgImage="url('/Background.png')"
            bgSize="cover"
            align="center"
            position="relative"
        >
            <Box
                mx={[8, 8, 16]}
            >
                <Text
                    color="gray.50"
                    fontWeight="500"
                    fontSize={["x-large", "xx-large", "xxx-large"]}
                    lineHeight={["2rem", "2.8rem", "3.8rem"]}
                >
                    5 continentes,
                    <br />
                    infinitas possibilidades.
                </Text>
                <Text
                    mt={[2, 3, 4]}
                    color="#DADADA"
                    fontSize={["medium", "large"]}
                    lineHeight="1.5rem"
                >
                    Chegou a hora de sair do papel a viagem
                    que você sempre sonhou
                </Text>
            </Box>
            <Image
                src="/Airplane.png"
                alt="Imagem de um avião"
                position="absolute"
                right={16}
                bottom={-10}
                display={screenSize}
            />
        </Flex>
    )
}
