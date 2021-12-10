import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import { Text, Box } from "@chakra-ui/react";

import "swiper/css/bundle"

export const SwiperSection = () => {
    return (
        <Box
            sx={{
                "--swiper-theme-color": "#FFBA08"
            }}
        >
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{
                    height: "30rem",
                    width: "70%",
                    margin: "5% auto",
                }}
            >
                <SwiperSlide
                >
                    <Box
                        w="100%"
                        h="100%"
                        position="relative"
                        bgImage="/rj.jpg"
                        isolation="isolate"
                        _after={{
                            content: "''",
                            position: "absolute",
                            inset: 0,
                            zIndex: -1,
                            bg: "black",
                            opacity: "0.5"
                        }}
                    >
                        <Box
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            fontWeight="bold"
                            color="#F5F8FA"
                            textAlign="center"
                            whiteSpace="nowrap"
                        >
                            <Text fontSize="3rem">Rio de Janeiro</Text>
                            <Text fontSize="1.3rem">Cidade Maravilhosa</Text>
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box
                        w="100%"
                        h="100%"
                        position="relative"
                        bgImage="/machupichu.jpg"
                        isolation="isolate"
                        _after={{
                            content: "''",
                            position: "absolute",
                            inset: 0,
                            zIndex: -1,
                            bg: "black",
                            opacity: "0.5"
                        }}
                    >
                        <Box
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            fontWeight="bold"
                            color="#F5F8FA"
                            textAlign="center"
                            whiteSpace="nowrap"
                        >
                            <Text fontSize="3rem">Machu Pichu</Text>
                            <Text fontSize="1.3rem">Ruínas de Machu Pichu</Text>
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box
                        w="100%"
                        h="100%"
                        position="relative"
                        bgImage="/mexico.jpg"
                        isolation="isolate"
                        _after={{
                            content: "''",
                            position: "absolute",
                            inset: 0,
                            zIndex: -1,
                            bg: "black",
                            opacity: "0.5"
                        }}
                    >
                        <Box
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            fontWeight="bold"
                            color="#F5F8FA"
                            textAlign="center"
                            whiteSpace="nowrap"
                        >
                            <Text fontSize="3rem">Mexico</Text>
                            <Text fontSize="1.3rem">Praia no méxico</Text>
                        </Box>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};
