import { Center, Box, Image } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Center
            w="100%"
            h="5rem"
        >
            <Box>
                <Image
                    src="/Logo.png"
                    alt="imagem da logo"
                />
            </Box>
        </Center>
    )
}