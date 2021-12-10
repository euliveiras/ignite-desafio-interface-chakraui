import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

type GridItemProps = {
    src: string;
};

export const GridItem: React.FC<GridItemProps> = ({ src, children }) => {
    const displayImage = useBreakpointValue({
        sm: false,
        md: true,
    })

    if (displayImage) {
        return (
            <Flex flexDirection="column" justify="center" align="center" textAlign="center">
                <Image src={src} alt="uma taça" boxSize="80px" />
                <Text
                    fontWeight="600"
                    color="#47585B"
                    fontSize="1.5rem"
                    padding="0.8rem"
                >
                    {children}
                </Text>
            </Flex>
        );
    } else {
        return (
            <Flex justify="center" align="center">
                <Box boxSize="0.7rem" borderRadius="full" bg="orange.300" marginInline="0.5rem" />
                <Text
                    fontWeight="600"
                    color="#47585B"
                    fontSize="1.2rem"
                    paddingBlock="0.8rem"
                >
                    {children}
                </Text>
            </Flex>
        );
    };
};