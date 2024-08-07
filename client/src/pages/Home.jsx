import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heroImage from "../images/hero.jpeg";
import { Link } from "react-router-dom";
const Home = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box>
      <Box
        position="relative"
        width={"100%"}
        height={{ base: "300px", md: "500px" }}
        backgroundImage="url('https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?b=1&s=612x612&w=0&k=20&c=Qoj0rPQNDGT8VdvMhGfXwW-dV0fYVjRCGvH027RyKyg=')"
        backgroundSize="contain"
        backgroundRepeat={"no-repeat"}
        backgroundColor={"black"}
        color="white"
        textAlign="center"
        p={4}
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h1" size={{ base: "lg", md: "2xl" }}>
          Welcome to Our E-Commerce Store
        </Heading>
        <Text mt={4} fontSize={{ base: "sm", md: "lg" }}>
          Discover a wide range of products to suit your needs and preferences.
        </Text>
        <Button mt={4} colorScheme="tomato" size="lg">
          <Link to="/products">Shop Now</Link>
        </Button>
      </Box>

      {/* Carousel Section */}
      <Box my={8} mx="auto" maxW="500px" p={4}>
        <Carousel showArrows={true} showThumbs={false} autoPlay infiniteLoop>
          <Box>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsLFnymVNnYANnhrLOgfdbMYGkEXeTW1N0w&s" />
            <Text textAlign="center" mt={2}>
              Product 1
            </Text>
          </Box>
          <Box>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKvutl9qtxWYdiwPoUPcN8tq3GUeCNeOwNw&s" />
            <Text textAlign="center" mt={2}>
              Product 2
            </Text>
          </Box>
          <Box>
            <Image src="https://images.herzindagi.info/image/2021/Sep/chaii-samosa.jpg" />
            <Text textAlign="center" mt={2}>
              Product 3
            </Text>
          </Box>
        </Carousel>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        bg="tomato"
        color="white"
        py={4}
        textAlign="center"
        position="relative"
        bottom={0}
        width="100%"
      >
        <Text>
          &copy; {new Date().getFullYear()} E-Commerce Store. All rights
          reserved.
        </Text>
      </Box>
    </Box>
  );
};
export default Home;
